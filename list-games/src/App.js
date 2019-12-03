import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      gamePackages: []

    }
  }

  // API FETCH
  componentDidMount() {
    this.setState({ isLoaded: false }, () => {
      fetch(`https://wild-games.herokuapp.com/api/v1`)
        .then(res => res.json())
        .then(results => {
          this.setState({
            gamePackages: results.results,
            // category: results.results[0].category,
            isLoaded: true
          });
        });
    });
  };




  render() {
    console.log(this.state.gamePackages)
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/Screenshots">Screenshots</Link>
              </li> */}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            {/* <Route path="/Screenshots">
              Screenshots />
            </Route> */}

            <Route exact path="/">
              <App />
            </Route>

          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}



export default App;