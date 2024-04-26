
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('Home', {
        key: process.env.PUBLISHABLE_KEY
    })
})

app.post('/payment', function (req, res) {

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'John Doe',
        address: {
            line1: '123 Main Street',
            postal_code: '12345',
            city: 'Anytown',
            state: 'California',
            country: 'USA',
        }
    })
        .then((customer) => {

            return stripe.charges.create({
                amount: 3500,
                description: 'Web Development Service',
                currency: 'USD',
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success")
        })
        .catch((err) => {
            res.send(err)
        });
})

app.listen(process.env.PORT, function (error) {
    if (error) throw error
    console.log(`Service listening on ${process.env.PORT} ...`)
})
