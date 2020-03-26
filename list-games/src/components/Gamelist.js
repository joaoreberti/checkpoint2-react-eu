import React, {Component} from "react"
import Game from "./Game"
import "./Gamelist.css"
class Gamelist extends Component{
    constructor(){
        super()
        this.state={
            games : []
        }
        this.handleRemove=this.handleRemove.bind(this)
    }

    handleRemove(id){
        console.log(id)

    }
    componentDidMount(){
        fetch("https://wild-games.herokuapp.com/api/v1")
        .then(result => result.json())
        .then(data => this.setState({games: data}))
    }
    render(){
        return(
        <div >
<h1>Gamelist</h1>
            <div className="list" >
                
                {this.state.games.map((game)=><Game toRemove={this.handleRemove} gameData = {game}/>)}
            </div>
            </div>

        )
    }
    
}

export default Gamelist