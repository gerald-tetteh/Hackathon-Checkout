// Author: Gerald Addo-Tetteh
// Checkout App
// app.js Express Server

const path = require("path");

const express = require("express");
require("dotenv").config({
  path: path.join(__dirname, "..", "server", ".env"),
});

const app = express();

const paymentRoutes = require("./routes/payment");

app.use(express.static(path.join(__dirname, "..", "client", "build")));
// body parser
app.use(express.json());

// routes
app.use(paymentRoutes);

// general routes
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(process.env.PORT);
