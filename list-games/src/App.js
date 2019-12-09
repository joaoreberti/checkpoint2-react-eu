import React from "react";
import "./App.css";
import GameList from "./GameList";

function App() {
  return (
    <div className="App">
      <h1>List of Games</h1>
      <div><button className="btn btn-secondary">Best Games</button></div>
      <GameList />
    </div>
  );
}

export default App;
