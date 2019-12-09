import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 

    render() {
        return(
            <button onClick={this.closeTheGame}>Close</button>
        )
    }

}

export default Game;
