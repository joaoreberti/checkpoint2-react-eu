import React from 'react';
import Game from './Game'

const GamesList = ({ gamesData, onDelete }) => {
    
    return(
        <div className="games-container">
            {
                gamesData.map(game => {
                    return <Game key={game.id} game={game} onDelete={onDelete}/>
                })
            }
        </div>
    )
}

export default GamesList;