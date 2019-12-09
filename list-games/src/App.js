import React from 'react';
import './App.css';
import GameList from './GameList.js';
import Agame from './Agame';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={GameList}/>
        <Route to="/jeu/screenshots/" render={ () => (
          <Agame
          />)}
        />
      </Switch>

    </div>
  );
}

export default App;


// <Router>

//   <Link className="btn" exact to={"/jeu/screenshots"}> More details </Link>
// </Router>
