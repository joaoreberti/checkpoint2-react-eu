import React from 'react';
import Gamelist from "./components/Gamelist"
import './App.css';
import { Switch, Route} from "react-router-dom"
import Screenshot from "./components/ScreenShots"

function App() {
  return (
      <Switch>
        <Route exact path="/" component = {Gamelist}/>
        <Route  path="/screenshots" component = {Screenshot} />
        </Switch>
  );
}

export default App;
