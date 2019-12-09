import React from 'react';
import './App.css';
import GameList from './components/GameList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <Router>
        <Link to ="">All Games</Link>
      </Router>
      </header>
      <div className="table-game-zone">
        <GameList />
      </div>
    </div>
  );
}

export default App;
