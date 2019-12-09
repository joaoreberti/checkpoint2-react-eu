import React, {Component} from 'react';
import axios from "axios";
import Game from './Game';

class GameList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games : []
        }
    }

    fetchGames = () => {
        axios
            .get('https://wild-games.herokuapp.com/api/v1')
            .then(res => {
                this.setState({
                    games: res.data
                })
            })
    }

    componentDidMount() {
        this.fetchGames();
    }


    render () {
        const {games} = this.state;
        return (
            <div className="gameList">
            <ul>
                {games.map((game, index) => (
                    <Game {...game} key={index} />
                ))
                }
            </ul>
            </div>
        )
    }

}


export default GameList;