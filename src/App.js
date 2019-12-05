import React from 'react';
import GameList from  '../src/components/GameList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <GameList/>
    )
  }
}

export default App;
