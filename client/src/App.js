/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  App js
*/

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/app.css";
import BasketListPage from "./pages/BasketList";
import PaymentMethod from "./pages/PaymentMethod";
import SnackBar from "./components/SnackBar";
import Navbar from "./components/Navbar";
import { SnackbarStore } from "./providers/Store";

function App() {
  return (
    <Router>
      <SnackbarStore>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BasketListPage />
          </Route>
          <Route exact path="/payment-method">
            <PaymentMethod />
          </Route>
        </Switch>
        <div className="spacer"></div>
        <SnackBar />
      </SnackbarStore>
    </Router>
  );
}

export default App;
