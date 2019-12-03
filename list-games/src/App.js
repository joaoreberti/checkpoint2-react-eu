import React from 'react';
import './App.css';
import GamesList from './GamesList';
// import Screenshots from './Screenshots'
// import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <h1>Games List</h1>
      <GamesList />
      {/* <Switch>
        <Route exact path="/" component={GamesList}/>
        <Route path={`/jeu/screenshots/${game.id}`} component={Screenshots}/>
      </Switch> */}
    </div>
  );
}

export default App;
