/* 
  Author: Gerald Addo-Tetteh
  Checkout App
  App js
*/

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./css/app.css";
import BasketListPage from "./pages/BasketList";
import PaymentMethod from "./pages/PaymentMethod";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
