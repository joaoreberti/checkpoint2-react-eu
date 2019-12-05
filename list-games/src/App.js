import React, { Component } from 'react';
import GameList from "./GameList";

import Container from 'react-bootstrap/Container'
import './App.css';

export default class App extends Component {




  render() {
    return (
      <Container className='app'>
        <GameList />
      </Container>
    );
  }
}


