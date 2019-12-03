import React from 'react';
import { Component } from 'react';
import Game from './Game.js';
import BestGames from './BestGames.js'


class GameList extends Component {

    state = {
        games: [],
        best: []

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
            const updatedGames = this.state.games.filter((element) => element !== game)
            return {
                games: updatedGames
            }
        })
    }

    bestGames = (game) => {
        this.setState((games) => {
        
             const BestGames = this.state.games.filter((game) => game.rating>=4.5)
                    return {
                        games: BestGames
                    }
            

        })

    }

    render() {

        return (
            <div>

                
                <BestGames bestClick={this.bestGames}></BestGames>
                {this.state.games.map((info) => <Game gameslist={info} handleClick={this.removeGame}></Game>)}

            </div>
        )
    }

}



export default GameList;
