import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Login from './Components/0Login/Login'
import Main from './Components/Main'
import NavBar from './Components/3Main/NavBar'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/Main" component={Main}></Route>
          <Route exact path="/NavBar" component={NavBar}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
