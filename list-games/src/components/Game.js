import React, {Component} from "react"
import "./Game.css"

class Game extends Component{
    constructor(props){
        super(props)
        this.state = {
            image: this.props.gameData.background_image,
            color: this.props.gameData.dominant_color,
            id: this.props.gameData.id,
            name: this.props.gameData.name,
            rating: this.props.gameData.rating,
            released: this.props.gameData.released,
            saturated_color: this.props.gameData.saturated_color,
            slug:this.props.gameData.slug,
            clip: this.props.gameData.clip.clip,
            screenshots: this.props.gameData.short_screenshots

        }
    }
    render(){
        return(
            <div className="cell">
                <h2>{this.state.name}</h2>
                <img src ={`${this.state.image}`} />
                <video src={`${this.state.clip}`} controls ></video>
        <p>Rating: {this.state.rating}</p>
        <p>Released : {this.state.released}</p>
        <button onClick={() => this.props.toRemove(this.state.id)}>Remove</button>

            </div>
        )
    }
}

export default Game 