import React, { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            picture: props.picture,
            rating: props.rating
        }
    }

render() {
    console.log(this.state.name)
    return (
    <div>
        {this.state.name} - {this.state.rating}/5 ⭐
        <img src={this.state.picture} />
    </div>
    )}
}

export default Game