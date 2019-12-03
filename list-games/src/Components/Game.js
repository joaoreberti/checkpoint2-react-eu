import React from 'react';

const Game = ({ gameData, onRemoveFromList }) => {
    return (
        <div className="eachGame">
            <div>Title:{gameData.name}</div>
            <div>Rating:{gameData.rating}</div>
            <div className="gameImage" style={{ backgroundImage: `url(${gameData.background_image})` }}></div>
            <button onClick={()=> onRemoveFromList(gameData)}>Remove From List</button>
        </div>

    )
}


export default Game;