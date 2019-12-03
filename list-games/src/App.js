import React from "react";
import "./App.css";
import { GameList } from "./GameList";
import Game from "./Game.js";
import Screenshots from "./Screenshots.js";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: [],
      filteredData: [],
      test: "default",
      deletedGames: ["test", "test"],
      bestGamesOnly: true
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleBestOnly = this.handleBestOnly.bind(this);
  }

  FnGetDataAPI = async () => {
    let GetData = await GameList();
    let APIData = GetData;
    this.setState({ fullData: APIData, filteredData: APIData });
    console.log(this.state.fullData);
  };

  componentDidMount() {
    this.FnGetDataAPI();
  }

  handleDelete(id) {
    let deletedGames = this.state.deletedGames;

    deletedGames.push(id);
    this.setState({ deletedGames: deletedGames });

    const filteredArr = this.state.filteredData.filter(function(item) {
      return !deletedGames.includes(item.slug);
    });

    this.setState({ filteredData: filteredArr, deletedGames: deletedGames });
  }

  handleBestOnly() {
    if (this.state.bestGamesOnly === false) {
      const filteredArr = this.state.filteredData.filter(function(item) {
        return item.rating >= 4.5;
      });

      this.setState({ filteredData: filteredArr, bestGamesOnly: true });
    } else {
      this.setState({
        filteredData: this.state.fullData,
        bestGamesOnly: false
      });
    }
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <div className="App">
                <div className="logo">
                  <h1>Games</h1>
                </div>
                <hr />
                <div>
                  <h2>All Games</h2>

                  <div
                    class="ui animated fade button best_games"
                    tabindex="0"
                    onClick={this.handleBestOnly}
                  >
                    <div class="visible content">Toggle best games only</div>
                    <div class="hidden content">4.5⭐ or above</div>
                  </div>
                </div>
                <br /> <br /> <br /> <br />
                <div class="ui four column relaxed grid">
                  {this.state.filteredData.map(id => {
                    return (
                      <div class="four wide column">
                        <Game
                          name={id.name}
                          image={id.background_image}
                          rating={id.rating}
                          id={id.id}
                          handleDelete={this.handleDelete}
                          slug={id.slug}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              />
            </>
          )}
        />
        {this.state.filteredData.map(id => {
          return (
            <Route
              exact
              path={"/screenshots/" + id.id}
              render={() => (
                <>
                  <div className="App">
                    <Link to="/">
                      <button class="ui button back_button">Back</button>
                    </Link>
                    <br />
                    <Screenshots
                      screenshots={id.short_screenshots}
                      name={id.name}
                    />
                  </div>
                </>
              )}
            />
          );
        })}
      </Switch>
    );
  }
}

export default withRouter(App);
