import React, {Component} from "react"
import Game from "./Game"
class Gamelist extends Component{
    constructor(){
        super()
        this.state={
            games : []
        }
    }


    componentDidMount(){
        fetch("https://wild-games.herokuapp.com/api/v1")
        .then(result => result.json())
        .then(data => this.setState({games: data}))
    }
    render(){
        return(
            <div>
                <h1>Gamelist</h1>
                {this.state.games.map((game)=><Game gameData = {game}/>)}
            </div>

        )
    }
    
}

export default Gamelist