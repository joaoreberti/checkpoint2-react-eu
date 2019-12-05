import React from 'react'
import Game from './Game'

import '../App.css'

const axios = require('axios');

class GameList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games: [],
            showByRating : false
        }
    }

    componentDidMount(){
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then(response => {
                this.setState({
                    games: response.data
                })
            })
    }

    showByRating = () => {
        this.setState({
            showByRating: !this.state.showByRating
        })
    }

    // sendScreenshots(){
    //     this.props.screenshotReq(this.state.games)
    // }

    render(){
        return(
            <div>
                <button onClick={this.showByRating}>{!this.state.showByRating ? 'Best Games off' : 'Best Games on'}</button>
                {this.state.games.filter(game => !this.state.showByRating || game.rating >= 4.5).map((game, index) => (
                    <li key={index}>
                            <Game name={game.name} poster={game.background_image} year={game.released} id={game.id} index={game.index}/>
                    </li>
                ))}
            </div>
        )
    }
}

export default GameList;
