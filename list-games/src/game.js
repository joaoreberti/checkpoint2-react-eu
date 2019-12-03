import React from 'react';
import './game.css';
 import { Link } from "react-router-dom";


const Game = ({game, onRemove,}) => {
    const {name, background_image, rating, released, id, short_screenshots}=game;
    const handleClick = (e) => {onRemove(e)}

    return (
    <div className='card'>
        <img className="card-img-top" src= {background_image} alt={name}></img>
        <div className='card-body'> 
            <h5 className='card-title'>{name}</h5> 
            <p className='card-text'>Rating: {rating}</p>
            <p className='card-text'>Release Date: {released}</p>
            <button value={id} onClick={(e) => handleClick(e)}>Remove</button>
            <Link to={`/jeu/screenshots/${id}`}> 
                <button> See Screenshots </button>
            </Link> 


        </div> 
    </div>
    )
}

export default Game; 