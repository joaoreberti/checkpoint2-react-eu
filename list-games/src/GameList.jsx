import React, { Component } from "react";
import Game from "./Game";

class GameList extends Component {
  constructor() {
    super();
    this.state = {
      gameList: [
        {
          name: "",
          background_image: "",
          rating: ""
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then((response) => response.json())
      .then((data) => {
        // Once the data is collected, we update our state with the new data
        //console.log(data);
        this.setState({ gameList: data });
      });
  }

  removeArrayElem = (arrayElemId) => {
    var newArr = [...this.state.gameList];
    newArr.splice(arrayElemId, 1);
    this.setState({ gameList: newArr });
    console.log(newArr, arrayElemId);
    //update the state with the the array (as an item is now removed)
  };

  render() {
    return (
      <div>
        {this.state.gameList.map((game, arrayIndex) => (
          <Game
            arrayIndex={arrayIndex}
            remove={this.removeArrayElem}
            key={game.name}
            {...game}
          />
        ))}
      </div>
    );
  }
}

export default GameList;
