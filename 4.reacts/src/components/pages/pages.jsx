import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../common/header";
export const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch></Switch>
      </Router>
    </div>
  );
};

export default Pages;
