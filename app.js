const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({
        success: true,
    })

})

app.post('/charge', function(req, res){
 
    // Moreover you can take more details from user
    // like Address, Name, etc from form
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: 'Gourav Hammad',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '452331',
            city: 'Indore',
            state: 'Madhya Pradesh',
            country: 'India',
        }
    })
    .then((customer) => {
 
        return stripe.charges.create({
            amount: 2500,     // Charging Rs 25
            description: 'Web Development Product',
            currency: 'INR',
            customer: customer.id
        });
    })
    .then((charge) => {
        res.send("Success")  // If no error occurs
    })
    .catch((err) => {
        res.send(err)       // If some error occurs
    });
})


app.listen(process.env.PORT, () => {

    console.log(`Listening on ${process.env.PORT} ...`);
})