import React, {Component} from "react"
import "./Game.css"
import {Link} from "react-router-dom";


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
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
      
        //this.setState({video:true})
        
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
                <img alt="" src ={`${this.state.gameData.background_image}`} />
                <video onClick={this.handleClick}src={`${this.state.gameData.clip.clip}`} controls ></video>
        <p><img id="star"src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/1024px-Full_Star_Yellow.svg.png" /> {this.state.gameData.rating}</p>
        <p>Released : {this.state.gameData.released}</p>
        <button><Link to={{pathname: `/screenshots/${this.state.gameData.id}`, state:{ imgs: this.state.gameData.short_screenshots }}}>ScreenShots</Link></button>
        <button onClick={() => this.props.toRemove(this.props.number)}>Remove</button>
        </div>
        )
    }
}

export default Game 