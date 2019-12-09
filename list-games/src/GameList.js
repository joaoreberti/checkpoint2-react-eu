import React from 'react';
import {NavLink} from "react-router-dom";
import Game from './Game'
import './Game.css'
const axios = require('axios');



class GameList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameList : [{},{}],
      all : true,
      allGames :[{},{}]
    }

  }

 deleteAGame = (index) => {
    let gamesList = this.state.gameList;
    delete gamesList[index];
    this.setState({
      gameList : gamesList
    })
  }

  filterGames = () => {
    let gamesList = this.state.gameList;
    let listOfGamesFilter = gamesList.filter(game => game.rating > 4.5)
    this.setState({
      gameList : listOfGamesFilter,
      all : false
    })
  }

  allGames = () =>{
    let allGames = this.state.allGames
    this.setState({
      gameList : allGames,
      all : true
    })
  }

  componentDidMount() {
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then((response) => {
      console.log(response.data);
      this.setState({
        gameList : response.data,
        allGames : response.data
      })
    })
  }

  render(){
    let gamesList = this.state.gameList;
    let listOfGames = gamesList.map((game, index)  => {
       return <Game key={index} deleteAGame={this.deleteAGame} id={index} name={game.name} background_image={game.background_image} rating={game.rating} />
    });

    return (

      <div className="game-list">
          <h4 className="game-list-title">A beautiful Game's list</h4>
          {this.state.all
            ? <button onClick={this.filterGames}> Filter movies </button>
            : <button onClick={this.allGames}> All games </button>
          }
          <div className="display-games">
            {listOfGames}
          </div>
      </div>
    )
  }
}


export default GameList;
