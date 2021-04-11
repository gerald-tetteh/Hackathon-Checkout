/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  useFetch Hook
*/

// Used to send post requests.

import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { SnackbarContext } from "../providers/Store";

const useFetch = (setShowLoading, postUrl) => {
  const history = useHistory();
  const [, setShowSnackbar, , setSnackbarText] = useContext(SnackbarContext);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // abort controller
    const abortController = new AbortController();
    if (url) {
      fetch(postUrl, {
        signal: abortController.signal,
        method: "POST",
        body: JSON.stringify({
          path: url,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.text();
          }
          throw new Error("Could not complete transaction");
        })
        .then((_) => {
          setShowLoading(false);
          setSnackbarText("Transaction Complete");
          setShowSnackbar(true);
          history.push("/");
          setUrl(null);
        })
        .catch((err) => {
          setShowLoading(false);
          setSnackbarText(err.message);
          setShowSnackbar(true);
          setUrl(null);
        });
    }
    return () => abortController.abort();
  }, [url]);

  return setUrl;
};

export default useFetch;
