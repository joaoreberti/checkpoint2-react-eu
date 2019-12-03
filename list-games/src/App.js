import React from 'react';
import './App.css';


import GameList from "./gamelist";

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Games List</h1><br></br>
        <div className="grid">
          <GameList />
        </div>
      </div>
    </div>
  );
}

export default App;
