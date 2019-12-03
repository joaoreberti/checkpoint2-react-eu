import React from "react";

const Game = ({ game }) => {
    return (
        <div className="our-game">
            <div className="game-pic">
                <img src={game.background_image} alt=""></img>
            </div>
            <div className="game-title">
                <h3>Title: {game.name}</h3>
            </div>
            <div className="game-rating">
                <h4>Rated as {game.rating} stars!</h4>
            </div>
            <div className="game-release">
                <h5>Released in {game.release}</h5>
            </div>
        </div>
    )
};

export default Game;