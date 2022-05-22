const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HDhgKLaiTqOxKULxcoaKMBfEAhoEVZnucA9HVEj2AH0qaPsntyAJtioOvzMNrKmPciv7ayiJpWWmRvbYpoi8kTS00Qs8731ji"
);

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("Hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recieved!!!", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "ngn",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen
exports.api = functions.https.onRequest(app);
