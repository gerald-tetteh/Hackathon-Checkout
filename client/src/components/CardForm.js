/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Card Form for CheckoutPage
*/

import { useEffect, useRef, useState, useContext } from "react";
import Payment from "payment";
import FormSubmitButton from "./FormSubmitButton";
import Loader from "react-loader-spinner";
import { SnackbarContext } from "../providers/Store";
import useFetch from "../utils/handleFetch";

import visaImage from "../assets/visa.png";
import mastercardImage from "../assets/mastercard.png";
import discoverImage from "../assets/discover.png";
import amexImage from "../assets/american-express.png";

const CardForm = () => {
  const [, setShowSnackbar, , setSnackbarText] = useContext(SnackbarContext);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [highlightCard, setHighlightCard] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const setUrl = useFetch(setShowLoading, "/payment/card");

  const cardNumberRef = useRef();
  const cardHolderRef = useRef();
  const expirationDateRef = useRef();
  const cvcRef = useRef();

  const cardTypes = {
    visa: "Visa",
    mastercard: "Mastercard",
    discover: "Discover",
    amex: "American Express",
  };

  useEffect(() => {
    Payment.formatCardNumber(cardNumberRef.current);
    Payment.formatCardCVC(cvcRef.current);
    Payment.formatCardExpiry(expirationDateRef.current);
  }, []);

  const handleValidateInput = () => {
    let error = false;
    if (
      !Payment.fns.validateCardNumber(cardNumber) &&
      !Object.keys(cardTypes).includes(highlightCard)
    ) {
      cardNumberRef.current.classList.add("error-border");
      error = true;
    } else {
      cardNumberRef.current.classList.remove("error-border");
    }
    if (!Payment.fns.validateCardCVC(cvc)) {
      cvcRef.current.classList.add("error-border");
      error = true;
    } else {
      cvcRef.current.classList.remove("error-border");
    }
    if (!Payment.fns.validateCardExpiry(expirationDate)) {
      expirationDateRef.current.classList.add("error-border");
      error = true;
    } else {
      expirationDateRef.current.classList.remove("error-border");
    }
    if (cardHolder.length < 1) {
      cardHolderRef.current.classList.add("error-border");
      error = true;
    } else {
      cardHolderRef.current.classList.remove("error-border");
    }
    return error;
  };
  const handleBuildUrl = () => {
    const orderId = (Math.random() * 1000).toFixed(0);
    const closedCardNumber = cardNumber.split(" ").join("");
    const closedCardExpiry = expirationDate.split(" ").join("");
    return `https://www.paybox.com.co/pay?amount=20.99&currency=GHS&mode=Card&card_type=${cardTypes[highlightCard]}&card_name=${cardHolder}&card_number=${closedCardNumber}&card_expiry=${closedCardExpiry}&card_cvc=${cvc}&payload={}&order_id=PB_${orderId}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoading(true);
    const error = handleValidateInput();
    if (error) {
      setSnackbarText("Invalid Inputs");
      setShowSnackbar(true);
      setShowLoading(false);
      return;
    }
    setUrl(handleBuildUrl());
  };

  return (
    <form className="checkout-page-form" method="POST" onSubmit={handleSubmit}>
      <div className="card-form">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          ref={cardNumberRef}
          type="text"
          name="cardNumber"
          id="cardNumber"
          value={cardNumber}
          placeholder="xxxx xxxx xxxx xxxx"
          onChange={(e) => {
            setCardNumber(e.target.value);
            setHighlightCard(Payment.fns.cardType(e.target.value));
          }}
        />
        <label htmlFor="cardHolder">Card Holder</label>
        <input
          ref={cardHolderRef}
          type="text"
          name="cardHolder"
          id="cardHolder"
          value={cardHolder}
          placeholder="John Deo Shearer"
          onChange={(e) => setCardHolder(e.target.value)}
        />
        <div className="input-horizontal">
          <div className="input-horizontal--item">
            <label htmlFor="expirationDate">Exp. Date</label>
            <input
              ref={expirationDateRef}
              className="horizontal"
              name="expirationDate"
              id="expirationDate"
              value={expirationDate}
              placeholder="MM / YY"
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </div>
          <div className="input-horizontal--item">
            <label htmlFor="cvc">CVC</label>
            <input
              ref={cvcRef}
              value={cvc}
              className="horizontal"
              name="cvc"
              id="cvc"
              placeholder="xxx"
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        <div className="checkout-page-image-container">
          <img
            src={visaImage}
            alt="Visa Card"
            className={`checkout-page--image ${
              highlightCard === "visa" ? "select-image" : ""
            }`}
          />
          <img
            src={mastercardImage}
            alt="Mastercard"
            className={`checkout-page--image ${
              highlightCard === "mastercard" ? "select-image" : ""
            }`}
          />
          <img
            src={discoverImage}
            alt="Discover Card"
            className={`checkout-page--image ${
              highlightCard === "discover" ? "select-image" : ""
            }`}
          />
          <img
            src={amexImage}
            alt="American Express Card"
            className={`checkout-page--image ${
              highlightCard === "amex" ? "select-image" : ""
            }`}
          />
        </div>
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

export default CardForm;
