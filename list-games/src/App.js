import React, { Component } from 'react';
import './App.css';
import GameList from './GameList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isShowing: true,
    }
  }

  getGame = () => {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          games: data
        }) 
      })
  };

  handleGameShows = (clickedGame) => {
    this.setState(
      (state) => {
        const updatedGames = state.games.map((games) => {
          if(games.text === clickedGame.text) {
            games.isShowing = !games.isShowing;
          }
          return games;
        })
        return {
          ...state,
          games: updatedGames
        }
      },
    )
  }

  componentDidMount(){
    this.getGame()
  }

  render () {
    return (
      <div className="Games">
        <div className="header">
          Which game would you like to learn more about?
        </div>
        <GameList games={this.state.games} onClick={this.handleGameShows} />
      </div>
    )
  }
}

export default App;

// to do:
// - clone project - check!
// - create a branch - check!
// - create app - check!
// - commit - check!
// - Two components (Game & GameList) - check!
// - Fetching - check!
// - GameList fetches from the API - check!
// - Each game displays on Game component - check!
// - Game retrieves with props the information of each game - check!
// - CSS to my choice - check!
// - Game contains a Button that removes a game from the state - not checked ever, apparently