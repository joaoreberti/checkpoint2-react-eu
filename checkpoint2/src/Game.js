import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Game.css';


class Game extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        const {name, background_image, rating, id, short_screenshots, handleDelete} = this.props;
        console.log('short_screenshots', short_screenshots)
        return(
            <div className="GameCase"
                 style={{
                    backgroundImage: `url(${background_image})`
                 }}>
                <h1>{name}</h1>
                <div>{rating}</div>
                <button onClick={() => handleDelete(id)} >DELETE</button>
                
                <div className="list-of-screen" >
                    {short_screenshots.map(screen => {
                        return(
                            <div className="screen" 
                                 style={{
                                     backgroundImage: `url(${screen.image})`
                                 }}>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}



export default Game;