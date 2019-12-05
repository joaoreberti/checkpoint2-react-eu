import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GameList from './components/GameList.component';
import Images from './components/Images.component';
import Game from './components/Game.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    {/* <Route path="/jeu" children={<GameList/>} component={GameList} /> */}
    <Route path="/jeu/screenshots/:id" children={<Images/>} component={Images} />
      </Switch>
      </BrowserRouter>
     
      <GameList/>
    </div>
  );
}

export default App;
