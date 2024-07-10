import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../common/header";
import Home from "../Home/Home";
export const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Pages;
