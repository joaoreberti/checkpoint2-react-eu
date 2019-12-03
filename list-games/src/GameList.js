import React from "react";
import Game from './Game';
import './GameList.css';


class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      gamePackages: [],
      filterByRating: false,
      topGames: []
    }
  }

  // API FETCH
  componentDidMount() {
    this.setState({ isLoaded: false }, () => {
      fetch(`https://wild-games.herokuapp.com/api/v1`)
        .then(res => res.json())
        .then(results => {
          this.setState({
            gamePackages: results,
            isLoaded: true,
            topGames: results.filter(game => game.rating >= 4.5)
          });
        });
    });
  };


  // REMOVE GAME FROM STATE
  hideGame = (clickedGamePackage) => {
    this.setState({ gamePackages: this.state.gamePackages.filter(game => game !== clickedGamePackage) })
  }

  // FILTER GAMES BY RATING
  filterGames = () => {
    this.setState({ filterByRating: !this.state.filterByRating })
  }


  render() {
    return (
      <div className="GameList">

        {/* Rating filter switch */}
        <div className="switchbox">
          <h2>{this.state.filterByRating ? "See All Games" : "See Top Rated Games"}</h2>
          <label className="switch">
            <input type="checkbox" onChange={this.filterGames} />
            <span className="slider round"></span>
          </label>
        </div>


        <div className="ui grid">
          {this.state.filterByRating ? (
            this.state.topGames.map(gamePackage => {
              return (
                <div className="four wide column">
                  <Game
                    gamePackage={gamePackage}
                    name={gamePackage.name}
                    rating={gamePackage.rating}
                    released={gamePackage.released}
                    image={gamePackage.background_image}
                    hideGame={this.hideGame}
                    filterByRating={this.state.filterByRating}
                    key={gamePackage.id}
                  />
                </div>
              );
            })
          ) : (
              this.state.gamePackages.map(gamePackage => {
                return (
                  <div className="four wide column">
                    <Game
                      gamePackage={gamePackage}
                      name={gamePackage.name}
                      rating={gamePackage.rating}
                      released={gamePackage.released}
                      image={gamePackage.background_image}
                      hideGame={this.hideGame}
                      filterByRating={this.state.filterByRating}
                      key={gamePackage.id}
                    />
                  </div>
                );
              })
            )}








        </div>

      </div>
    );

  }

}

export default GameList

