import React from 'react';
import './App.css';
import GameList from './components/GameList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="table-game-zone">
        <GameList />
      </div>
    </div>
  );
}

export default App;
