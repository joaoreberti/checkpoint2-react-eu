import React, { Component } from "react";
import Game from "./game";

/* Use <GameList /> component to fetch from the API  */

class GameList extends Component {
  state = {
    games: [],
  };

  fetchGames() {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then(data => data.json())
      .then(games => {
        this.setState({ games, isPressed: false });
      });
  };

  componentDidMount() {
    this.fetchGames();
  };

  deleteGame = id => {
    this.setState({
      games: [...this.state.games.filter(game => game.id !== id)]
    });
  };
/*   When you click on the button, only games with a rating greater 
than or equal to 4.5 are displayed. */

  ratingGame = () => {
    if (this.state.isPressed === false) {
      let bestGames = this.state.games.filter(game => {return game.rating>="4.5"})
      this.setState({
        games: bestGames,
        isPressed: true, 
      })
    }
    else {this.fetchGames();}
  };

  render() {
    return (
      <div className="container">
        <h1>Games List</h1><br></br>

{/* Add a Best Games button to filter games by rating. 
The button text is replaced by All Games and when clicked, 
all games are displayed again.*/}

        <button className="button" onClick={this.ratingGame}>{this.state.isPressed ?  "All Games" : "Highest Rated"}
        </button>
        <div className="grid">
          {this.state.games.map(game => (
            <Game 
            key={game.id} 
            game={game} 
            deleteGame={this.deleteGame} 
            ratingGame={this.ratingGame}
            />
          ))}
        </div>
      </div>
    )
  }
};

export default GameList;