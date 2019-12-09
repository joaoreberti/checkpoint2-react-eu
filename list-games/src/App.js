import React, {Component} from 'react';
import GameList from './components/GameList';
import './App.css';

class App extends Component {
  
  render () {
    return (
          <div className="App">
            <div className="App-header">
              <GameList />
            </div>
          </div>
    );
  }
}

export default App;
