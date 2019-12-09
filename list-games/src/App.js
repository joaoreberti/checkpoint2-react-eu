import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameList from './Components/GameList';
import Game from './Components/Game';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GameList />
    </div>
  );
}

export default App;













