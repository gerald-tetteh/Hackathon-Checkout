/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Checkout Page
*/

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "../css/checkoutPage.css";
import CardForm from "../components/CardForm";

const CheckoutPage = () => {
  const { mode } = useParams();
  console.log(mode);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="checkout-page"
    >
      {mode === "Card" && <CardForm />}
    </motion.div>
  );
};

export default CheckoutPage;
