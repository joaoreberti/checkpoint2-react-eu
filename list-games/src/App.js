import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GameList from './components/GameList.component';

function App() {
  return (
    <div className="App">
      <h2 className="title">GudGames Navigator</h2>
      <GameList />
    </div>
  );
}

export default App;
