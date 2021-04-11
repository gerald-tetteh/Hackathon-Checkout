/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Bank Form
*/

import { useRef, useState } from "react";
import useFetch from "../utils/handleFetch";
import Loader from "react-loader-spinner";

import FormSubmitButton from "../components/FormSubmitButton";

const BankForm = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountPin, setAccountPin] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const setUrl = useFetch(setShowLoading, "/payment/bank");

  const bankNameRef = useRef();
  const accountNumberRef = useRef();
  const accountPinRef = useRef();

  const handleSetAccountNumber = (e) => {
    if (
      Number(e.target.value) ||
      e.target.value.length === 0 ||
      Number(e.target.value) === 0
    ) {
      setAccountNumber(e.target.value);
    }
  };
  const handleSetAccountPin = (e) => {
    if (e.target.value.length > 4) return;
    if (
      Number(e.target.value) ||
      e.target.value.length === 0 ||
      Number(e.target.value) === 0
    )
      setAccountPin(e.target.value);
  };
  const handleValidateInput = () => {
    let error = false;
    if (bankName.length < 1) {
      bankNameRef.current.classList.add("error-border");
      error = true;
    } else {
      bankNameRef.current.classList.remove("error-border");
    }
    if (accountNumber.length < 1) {
      accountNumberRef.current.classList.add("error-border");
      error = true;
    } else {
      accountNumberRef.current.classList.remove("error-border");
    }
    if (accountPin.length < 1) {
      accountPinRef.current.classList.add("error-border");
      error = true;
    } else {
      accountPinRef.current.classList.remove("error-border");
    }
    return error;
  };
  const handleBuildUrl = () => {
    return `https://www.paybox.com.co/pay?amount=20.99&currency=GHS&mode=Bank&bank_name=${bankName}&bank_account=${accountNumber}&bank_account_pin=${accountPin}`;
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowLoading(true);
    const error = handleValidateInput();
    if (error) {
      setShowLoading(false);
      return;
    }
    setUrl(handleBuildUrl());
  };

  return (
    <form className="checkout-form-page" onSubmit={handleFormSubmit}>
      <div className="bank-form">
        <label htmlFor="bank-name">Bank Name</label>
        <input
          ref={bankNameRef}
          type="text"
          name="bank-name"
          value={bankName}
          id="bank-name"
          placeholder="EcoBank"
          onChange={(e) => setBankName(e.target.value)}
        />
        <label htmlFor="bank-account-number">Bank Account Number</label>
        <input
          ref={accountNumberRef}
          type="text"
          name="bank-account-number"
          value={accountNumber}
          id="bank-account-number"
          placeholder="00011111000011"
          onChange={handleSetAccountNumber}
        />
        <label htmlFor="bank-account-pin">Bank Account Pin</label>
        <input
          ref={accountPinRef}
          type="text"
          name="bank-account-pin"
          value={accountPin}
          id="bank-account-pin"
          placeholder="1234"
          onChange={handleSetAccountPin}
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

export default BankForm;
