import React from 'react';
import Game from './Game';

const GameList = ({ gamesData, onRemoveFromList, onPickByRating, showOnlyBestGames }) => {
    return (
        <div>
            <button className="byRatingButton" onClick={() => onPickByRating()}>
                {showOnlyBestGames ? "All Games" : "Best Games"}
            </button>
            <div className="gamesList">
                {
                    !showOnlyBestGames ?
                        gamesData.map(gameData => (
                            <Game
                                key={gameData.id}
                                gameData={gameData}
                                onRemoveFromList={onRemoveFromList}
                            />
                        )) :
                        gamesData.filter(game => game.rating >= 4.5).map(gameData => (
                            <Game
                                key={gameData.id}
                                gameData={gameData}
                                onRemoveFromList={onRemoveFromList}
                            />
                        ))

                }
            </div>
        </div>

    )
}



export default GameList;