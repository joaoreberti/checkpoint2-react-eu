import React, { Component } from 'react';
import Game from './Game'

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: []
        }
    }


    componentDidMount = () => {
        fetch('https://wild-games.herokuapp.com/api/v1', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => this.parseGameList(data))
    }

    parseGameList = (listOfGames) => {
        console.log(listOfGames);
        this.setState({ gameList: listOfGames})
    }


    render() {
        return (
            
            this.state.gameList.map(gameInList => (
                <Game game={gameInList} />
            ))
               
        )

    }
}

export default GameList;