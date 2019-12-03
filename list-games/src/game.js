import React, { Component } from "react";


/* display each game on a <Game /> component.
<Game /> retrieves with props the information of each
 game (name, background_image, rating...) and displays it 
in the format of your choice. */

export class Game extends Component {


  render() {
    const { name, background_image, rating, id } = this.props.game;
    return (
      <div className="card">
        <h1>{name}</h1>
        <h2>Rating: {rating}</h2>
        <img src={background_image} alt={name}/>

{/*<Game /> contains a <button> that removes a game on click from the state. */}

        <button className="button" onClick={this.props.deleteGame.bind(this, id)}>
            Delete Game
        </button>
       
      </div>
    );
  }
}

export default Game;