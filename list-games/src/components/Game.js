import React, { Component } from 'react';

class Game extends Component {

    /*onClick = () => {
        this.setState({isActive : false})
    }*/

    render() {
        return (
            <tr>
                <td>{this.props.game.name}</td>
                <td>{this.props.game.released}</td>
                <td>{this.props.game.rating}</td>
                <td>
                    <img onClick={() => this.props.removeGame(this.props.game.name)} className="delete-img" src='/delete.png' alt="delete"/>
                </td>
            </tr>
        )
    }
}

export default Game;