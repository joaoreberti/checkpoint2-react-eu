import React , {Component} from 'react';
import Game from './Game';

export default class GameList extends Component {
    render() {

        return(
            <>
                <h2>GameList creation</h2>
                <Game/>
                <br/>
                <p>GameList & game online ? Good start, so !</p>
            </>
        )
    }
}