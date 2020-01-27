import React, { Component } from "react";
import Game from "./Game";
import Box from "@material-ui/core/Box";
import Nav from "./Nav";

export class GameList extends Component {
  state = {
    games: [],
    filteredByRating: false
  };

  componentDidMount() {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then(res => res.json())
      .then(games => {
        this.setState({ games });
      });
  }

  deleteGame = id => {
    this.setState({
      games: [...this.state.games.filter(game => game.id !== id)]
    });
  };

  filterByRating = () => {
    this.setState({ filteredByRating: !this.state.filteredByRating });
  };

  render() {
    if (this.state.games === undefined) {
      return <div>Loading...</div>;
    }
    console.log(this.state.games);
    // let displayGames = this.state.games;
    // if (this.state.filteredByRating) {
    //   displayGames = this.state.games.filter(game => game.rating >= 4.5);
    // }

    return (
      <div>
        <Nav
          filterByRating={this.filterByRating}
          filteredByRating={this.state.filteredByRating}
        />

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="space-around"
          flexGrow={1}
        >
          {this.state.games
            .filter(game => !this.state.filteredByRating || game.rating >= 4.5)
            .map(game => (
              <Game key={game.id} game={game} deleteGame={this.deleteGame} />
            ))}
        </Box>
      </div>
    );
  }
}

export default GameList;
