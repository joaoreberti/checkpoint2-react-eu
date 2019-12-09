import React, { Component } from 'react';

class Game extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.game.name}</td>
            </tr>
        )
    }
}

export default Game;