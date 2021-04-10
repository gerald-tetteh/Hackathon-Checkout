/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Snackbar Component
*/

import { SnackbarContext } from "../providers/Store";
import { useContext, useEffect } from "react";

const SnackBar = () => {
  const [showSnackbar, setShowSnackbar, snackbarText] = useContext(
    SnackbarContext
  );
  useEffect(() => {
    if (showSnackbar) {
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2000);
    }
  }, [showSnackbar]);

  return (
    <div>
      {showSnackbar && (
        <div className="snackbar">
          <span className="snackbar-text">{snackbarText}</span>
        </div>
      )}
    </div>
  );
};

export default SnackBar;
