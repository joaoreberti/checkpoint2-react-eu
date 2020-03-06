import React from "react";
import axios from "axios";
import Game from "./Game";

class GameList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            isFiltered: false,
        }
    }

    componentDidMount() {
        axios.get("https://wild-games.herokuapp.com/api/v1").then(response => {
            const games = response.data;
            this.setState({
                games: games,
            });
        });
    }

    handleDeleteGame = (id) => {
        let newGameList = this.state.games.filter(game => id !== game.id);
    
        this.setState({
            games: newGameList
        })
    }

    handleFilter = () => {
        const {isFiltered} = this.state;

        this.setState({
            isFiltered: !isFiltered
        });
    }

    render() {
        const { isFiltered, games } = this.state;
        const gamesList = isFiltered ? games.filter(game => game.rating >= 4.5) : games;

        return (
            <React.Fragment>
                <button
                    onClick={this.handleFilter}
                    >{isFiltered ? "All Games" : "Best Games"}</button>
                <ul className="gameList">
                    {gamesList.map((game) => 
                        <li key={game.id}>
                            <Game   
                                name={game.name} 
                                background_image={game.background_image} 
                                rating={game.rating}
                                method={() => this.handleDeleteGame(game.id)}
                            />
                        </li>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}

export default GameList;