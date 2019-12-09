import React, { Component } from 'react';
import Game from './Game'

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: [],
            buttonText: "Best Games"
        }
    }

    componentDidMount = () => {
        this.getGames();
    }

    getGames = () => {
        fetch('https://wild-games.herokuapp.com/api/v1', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data =>  this.setState({ gameList: data}))
    }

    handleClick = (gameName) => {
        const list = [...this.state.gameList];
        let index = list.findIndex(element => element.name === gameName)
        if (index !== -1) {
            list.splice(index, 1)
            this.setState({gameList: list})
        }
    }

    handleClickFilter = () => {
        if (this.state.buttonText === "Best Games") {
            const list = [...this.state.gameList];
            const filteredList = list.filter(element => element.rating >= 4.5)
            this.setState({
                gameList: filteredList,
                buttonText: "All Games"
            })  
        } else { 
            this.getGames()
            this.setState({buttonText: "Best Games"})
        }
    }


    render() {
        return (
            <>
            <button onClick={this.handleClickFilter}>{this.state.buttonText}</button>
            <table className="table-game">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Release date</th>
                        <th>Rating</th>
                        <th>Action</th>
                        <th>Screenshots</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.state.gameList.map((gameInList, index) => (
                            <Game key={index} game={gameInList} index={index} removeGame={this.handleClick}/>
                        ))}
                    </tbody>
            </table>
            </>
        )

    }
}

export default GameList;