import React, {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { AppBar, Toolbar, Typography, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import GameList from './components/GameList'
import Game from './components/Game'

function App() {
  const [games, setGames] = useState([])
  const [curentSelected, setCurrentSelected] = useState()

    useEffect(
        () => {
            fetch("https://wild-games.herokuapp.com/api/v1")
                .then(r => r.json())
                .then(data => setGames(data))
        },
        []
    )
  
  function handleClick(index) {
    setCurrentSelected(index)
  }

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="secondary">
            Wild Games
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route
          exact
          path="/games"
          component={() => <GameList games = {games} handleClick = {handleClick}/>}
        />

        <Route
          path="/games/:slug"
          component={() => <Game game = {games[curentSelected]}/>}
        />

        <Redirect to="/Games"/>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
