import React from 'react';
import axios from 'axios';
import Game from './Game.component';
import { Button } from 'react-bootstrap';


class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            filter: false
        }
    }

    retrieveGameList = () => {
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then(response => {
                this.setState({
                    games: response.data
                })
            })
    }

    handleRating = () => {
        this.setState({
            filter: !this.state.filter
        })
    }

    componentWillMount() {
        this.retrieveGameList();

    }

    render() {
        return (

            <div className="game-container">
                <Button variant="outline-dark myButton" onClick={this.handleRating}>Fliter by rating: {this.state.filter ? "All games" : "Best games"}</Button>
                 {this.state.filter ? this.state.games.filter( game => 
                 game.rating > 4.5)
                 .map(game => (
                    <Game image={game.background_image} title={game.name} releasedDate={game.released}
                        rating={game.rating}
                    />
                )) : this.state.games.map(game => (
                    <Game image={game.background_image} title={game.name} releasedDate={game.released}
                        rating={game.rating}
                    />
                )) }

            </div>
        )
    }
}



export default GameList;