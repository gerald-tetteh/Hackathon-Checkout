// Gerald Addo-Tetteh
// Payment Routes
// Makes requests to PayBox Api

const express = require("express");
const router = express.Router();

const paymentControllers = require("../controllers/payment");

router.post("/payment/card", paymentControllers.postCardPayment);
router.post("/payment/mobile-money", paymentControllers.postMobileMoneyPayment);
router.post("/payment/bank", paymentControllers.postBankPayment);

module.exports = router;
