import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { SnackbarContext } from "../providers/Store";

const useFetch = (url) => {
  const history = useHistory();
  const [, setShowSnackbar, , setSnackbarText] = useContext(SnackbarContext);
  const [, setShowLoading] = useState(false);

  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_USER_TOKEN}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.text();
      }
      throw new Error("Could not complete transaction");
    })
    .then((data) => {
      setShowLoading(false);
      setSnackbarText("Transaction Complete");
      setShowSnackbar(true);
      history.push("/");
    })
    .catch((err) => {
      setShowLoading(false);
      setSnackbarText(err.message);
      setShowSnackbar(true);
    });
};

export default useFetch;
