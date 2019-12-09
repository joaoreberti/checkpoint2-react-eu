import React, { Component } from "react";
import Game from './Game.js'

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // games: [],
      name: [],
      background_image: [],
      rating: []
    }
  }

  componentDidMount() {
    fetch(`https://wild-games.herokuapp.com/api/v1`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        let games = data.map((hits) => {
          this.state.name.push(hits.name)
          // console.log(hits.name)
          this.state.background_image.push(hits.background_image)
          this.state.rating.push(hits.rating)
        // return(
        //   <div>
        //     {hits.name} - {hits.rating}/5 ⭐
        //     <img src={hits.background_image} />
        //   </div>
        // )
      })
      // this.setState({games: games});
      // console.log("state", this.state.games);
    })
  }

  render() {
    let name = this.state.name;
    let picture = this.state.background_image;
    let rating = this.state.rating
    return(
      <div>
        <Game name={name} picture={picture} rating={rating} />
      </div>
    )
  }

}

export default GameList;