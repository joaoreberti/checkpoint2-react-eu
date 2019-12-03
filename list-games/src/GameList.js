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

    //because the state is set onClick, when best games page is reloaded the state is empty and nothing renders. Best practice?

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
      console.log(this.state.games)
    return (
      <>
        <Switch>

        <Route 
                exact path="/"
                render={() => 
                    <>
                    <Link to="/best-games">
                        <button onClick={()=>this.best_games()}>
                                Best Games
                        </button>
                    </Link>
                   
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

            <Route 
                exact path="/best-games"
                render={() =>
                    <>
                    <Link to="/">
                        <button>
                                All games
                        </button>
                    </Link>
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