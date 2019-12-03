import React from 'react';
import Game from './Game';

const GameList = ({ gamesData, onRemoveFromList }) => {
    return (
        <div className="gamesList">
            {
                gamesData.map(gameData => (
                    <Game
                        key={gameData.id}
                        gameData={gameData}
                        onRemoveFromList = {onRemoveFromList}
                    />
                ))
            }
        </div>
    )
}



export default GameList;