// const functions = require("firebase-functions");

// // // Create and deploy your first functions
// // // https://firebase.google.com/docs/functions/get-started
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MGmrQI0cImNYz53yT24TaqMLhiUEtyanm7HddhbOcR0qVV40OKQ2oy2HxH2VlrAyfl7qj1WD4LprfC5Mzhi5IhL00V1OVw4z4"
);
// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);