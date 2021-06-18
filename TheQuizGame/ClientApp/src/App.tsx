import * as React from "react";
import { Route } from "react-router";
import "./custom.css";
import LandingPage from "./Pages/LandingPage";

export default () => (
  <React.Fragment>
    <Route exact path="/">
      <LandingPage />
    </Route>
  </React.Fragment>
);
