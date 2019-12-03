import React from "react";
import Game from './Game';

const GameList = ({ games }) => {
    return (
        <div className="MappingGames">
            {
                games.map(game => (
                    <Game game={game} key={game.id}/>
                ))
            }
        </div>
    )
};

export default GameList;