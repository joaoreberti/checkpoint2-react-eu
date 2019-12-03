import React from 'react';
import Game from './Game.js';

const GameList = ({ games, onRemoveFromState }) => {
    return (
        <div>
            <h1 className="List">Wild Games</h1>
            <div className="DisplayList">
                {games.map((game) => {
                    return (
                        <Game key={game.id}
                            game={game}
                            games={games}
                            onRemoveFromState={onRemoveFromState}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default GameList;

