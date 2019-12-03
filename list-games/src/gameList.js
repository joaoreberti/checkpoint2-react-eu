import React, { Component } from 'react';
import Game from './game.js';


class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamesCollection: [],
            isPressed: false, 
        };
    }
    getGames = () => {
        fetch('https://wild-games.herokuapp.com/api/v1')
          .then(results  =>  results.json())
          .then(data  => {  
            this.setState ({ 
              gamesCollection :  data,
              isPressed: false, 
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
        else {this.getGames();}
    }

    render () {
        return(
            <div>  
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