import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/0Login/Login";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/main" component={Main}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
