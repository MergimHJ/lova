   const express = require('express');
   const stripe = require('stripe')('sk_test_VOTRE_CLE_SECRETE');
   const app = express();

   app.use(express.json());

   app.post('/create-checkout-session', async (req, res) => {
     try {
       const { price, programName } = req.body;
       
       const session = await stripe.checkout.sessions.create({
         payment_method_types: ['card'],
         mode: 'payment',
         line_items: [{
           price_data: {
             currency: 'eur',
             product_data: { name: programName },
             unit_amount: price * 100, // en centimes
           },
           quantity: 1,
         }],
         success_url: 'https://votre-site.com/success',
         cancel_url: 'https://votre-site.com/cancel',
       });

       res.json({ id: session.id });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });

   app.listen(3000);