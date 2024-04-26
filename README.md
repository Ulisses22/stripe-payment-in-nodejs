# Stripe Payment Integration in Node.js - [demo](#demo)

This project demonstrates how to integrate the Stripe payment gateway into a Node.js application. With this setup, you can securely process payments for goods or services on your website.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js installed on your system.
- A Stripe account. If you don't have one, you can sign up [here](https://dashboard.stripe.com/register).

## Installation

1. Clone or download this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of your project.
2. Add your Stripe API keys to the `.env` file:
    ```plaintext
    STRIPE_SECRET_KEY=your_stripe_secret_key
    PUBLISHABLE_KEY=your_stripe_publishable_key
    PORT=3000
    ```
    Replace `your_stripe_secret_key` and `your_stripe_publishable_key` with your actual Stripe API keys.

## Usage

To start the server, run the following command in your terminal:

```bash
node --env-file=.env  app.js
```

This will start the server at http://localhost:3000 by default.
Endpoints

    GET /: Renders the home page with a Stripe payment form.
    POST /payment: Handles the payment processing.

Code Overview
Dependencies

    express: Web application framework for Node.js.
    body-parser: Middleware to parse incoming request bodies.
    ejs: Template engine for rendering views.
    stripe: Stripe Node.js library for interacting with the Stripe API.


### Demo
![demo](https://github.com/Ulisses22/stripe-pyment-in-nodejs/blob/main/586b36f9-8038-407b-a198-8049fcc8c5c2.gif)

app.js

This file contains the main application logic. It sets up the Express server, configures middleware, defines routes, and handles payment processing.
views/Home.ejs

This EJS template renders the home page with a Stripe payment form. It includes the Stripe.js script to securely handle payment information.
package.json

Contains metadata about the project and its dependencies.
License

This project is licensed under the ISC License. See the LICENSE file for details.

Feel free to customize this README to fit your project's specific needs. Happy coding! 🚀

