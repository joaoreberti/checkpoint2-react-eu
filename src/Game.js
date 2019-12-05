import React from 'react'

class Game extends React.Component {
    render() {
        return (
            <div>
                <button className='btn' onClick={this.props.delete}>Remove</button>
                <img className='img' src={this.props.img}></img>
                <h1>Game: {this.props.title}</h1>
                <p>Rating: {this.props.rating}</p>
            </div>
        );
    }
}

export default Game;