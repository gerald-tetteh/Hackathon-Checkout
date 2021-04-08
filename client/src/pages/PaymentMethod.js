/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Select payment method page
*/

import { motion, useAnimation } from "framer-motion";
import { useState, useContext } from "react";
import { SnackbarContext } from "../providers/Store";
import DefaultButton from "../components/DefaultButton";
import DropdownMenuItems from "../components/DropdownMenuItems";

import "../css/paymentMethodPage.css";

const PaymentMethod = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Select Method");
  const [modeAndNetwork, setModeAndNetwork] = useState("");
  const [, setShowSnackbar] = useContext(SnackbarContext);
  const listControls = useAnimation();
  const arrowControls = useAnimation();

  const handleOpenDropdown = () => {
    listControls.start({
      opacity: 1,
      height: "auto",
      display: "block",
    });
    arrowControls.start({
      rotate: 180,
      scale: 2,
    });
  };
  const handleCloseDropdown = () => {
    listControls.start({
      opacity: 0,
      height: 0,
      display: "none",
      transition: { duration: 0.3 },
    });
    arrowControls.start({
      rotate: 0,
      scale: 2,
    });
  };
  const toggleDropdown = (isOpen) => {
    if (!isOpen) {
      handleOpenDropdown();
    } else {
      handleCloseDropdown();
    }
    setIsOpen(!isOpen);
  };
  const handleItemOnClick = (e) => {
    setPaymentMethod(e.target.innerText);
    setModeAndNetwork(e.target.id);
    handleCloseDropdown();
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
          <span>{paymentMethod}</span>
          <motion.span animate={arrowControls} transition={{ duration: 0.7 }}>
            &#8609;
          </motion.span>
        </div>
        {/* Dropdown list items */}
        <DropdownMenuItems
          listControls={listControls}
          listItems={listItems}
          itemOnClick={handleItemOnClick}
        />
      </div>
      {modeAndNetwork.length > 1 && paymentMethod.length > 1 ? (
        <DefaultButton to={`/checkout/${modeAndNetwork}`} text="Next &#8594;" />
      ) : (
        <DefaultButton
          to="#"
          text="Next &#8594;"
          onClick={() => setShowSnackbar(true)}
        />
      )}
    </motion.div>
  );
};

export default PaymentMethod;
