import React from 'react';
import axios from 'axios';
import Game from './Game';

export default class GameList extends React.Component {
    state ={
        games : []
    }
    componentDidMount(){
        axios.get(`https://wild-games.herokuapp.com/api/v1`)
            .then(res => {
                const games = res.data;
                this.setState({
                    games
                });
            })
    }

    
    render(){
        return(
            <ul>
                {this.state.games.map((game, index ) => {
                    return <Game {...game} key={index} />
                })
                }
            </ul>
        )
    }
}

