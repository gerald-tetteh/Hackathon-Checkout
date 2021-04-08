/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  Snackbar Store (Global Provider)
*/

import React, { useState } from "react";

export const SnackbarContext = React.createContext();

export const SnackbarStore = ({ children }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState(
    "You must select a payment method"
  );

  return (
    <SnackbarContext.Provider
      value={[showSnackbar, setShowSnackbar, snackbarText, setSnackbarText]}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
