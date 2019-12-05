import React from 'react';
import './App.css';
import  GenerateGame  from './Game';
import  DisplayName  from './GameList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // we can set up our sampleEmployee as the default
      // to always display an employee
      name:"",
      background_image:"",
      rating:""
    }
  }
  componentDidMount() {
    //this.getEmployee()
  }

  getGame() {
    // Employee collection via fetch
    fetch("https://wild-games.herokuapp.com/api/v1")
        .then(response  =>  response.json())
        .then(data  => {
          // Once the data is collected, we update our state with the new data
          this.setState({
            name: data[2],
            background_image: data[4],
            rating: data[5],
          });
        });
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <GenerateGame selectGame={() =>  this.getGame()}  />
            <DisplayName  quote={this.state.name}  />
          </header>
        </div>
    );
  }}

export default App;
