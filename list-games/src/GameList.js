import React, { Component } from 'react';
import './GameList.css';
import Game from "./Game";
import { Switch, Route, Link } from "react-router-dom"; 

class GameList extends Component {

  constructor (props){
    super(props);
    
    this.state = {
      games: [],
      bestGames: []
    }
  }

  fetch_games = () => {
    fetch("https://wild-games.herokuapp.com/api/v1")
    .then(results => results.json())
    .then(data => {
      this.setState( (state) => ({
        games: data,
      }))
    })
}

best_games = () => {
  this.setState((state) => {

      const filtered_rating =  
      state.games.filter((game) => {
        return game.rating>=4.5
      }); 
      
      return {
        bestGames: filtered_rating
      }
    })
}
  componentDidMount() {
    this.fetch_games()
    this.best_games()
  }

  remove_game = (game) => {
    this.setState((state) => {

        const filtered_games =  
        state.games.filter((item) => {
          return item !== game
        }); 
        
        return {
          games: filtered_games
        }
      })  
  }

  

  
  render() {
    return (
      <>
        <Switch>
            <Route 
                exact path="/best-games"
                render={() =>
                    <div className="gamesList-All">
                    {
                        this.state.bestGames.map((game, i) => {
                            return (
            
                                <Game
                                    key={i}
                                    game={game}
                                    remove_game={this.remove_game}
                                /> 
                            )
                        })  
                    }
                    </div>
                }
            >

            </Route>
            <Route 
                exact path="/"
                render={() => 
                    <>
                    <button>Best Games</button>
                    <div className="gamesList-All">
                    {
                        this.state.games.map((game, i) => {
                            return (
            
                                <Game
                                    key={i}
                                    game={game}
                                    remove_game={this.remove_game}
                                /> 
                            )
                        })  
                    }
                    </div>
                    </>
                }
            >
            </Route>

        </Switch>
      </>
    );

  }
}

export default GameList;