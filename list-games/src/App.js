import React, {Component} from 'react';
import Game from './components/Game';
import GameList from './components/GameList';
import './App.css';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Game />
          <GameList />
        </header>
      </div>
    );
  }
}

export default App;
