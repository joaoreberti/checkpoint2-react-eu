import React, { Component } from 'react';
import Game from './game.js';


class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamesCollection: [],
            storeFiltered: [],
            isPressed: false,
            isFiltered: false, 
        };
    }
    getGames = () => {
        fetch('https://wild-games.herokuapp.com/api/v1')
          .then(results  =>  results.json())
          .then(data  => {  
            this.setState ({ 
              gamesCollection :  data, 
          })
        })
    }
        
    componentDidMount(){
        this.getGames();
    }
    
    onRemove = (e) => {
        let filtered = this.state.gamesCollection.filter(game => {
        return `${game.id}` !== e.target.value})
        this.setState({
            gamesCollection: filtered,
            storeFiltered: filtered, 
            isFiltered: true, 
           })
    }
    
    handleRated = () => {
        if (this.state.isPressed === false ){
        let highfiltered = this.state.gamesCollection.filter(game => {
            return game.rating > 4.5})
            this.setState({
                gamesCollection: highfiltered,
                isPressed: true, 
            })
        }
        else if (this.state.isFiltered === true) { 
            this.setState({
                isPressed: false,
                gamesCollection: this.state.storeFiltered,
            })
        }
        else {
            this.getGames()
            this.setState({
                isPressed: false, 
            })
        }
    }

    render () {
        return(
            <div> 
                <button onClick={this.getGames}>Reset Games</button>
                <button onClick={this.handleRated}>{this.state.isPressed ?  "All Games" : "Highest Rated"}</button>
                <div className='row'>
                    {this.state.gamesCollection.map(game => (
                    <Game 
                        key={game.id} 
                        game={game}
                        onRemove={this.onRemove}
                    /> ))} 
                </div> 
             </div> 
        )
    }
}

export default GameList; 