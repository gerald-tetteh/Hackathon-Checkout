/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Default Navigation Button
*/

import { Link } from "react-router-dom";

const DefaultButton = ({ text }) => {
  return (
    <div className="btn-container">
      <Link to="/" className="btn">
        <p className="btn-text">{text}</p>
      </Link>
    </div>
  );
};

export default DefaultButton;
