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
import 'bootstrap/dist/css/bootstrap.min.css';
import { func } from 'prop-types';

function App() {
  const [games, setGames] = useState([])
  const [curentSelected, setCurrentSelected] = useState()
  const [sortRatingIsOn, setSortRating] =useState(false)
  let [displayedGames, setDisplayedGames] = useState([])
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
  function handleDelete(curentSelected) {
    games.splice(curentSelected,1)
  }
  function handleSortRating(){
    setSortRating(!sortRatingIsOn)
  }

  let sortBtnText = {}
  let bg_color
  if(!sortRatingIsOn) {
    sortBtnText.btn = 'Best Rated Games'
    sortBtnText.header = 'Latest Games'
    displayedGames = games
    
  } else {
    displayedGames = games.filter(el => el.rating >= 4.5).sort((el1, el2) => el1.rating - el2.rating).reverse()
    sortBtnText.btn ='All games'
    sortBtnText.header = 'Best Games'
  }
 
  return (
    <BrowserRouter>
    
      <Switch>
        <Route
          exact
          path="/games"
          component={() => <GameList 
            games = {displayedGames} 
            handleClick = {handleClick} 
            handleSortRating ={handleSortRating}
            btn_text = {sortBtnText}
            />}
        />

        <Route
          path="/games/:slug"
          component={() => <Game game = {displayedGames[curentSelected]} handleDelete = {handleDelete}/>}
        />

        <Redirect to="/Games"/>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
