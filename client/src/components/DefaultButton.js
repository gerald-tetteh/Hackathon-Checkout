/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Default Navigation Button
*/

import { Link } from "react-router-dom";

const DefaultButton = ({ text, to, onClick }) => {
  const handleOnClick = () => {
    if (to === "#") {
      onClick();
    }
  };

  return (
    <div className="btn-container" onClick={handleOnClick}>
      <Link to={to} className="btn">
        <p className="btn-text">{text}</p>
      </Link>
    </div>
  );
};

export default DefaultButton;
