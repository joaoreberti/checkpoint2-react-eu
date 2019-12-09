import React, { Component } from 'react';
import Game from './Game';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GameObjects: null,
    };
  };
  
  componentDidMount() {
    fetch(`https://wild-games.herokuapp.com/api/v1`)
    .then(res => res.json())
    .then((res) => {
      this.setState({ GameObjects: res })
      console.log(this.state.GameObjects)
    });
  };

  handleFilter = () => {
    console.log('je filtre')
    const result = this.state.GameObjects.filter(game => game.rating > 4.5);
    this.setState({
      GameObjects : result
    })
  }

  handleRemoveGame = (id) => {
    console.log('im in')
    console.log(id)
    let list = this.state.GameObjects;
    delete list[id];
    this.setState({
      GameObjects : list
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <button onClick={this.handleFilter}>
              Filter
          </button>
          <div className="card-deck">
            {
              this.state.GameObjects 
              ? this.state.GameObjects.map((game, index) => 
                <Game 
                    key ={index}
                    id = {index}
                    image = {game.background_image}
                    title = {game.name}
                    rating = {game.rating}
                    delete={this.handleRemoveGame}
                />
              )
              : 'loading ...'
            }
          </div>  
        </div>
      </div>
    );
  }

};

export default GameList;