import React from "react";

const Game = ({ game }) => {
    return (
        <div className="our-game">
            <div className="game-pic">
                <img src={game.background_image} alt=""></img>
            </div>
                <div className="game-text">
                    <div className="game-title">
                        <p>{game.name}</p>
                    </div>
                    <div className="game-rating">
                        <p>Rated as {game.rating} stars!</p>
                    </div>
                    <div className="game-release">
                        <p>Released in {game.released}</p>
                    </div>
                </div>
        </div>
    )
};

export default Game;