/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Checkout Page
*/

import { useEffect, useRef, useState } from "react";
import Payment from "payment";
import "../css/checkoutPage.css";
import CardForm from "../components/CardForm";

const CheckoutPage = () => {
  // Card variables and state
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const cardNumberRef = useRef();
  const expirationDateRef = useRef();
  const cvcRef = useRef();

  useEffect(() => {
    Payment.formatCardNumber(cardNumberRef.current);
    Payment.formatCardCVC(cvcRef.current);
    Payment.formatCardExpiry(expirationDateRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="checkout-page">
      <form
        className="checkout-page-form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <CardForm
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardHolder={cardHolder}
          setCardHolder={setCardHolder}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
          cvc={cvc}
          setCvc={setCvc}
          cardNumberRef={cardNumberRef}
          expirationDateRef={expirationDateRef}
          cvcRef={cvcRef}
        />
        <div className="btn-container">
          <button className="btn btn-convert" type="submit">
            <span className="btn-text">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
