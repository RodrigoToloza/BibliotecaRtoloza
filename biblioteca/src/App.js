import './App.css';
import React from 'react';
import Header from './Components/1Header/Header';
import Carrusel from './Components/2Carrusel/Carrusel';
import Libro from './Components/sharedComponents/Libro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
