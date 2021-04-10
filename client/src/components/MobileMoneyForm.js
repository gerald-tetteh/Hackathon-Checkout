/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  MobileMoney Form
*/

import { useRef, useState, useContext } from "react";
import Loader from "react-loader-spinner";

import FormSubmitButton from "../components/FormSubmitButton";
import { SnackbarContext } from "../providers/Store";

const MobileMoneyForm = ({ network }) => {
  const [, setShowSnackbar, , setSnackbarText] = useContext(SnackbarContext);
  const [mobileNumber, setMobileNumber] = useState("+233");
  const [showLoading, setShowLoading] = useState(false);

  const inputRef = useRef();

  const handleAddSpace = (string, index) => {
    const startString = string.slice(0, index);
    const lastItem = string[index];
    setMobileNumber(`${startString} ${lastItem}`);
  };

  const handleSetMobileNumber = (value) => {
    value = value.trim();
    if (value.length === 17) {
      return;
    }
    if (!Number(value.split(" ").join(""))) {
      return;
    }
    if (value.length < 4) {
      return;
    }
    if (value.length === 5) {
      handleAddSpace(value, 4);
    } else if (value.length === 8) {
      handleAddSpace(value, 7);
    } else if (value.length === 12) {
      handleAddSpace(value, 11);
    } else {
      setMobileNumber(value);
    }
  };

  const handleCheckNetworkCode = (networkCodes, number) => {
    const networkCode = number.slice(4, 6);
    if (!networkCodes.includes(networkCode)) {
      return true;
    }
    return false;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowLoading(true);
    let error = false;
    const number = inputRef.current.value.split(" ").join("");
    if (number.length !== 16) {
      inputRef.current.classList.add("error-border");
      error = true;
    }
    if (network === "Vodafone") {
      error = handleCheckNetworkCode(["20", "50"], number);
    } else if (network === "Mtn") {
      error = handleCheckNetworkCode(["24", "54", "55", "59"], number);
    } else if (network === "AirtelTigo") {
      error = handleCheckNetworkCode(["27", "57", "26", "56"], number);
    } else {
      error = true;
    }
    if (error) {
      inputRef.current.classList.add("error-border");
      setSnackbarText("Invalid Mobile Number");
      setShowSnackbar(true);
      setShowLoading(false);
    } else {
      setShowLoading(false);
      inputRef.current.classList.remove("error-border");
    }
  };

  return (
    <form
      className="checkout-form-page"
      method="POST"
      onSubmit={handleFormSubmit}
    >
      <div className="mobile-money-form">
        <label htmlFor="mobile-number">Mobile Number</label>
        <input
          ref={inputRef}
          type="text"
          name="mobile-number"
          value={mobileNumber}
          id="mobile-number"
          placeholder="+233 34 577 8457"
          onChange={(e) => handleSetMobileNumber(e.target.value)}
        />
      </div>
      {showLoading ? (
        <div className="center">
          <Loader
            visible={true}
            type="ThreeDots"
            color="#795548"
            width={80}
            height={80}
          />
        </div>
      ) : (
        <FormSubmitButton />
      )}
    </form>
  );
};

export default MobileMoneyForm;
