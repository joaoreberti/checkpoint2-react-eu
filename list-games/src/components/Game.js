import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

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
                <td><NavLink to={`/jeu/screenshots/${this.props.index}`}>Show Screenshots</NavLink></td>
            </tr>
        )
    }
}

export default Game;