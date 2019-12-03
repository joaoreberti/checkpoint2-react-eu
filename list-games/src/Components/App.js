import React, { Component } from 'react';
import GameList from './GameList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesData: [],
      isOnList: true
    }
  }

  componentDidMount() {
    this.fetchGames()
  }

  fetchGames = () => {
    fetch(`https://wild-games.herokuapp.com/api/v1`)
      .then(res => res.json())
      .then(results => {
        this.setState({
          gamesData: results
        })
      })
  }

  handleRemoveFromList = (gameData) => {
    this.setState((prevState) => {
      const updatedGamesData = prevState.gamesData.filter((el) => el !== gameData)

      return {
        ...prevState,
        gamesData: updatedGamesData
      }
    })
  }




  render() {
    const { gamesData, isOnList } = this.state;
    console.log(gamesData)
    return (
      <div className="App">
        <GameList
          gamesData={gamesData}
          onRemoveFromList={this.handleRemoveFromList}
          isOnList={isOnList}
        />
      </div>
    )

  }


}

export default App;
