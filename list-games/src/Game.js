import React from 'react';
import './Game.css';

function Game({ game, remove_game }) {
  return (
    <>
        <div className="game-card">
            <img src={game.background_image} alt="Poster"/>
            <h4>{game.name}</h4>
            <h4>{game.released}</h4>
            <h4>Rating: {game.rating}</h4>
            <button onClick={() => remove_game(game)}>
                Remove
            </button>
        </div>
    </>
  );
}

export default Game;
