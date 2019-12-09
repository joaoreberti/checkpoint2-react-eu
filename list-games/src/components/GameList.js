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
            <table className="table-game">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Release date</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.state.gameList.map((gameInList, index) => (
                            <Game key={index} game={gameInList} />
                        ))}
                    </tbody>
            </table>
               
        )

    }
}

export default GameList;