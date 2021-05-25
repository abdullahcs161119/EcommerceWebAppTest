import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "./privateRoute";
import Login from "./views/authentication/login";
import { MainDashboard } from "./views/dashboard/MainDashboard";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={MainDashboard} />
      <PrivateRoute component={Cart} path="/cart" exact />
      <Redirect from="/" to="/dashboard"></Redirect>
    </Switch>
  );
}

export default App;
