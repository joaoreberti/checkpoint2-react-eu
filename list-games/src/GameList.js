import React, { Component } from 'react';

import axios from 'axios';
import Game from './Game';

class GameList extends Component {
    constructor(props){
        super(props);
        this.state = {
            games: [],
    }
  }

  componentDidMount() {
    axios.get(`https://wild-games.herokuapp.com/api/v1`)
      .then(res => {
        const games = res.data;
        this.setState({ games });
      })
  }

  render() {
    return (
      <ul>
        { this.state.games.map(game => <Game name={game.name} image={game.background_image} rating={game.rating}/>)}
      </ul>
    )
  }
}
export default GameList;