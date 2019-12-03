import React from 'react';
import GameList from './GameList.js';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      rating: '',
    }
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    fetch('https://wild-games.herokuapp.com/api/v1')
      .then(response => response.json())
      .then(
        (data) => { 
          this.setState({
            games: data, 
          });
        }) 
  }

  handleRemoveFromState = (game) => {
    this.setState((prevState) => {
      const removeState = [...prevState.games].includes(game) ?
        prevState.games.filter((element) => element!==game) :
        [...prevState.games, game]
      return {
        ...prevState,
        games: removeState, 
      } 
    })
  }

  render() {
    return (
      <div>
        <GameList
          games={this.state.games}
          onRemoveFromState={this.handleRemoveFromState}
        />
      </div>
    )
  }
}

export default List;
