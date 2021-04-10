/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Checkout Page
*/

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "../css/checkoutPage.css";
import CardForm from "../components/CardForm";
import MobileMoneyForm from "../components/MobileMoneyForm";

const CheckoutPage = () => {
  const { mode } = useParams();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="checkout-page"
    >
      {mode === "Card" && <CardForm />}
      {mode.includes("Mobile") && (
        <MobileMoneyForm network={mode.split(",")[1]} />
      )}
    </motion.div>
  );
};

export default CheckoutPage;
