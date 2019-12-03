import React, { Component } from 'react';
import './App.css';
import GameList from "./GameList";
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  constructor (props){
    super(props);
    
    this.state = {
    }
  }
  
  render() {

    
    return (

      <BrowserRouter>

        <GameList/>

      </BrowserRouter>
    );

  }
}

export default App;
