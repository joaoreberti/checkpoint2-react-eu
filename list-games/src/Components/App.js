import React, { Component } from 'react';
import GameList from './GameList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesData: [],
      showOnlyBestGames: false
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

  handleBestGames = () => {
    this.setState({
        showOnlyBestGames: !this.state.showOnlyBestGames
      })
  }



  render() {
    const { gamesData, showOnlyBestGames } = this.state;

    return (
      <div className="App">
        <GameList
          gamesData={gamesData}
          onRemoveFromList={this.handleRemoveFromList}
          showOnlyBestGames={showOnlyBestGames}
          onPickByRating={this.handleBestGames}
        />
      </div>
    )

  }


}

export default App;
