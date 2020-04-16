import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recordings from "./components/Recordings";
import HomePage from "./components/HomePage";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/recordings" exact component={Recordings} />
      </Switch>
    </Router>
  );
}
