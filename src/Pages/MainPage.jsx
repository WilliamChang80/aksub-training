import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ErrorPage from "Pages/ErrorPage";
import PaymentPage from "Pages/PaymentPage";
import Navbar from "Components/Navbar/Navbar";
import ProductPage from "Pages/ProductPage";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <Switch>
          <Route path="/product" component={ProductPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route
            path="*"
            render={() => <ErrorPage status={404} message={"Page Not Found"} />}
          />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
