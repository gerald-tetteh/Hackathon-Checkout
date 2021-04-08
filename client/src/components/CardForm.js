/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Card Form for CheckoutPage
*/

const CardForm = ({
  cardNumberRef,
  cardNumber,
  setCardNumber,
  setCardHolder,
  cardHolder,
  expirationDateRef,
  expirationDate,
  setExpirationDate,
  cvc,
  cvcRef,
  setCvc,
}) => {
  return (
    <div className="card-form">
      <label htmlFor="cardNumber">Card Number</label>
      <input
        ref={cardNumberRef}
        type="text"
        name="cardNumber"
        id="cardNumber"
        value={cardNumber}
        placeholder="xxxx xxxx xxxx xxxx"
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <label htmlFor="cardHolder">Card Holder</label>
      <input
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
    </div>
  );
};

export default CardForm;
