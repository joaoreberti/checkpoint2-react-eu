import React, { Component } from 'react';
import Game from './game.js';


class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamesCollection: [],
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
            gamesCollection: filtered
           })
    }
    

    render () {
        
        return(
            <div> 
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