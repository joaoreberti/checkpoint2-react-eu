import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameList from './GameList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/jeu" component={GameList} />
      </Switch>
    </div>
  );
}

export default App;
