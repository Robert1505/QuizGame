import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import "./custom.css";
import LandingPage from "./Pages/LandingPage";

export default () => (
  <Layout>
    <Route exact path="/">
      <LandingPage />
    </Route>
  </Layout>
);
