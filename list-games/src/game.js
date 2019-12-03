import React from 'react';
import './game.css';


const Game = ({game, onRemove, value}) => {
    const {name, background_image, rating, released, id}=game;
    const handleClick = (e) => {onRemove(e)}
    
    return (
    <div className='card'>
        <img className="card-img-top" src= {background_image} alt={name}></img>
        <div className='card-body'> 
            <h5 className='card-title'>{name}</h5> 
            <p className='card-text'>Rating: {rating}</p>
            <p className='card-text'>Release Date: {released}</p>
            <button value={id} onClick={(e) => handleClick(e)}>Remove</button>
        </div> 
   
    </div>
    )
}

export default Game; 