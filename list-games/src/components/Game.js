import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: this.props.game,
            isActive: true
        }
    }

    onClick = () => {
        this.setState({isActive : false})
    }

    render() {
        return (
            this.state.isActive && 
            <tr>
                <td>{this.state.game.name}</td>
                <td>{this.state.game.released}</td>
                <td>{this.state.game.rating}</td>
                <td>
                    <img onClick={this.onClick} className="delete-img" src='/delete.png' alt="delete"/>
                </td>
            </tr>
        )
    }
}

export default Game;