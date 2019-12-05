import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: 'visible',
            display: 'block'
        }
    }

    hideGame =() => {
        this.setState({
            visibility: 'hidden',
            display: 'none'
        })
    }

    render(){
        return(


            <div style={{display:this.state.display}}>
                <hr></hr>

                    <button onClick={this.hideGame}>Remove game</button>
                    <button>
                        <Link to={`/${this.props.name}/screenshots/${this.props.id}`}>See screenshots</Link>
                    </button>

                    <h2>{this.props.name}</h2>
                    <h4>{this.props.year}</h4>
                    <img src={this.props.poster} alt={this.props.name} />
                    
                <hr></hr>
            </div>
        )
    }
}

export default Game