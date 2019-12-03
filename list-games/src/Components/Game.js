import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ gameData, onRemoveFromList }) => {
    return (
        <div className="eachGame">
            <div>Title:{gameData.name}</div>
            <div>Rating:{gameData.rating}</div>
            <div className="gameImage" style={{ backgroundImage: `url(${gameData.background_image})` }}></div>
            <Link to={`/jeu/screenshots/${gameData.id}`}>Check Some Screenshots</Link>
            <button onClick={() => onRemoveFromList(gameData)}>Remove From List</button>
        </div>

    )
}


export default Game;