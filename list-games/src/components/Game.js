import React, {Component} from "react"
import "./Game.css"

class Game extends Component{
    constructor(props){
        super(props)
        this.state = {

            gameData:{
                background_image: this.props.gameData.background_image,
                dominant_color: this.props.gameData.dominant_color,
                id: this.props.gameData.id,
                name: this.props.gameData.name,
                rating: this.props.gameData.rating,
                released: this.props.gameData.released,
                saturated_color: this.props.gameData.saturated_color,
                slug:this.props.gameData.slug,
                clip: this.props.gameData.clip,
                short_screenshots: this.props.gameData.short_screenshots
            }
            

        }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState(this.props)
        }
    }
    render(){
        return(
            <div className="cell">
                <h2>{this.state.gameData.name}</h2>
                <img src ={`${this.state.gameData.background_image}`} />
                <video src={`${this.state.gameData.clip.clip}`} controls ></video>
        <p>Rating: {this.state.gameData.rating}</p>
        <p>Released : {this.state.gameData.released}</p>
        <button onClick={() => this.props.toRemove(this.props.number)}>Remove</button>

            </div>
        )
    }
}

export default Game 