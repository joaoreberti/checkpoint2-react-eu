import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game, name, img, rating, released, handleClick, screenshots }) => {

    // console.log(screenshots)

    return (
        <div className="eachGame">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>
                <span>Release date:</span> {released}
            </p> 
            <p>
                <span>Rating:</span> {rating}
            </p>
            <button onClick={()=> handleClick(game)}>Remove from list</button>
            <br/>
            <Link 
            to={{
                pathname: `/jeu/screenshots/${game.id}`,
                state : { screenshots }
                }}>
                Screenshots
            </Link>
            {/* <img src={screenshots[0].image} alt=""/>
            <img src={screenshots[1].image} alt=""/>
            <img src={screenshots[2].image} alt=""/>
            <img src={screenshots[3].image} alt=""/>
            <img src={screenshots[4].image} alt=""/>
            <img src={screenshots[5].image} alt=""/>
            <img src={screenshots[6].image} alt=""/> */}
            
        </div>
    )
}

export default Game;