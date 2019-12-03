import React from 'react';

const Game = ({ game, games, onRemoveFromState }) => {

    const changeButton = games.includes(game) ? "Remove from games" : "Add to games"

    return (
        <div className="DisplayGame">
            <ul className="DisplayInfos" key={game.id}>
                <li> Name: {game.name}</li>
                <li> Released: {game.released}</li>
                <li> Rating: {game.rating}</li>
            </ul>
            <div className="DisplayImage">
                <img className="Image" src={game.background_image} alt='' />
            </div>
            <button className="Button" onClick={() => onRemoveFromState(game)}>{changeButton}</button>
        </div>
    );
};

export default Game;