import React, { Component } from "react";
import Game from './Game.js'

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    fetch(`https://wild-games.herokuapp.com/api/v1`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({games: res});
      // console.log("state", this.state.games);
    })
  }

  render() {
    return(
      <div> 
        {this.state.games.map((game) => <Game {...game}/>)
        }
      </div>
    )
  }

}

export default GameList;