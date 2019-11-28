import React, { Component } from "react";

export class GameList extends Component {
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
  render() {
    return <div></div>;
  }
}

export default GameList;
