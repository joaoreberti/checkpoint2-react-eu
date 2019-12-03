import React from 'react';
import './App.css';
import GameList from './gameList';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
  <Router >
    <Switch> 
      <Route path="/" component={GameList}/>
      <Route path="/jeu/screenshots/:id" component={GameList} />
    </Switch>
  </Router>
  );
}

export default App;
