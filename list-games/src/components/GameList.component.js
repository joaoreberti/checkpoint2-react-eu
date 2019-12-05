import React from 'react';
import axios from 'axios';
import Game from './Game.component'


class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    retrieveGameList = () => {
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then(response => {
                this.setState({
                    games: response.data,


                })
                console.log(this.state.games)
            })
    }

    componentWillMount() {
        this.retrieveGameList();

    }

    render() {
        return (
            <div className="game-container">
                {this.state.games.map(game => (
                    <Game image={game.background_image} title={game.name} releasedDate={game.released}
                        rating={game.rating}
                    />
                ))}

            </div>
        )
    }
}



export default GameList;