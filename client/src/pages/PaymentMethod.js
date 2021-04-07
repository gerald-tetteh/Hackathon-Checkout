/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Select payment method page
*/

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import DefaultButton from "../components/DefaultButton";

import "../css/paymentMethodPage.css";

const PaymentMethod = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listControls = useAnimation();
  const arrowControls = useAnimation();

  const toggleDropdown = (isOpen) => {
    if (!isOpen) {
      listControls.start({
        opacity: 1,
        height: "auto",
      });
      arrowControls.start({
        rotate: 180,
        scale: 2,
      });
    } else {
      listControls.start({
        opacity: 0,
        height: 0,
        transition: { duration: 0.3 },
      });
      arrowControls.start({
        rotate: 0,
        scale: 2,
      });
    }
    setIsOpen(!isOpen);
  };

  const listItems = [
    { id: "Mobile Money,Vodafone", text: "MobileMoney: Vodafone" },
    { id: "Mobile Money,AirtelTigo", text: "MobileMoney: AirtelTigo" },
    { id: "Mobile Money,Mtn", text: "MobileMoney: Mtn" },
    { id: "Card", text: "Debit/Credit Card" },
    { id: "Bank", text: "Bank Transaction" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="payment-method"
    >
      <h2 className="payment-method-heading">Choose Payment Method:</h2>
      {/* Dropdown menu select */}
      <div className="payment-method-dropdown">
        <div
          className="payment-method-dropdown-textBox"
          onClick={() => toggleDropdown(isOpen)}
        >
          <span>Select Method</span>
          <motion.span animate={arrowControls} transition={{ duration: 0.7 }}>
            &#8609;
          </motion.span>
        </div>
        {/* Dropdown list items */}
        <motion.ul animate={listControls} transition={{ duration: 0.1 }}>
          {listItems.map((item, index) => {
            return (
              <motion.li
                id={item.id}
                className="payment-method-dropdown--item"
                key={index}
                animate={listControls}
                transition={{ duration: 0.1, delay: index * 0.1 }}
              >
                {item.text}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
      <DefaultButton to="#" text="Next &#8594;" />
    </motion.div>
  );
};

export default PaymentMethod;
