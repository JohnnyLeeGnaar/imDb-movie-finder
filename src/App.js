import "./App.css";
import React from "react";

import Series from "./components/Series";
import Show from "./components/Show";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Series}></Route>
          <Route exact path="/:id" component={Show}></Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
