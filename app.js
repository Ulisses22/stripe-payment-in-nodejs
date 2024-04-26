const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(bodyParser.json());


app.post('/charge', async (req, res) => {
    const { amount, token } = req.body;

    try {
        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source: token.id,
            description: 'Chearge for test@example.com'
        });

        res.status(200).json({
            status: 200,
            message: 'Payment successful.'
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 500,
            message: 'Error creating charge.'
        })
    }
})



app.listen(process.env.PORT, () => {

    console.log(`Listening on ${process.env.PORT} ...`);
})