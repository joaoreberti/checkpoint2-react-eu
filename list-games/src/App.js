import React from 'react';
import GameList from './GameList.js'

import './App.css';

function App({ gameslist }) {
  return (
    
    <div>
     <GameList info={gameslist} ></GameList>
   </div>
  );
}

export default App;
