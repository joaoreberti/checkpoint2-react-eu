import React from 'react';
import {NavLink} from "react-router-dom";
import './Game.css'

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  deleteMe = (index) => {
    this.props.deleteAGame(index);
  }

  render(){
    return (

      <div className="game">
        <p>{this.props.name}</p>
        <img className="image" src={this.props.background_image}/>
        <p>Rating : {this.props.rating}</p>
        <button className="btn" onClick={() => this.deleteMe(this.props.id)}> Delete Me </button>
      </div>
    )
  }
}


export default Game;
