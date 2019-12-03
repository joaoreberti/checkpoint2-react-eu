import React, { Component } from "react";
import Game from "./game";

/* Use <GameList /> component to fetch from the API  */

class GameList extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then(res => res.json())
      .then(games => {
        this.setState({ games });
        console.log(games);
      });
  }

  deleteGame = id => {
    this.setState({
      games: [...this.state.games.filter(game => game.id !== id)]
    });
  };

  render() {
    return this.state.games.map(game => (
      <Game key={game.id} game={game} deleteGame={this.deleteGame} />
    ));
  }
}

export default GameList;