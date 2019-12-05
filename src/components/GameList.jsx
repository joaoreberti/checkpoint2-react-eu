import React from "react";
import axios from "axios";

import Game from "./Game";

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            background_image: "",
            rating: "",
            games: [],
            buttonText: 'Filter Games',
            arrayFiltered: [],
            filterGameStatus: false
        };
    }

    componentDidMount() {
        axios.get("https://wild-games.herokuapp.com/api/v1").then(response => {
            const games = response.data;
           console.log(games[0].background_image)
            this.setState({
                games: games
            });
        });
    }

    handleDeleteGame = () => {
        let newGameList = this.state.games;
        newGameList.shift();

        this.setState({
            games: newGameList
        })
    }

    handleFilterGame = () => {
        // console.log('allGames' , allGames)
        if(this.state.buttonText === 'All Games') {
            const allGames = this.state.games.map(game => <Game name={game.name} img={game.background_image} rating={game.rating}/>)
            this.setState ({
                buttonText: 'Filter Games',
                arrayFiltered: allGames
            })
        }
        if(this.state.buttonText === 'Filter Games') {
            const filterGames = this.state.games.filter(game => game.rating>4.5);
            this.setState({
                buttonText: 'All Games',
                arrayFiltered: filterGames
            })}
    }

    render() {
        console.log('games', this.state.games)
        return (
            <React.Fragment>
                <button onClick={this.handleDeleteGame}>Erase Game</button>
                <button onClick={this.handleFilterGame}>{this.state.buttonText}</button>
                <ul>
                    {this.state.arrayFiltered.map((game) =>
                     <li key={game.id}><Game name={game.name} img={game.background_image} rating={game.rating}/></li>
                     )}
                </ul>
                <ul>
                    {this.state.games.map((game) =>
                     <li key={game.id}><Game name={game.name} img={game.background_image} rating={game.rating}/></li>
                     )}
                </ul>
            </React.Fragment>
        );
    }
}

export default GameList;
