import React from 'react';
import './App.css';
import { Route, Switch, NavLink, withRouter} from 'react-router-dom';
import Home from './Home'
import Screenshots from './Screenshots'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      gamesData: [],
      areBestRating: false
    }
  }

  fetchGames = () => {
    fetch("https://wild-games.herokuapp.com/api/v1")
    .then(response => response.json())
    .then(games => {
      this.setState({gamesData: games})
    })
    .catch(err => {
      console.error(err.message)
    })
  }
  
  componentDidMount() {
    this.fetchGames();
  }

  handleDelete = selectedGame => {
    const filteredGames = this.state.gamesData.filter(game => game.id !== selectedGame.id)
    this.setState({ gamesData: filteredGames })
  }

  handleFilterBestGames = () => {
    if(!this.state.areBestRating){
      const filteredGames = this.state.gamesData.filter(game => game.rating >= 4.5)
      this.setState({ gamesData: filteredGames, areBestRating: true })
    } else {
      this.fetchGames()
    }
  }

  render() {
    return (
      <div className="first-container">
        <NavLink exact to="/">Home</NavLink>
        <Switch>  
          <Route exact path="/">
            <Home 
              gamesData={this.state.gamesData} 
              onDelete={this.handleDelete} 
              areBestRating={this.state.areBestRating}
              onFilterBestGames={this.handleFilterBestGames}
            />
          </Route>
          <Route exact path="/jeu/screenshots/:id" render={(routerProps) => <Screenshots routerProps={routerProps} gamesData={this.state.gamesData} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
