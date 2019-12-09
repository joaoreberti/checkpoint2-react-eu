import React from 'react';
import './App.css';
import GameList from './components/GameList';
import {
  Switch,
  Route
} from "react-router-dom";
import Screens from './components/Screens'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="table-game-zone">
          <Switch>
            <Route exact path="/" component={GameList}/>
            <Route to="/jeu/screenshot/" component={Screens}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
