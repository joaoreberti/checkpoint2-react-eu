import React from "react";
import { Link } from "react-router-dom";

function Game({ game, setGamesArr, gamesArr }) {
  const { background_image, name, rating, released } = game;
  
  return (
    <div className="game">
      <img className="image" src={background_image} alt=""/>
      <button className="button" onClick={() => setGamesArr(gamesArr.filter(each => each !== game))}>Remove</button>
      {/* instead of passing and using routerProps.match.params.id  */}
      <Link to={{pathname: `/game/screenshots/${game.id}`, game: gamesArr.filter(each => each === game)[0]}}>
        <p className="game-title">{name}</p>
      </Link>
      <p>Rating: {rating}</p> 
      <p>Released: {released}</p>     
    </div>
  );
}

export default Game;