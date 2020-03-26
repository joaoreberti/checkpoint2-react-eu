import React, { Component } from "react";
import Game from "./Game";
import "./Gamelist.css";
class Gamelist extends Component {
  constructor() {
    super();
    this.state = {
      bestOnly: false,
      games: []
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRemove(index) {
    console.log(index);
    let newGame = [...this.state.games];
    newGame.splice(index, 1);
    console.log(newGame);
    this.setState({ games: newGame });
  }

  handleSubmit() {
    if (this.state.bestOnly === false) {
      this.setState({ bestOnly: true });
    } else {
      this.setState({ bestOnly: false });
    }
  }
  componentDidMount() {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then(result => result.json())
      .then(data => this.setState({ games: data }));
  }
  render() {
    return (
      <div>
        <header>
          <h1>Gamelist</h1>
          <button onClick={this.handleSubmit}>Best Games</button>
        </header>

        <div className="list">
          {this.state.games
          .filter(game=>
            this.state.bestOnly ? game.rating>4.5 : game.rating >0)
            .map((game, index) => (
                <Game
                  number={index}
                  toRemove={this.handleRemove}
                  gameData={game}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default Gamelist;
/* 

this.state.games */