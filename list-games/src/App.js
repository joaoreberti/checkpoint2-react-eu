import React from "react";
import "./App.css";
import { GameList } from "./GameList";
import Game from "./Game.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: [],
      filteredData: [],
      test: "default",
      deletedGames: ["test", "test"]
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  FnGetDataAPI = async () => {
    let GetData = await GameList();
    let APIData = GetData;
    this.setState({ fullData: APIData, filteredData: APIData });
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

  // handleSearch(e) {
  //   this.setState({ searchKeyword: e.target.value });

  //   var filteredArr = this.state.fullData.filter(el =>
  //     el.title.includes(this.state.searchKeyword)
  //   );

  //   this.setState({ filteredMovieList: filteredArr });
  // }

  // handleCategorySwitch(e) {
  //   if (e.target.value === "All") {
  //     this.setState({ filteredMovieList: this.state.fullData });
  //   } else {
  //     this.setState({ categorySelect: e.target.value });

  //     var filteredArr = this.state.fullData.filter(el =>
  //       el.genres.includes(e.target.value)
  //     );

  //     this.setState({ filteredMovieList: filteredArr });
  //   }
  // }

  // handleFavourite(id) {
  //   var idArray = this.state.favouriteIDs;

  //   if (idArray.includes(id)) {
  //     var idArray = idArray.filter(e => e !== id);
  //   } else {
  //     idArray.push(id);
  //   }

  //   this.setState({ favouriteIDs: idArray });

  //   var filteredArr = this.state.fullData.filter(el => idArray.includes(el.id));

  //   this.setState({ filteredMovieListByID: filteredArr });

  //   console.log(this.state.favouriteIDs);
  // }

  render() {
    return (
      <div className="App">
        <div className="logo">
          <h1>Games</h1>
        </div>
        <hr />

        <h2>All Games</h2>
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
    );
  }
}

export default App;
