import React from 'react';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'


import GameList from './components/Gamelist'
import Screenshot from './components/screenshot'

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     screenshot: []
    }
  }

  screenshotInfo(info){
    this.setState({
      screenshot: info
    })

    console.log(info)
    console.log(this.state.screenshot)
  }

  render(){
      return (
      <div className="App">
        <header className="App-header">

        <Switch>
          <Route exact path='/' render={(props) => <GameList/> }/>
          <Route path='/screenshot' render={(props) => <Screenshot screenshotRes={this.state.screenshot}/>}/>
        </Switch>

        </header>
      </div>
    );
  }
}

export default App;
