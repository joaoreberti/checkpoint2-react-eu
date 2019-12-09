import React from 'react';
import './GameList';
import './Game.css'


const Game = ({ name, image, rating }) => {

  return (
      
    <li>
        
        <div>
            <h5 >{name}</h5>
            <img src ={image}></img>
            <p> Rating : {rating}</p>
          </div>
    
    </li>
    
  )
};

export default Game;