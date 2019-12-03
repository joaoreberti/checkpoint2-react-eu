import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import GameList from './GameList'
import './App.css';


class App extends React.Component {


  render() {
    return (
      <div>
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <BrowserRouter>

          <div>


            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>

              {/* <Route path="/short-Screenshots">
              Screenshots />
            </Route> */}

              <Route path="/">
                <GameList />
              </Route>

            </Switch>
          </div>

          {/* <nav>
            <ul>
              <li>
                <Link to="/">GameList</Link>
              </li>
              <li>
                <Link to="/Screenshots">short-Screenshots</Link>
              </li>
            </ul>
          </nav> */}

        </BrowserRouter >



      </div>
    );
  }
}



export default App;