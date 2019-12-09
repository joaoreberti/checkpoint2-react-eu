import React, { Component } from 'react';
import Game from './Game'

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: [],
            buttonText: false
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

    handleClickFilter = (event) => {
        console.log(event)
        if (!this.state.buttonShouldDisplayAll) {
            const list = [...this.state.gameList];
            const filteredList = list.filter(element => element.rating >= 4.5)
            this.setState({
                gameList: filteredList,
                buttonShouldDisplayAll: true
            })  
        } else { 
            this.getGames()
            this.setState({buttonShouldDisplayAll: false})
        }
    }


    render() {
        const { ButtonText } = this.state.buttonText
        return (
            <>
            <button onClick={e => this.handleClickFilter(e)}>Filter on rating > 4.5</button>
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
                            <Game key={index} game={gameInList} index={index} removeGame={this.handleClick}/>
                        ))}
                    </tbody>
            </table>
            </>
        )

    }
}

export default GameList;