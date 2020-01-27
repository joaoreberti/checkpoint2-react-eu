import React from "react";
import "./App.css";
import GameList from "./GameList";
import ScreenShots from "./ScreenShots";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/games">
            {" "}
            <GameList />
          </Route>
          <Route path="/jeu/screenshots/:id"></Route>

          <Redirect to="/games" />
        </Switch>
      </Router>
    );
  }
}

export default App;
