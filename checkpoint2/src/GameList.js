import React, { Component } from 'react';
import axios from 'axios';

import Game from './Game';

import './Game.css';



class GameList extends Component {
    constructor(props){
        super(props);

        this.state = {
            games: []
        }
    }

    fetchGames = () => {
        axios
        .get('https://wild-games.herokuapp.com/api/v1')
        .then(res => {
            console.log(res.data);
            this.setState({
                games: res.data
            })
        })
    }

    componentDidMount = () => {
        this.fetchGames();
    }

    handleDeleteClick = (id) => {
        let gamesWithoutDeletedGame = this.state.games.filter(game => game.id !== id ? true : false);

        this.setState({
            games: gamesWithoutDeletedGame
        })
    }

    handleSortGameClick = () => {
        let bestGames = this.state.games.filter(game => game.rating >= 4.5 ? true : false);

        this.setState({
            games: bestGames
        })
    }   

    render(){
      return(
            <div>
                <h1>LIST OF GAMES</h1>
                <button onClick={this.handleSortGameClick} >Best Games</button>
                <button onClick={this.fetchGames} >All Games</button>
                <hr/>

                <div className="GameList">
                    {this.state.games.map(game => {
                        return(
                            <>
                                <Game {...game} 
                                      handleDelete={this.handleDeleteClick} 
                                      />
                                
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }
}



export default GameList;