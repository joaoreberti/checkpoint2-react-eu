import React from 'react';
import { Component } from 'react';
import Game from './Game.js';


class GameList extends Component {

    state = {
        games: [],

    }
    componentDidMount() {
        this.getGames();

    }


    getGames = () => {
        fetch(' https://wild-games.herokuapp.com/api/v1')
            .then(response => response.json())
            .then(
                (data) => {
                    this.setState({
                        games: data

                    });
                },

            )

    }

    removeGame = (game) => {
        this.setState((games) => {
            const updatedGames = this.state.games.filter((element) =>  element !== game )
          return {
              games:updatedGames
          } 
        })
    }

    render() {
       
        return (
            <div>
                {this.state.games.map((info) => <Game gameslist={info} handleClick={this.removeGame}></Game>)}
            
            </div>
        )
    }

}



export default GameList;
