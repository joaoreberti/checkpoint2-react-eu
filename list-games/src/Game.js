import React from "react";
import './Game.css';


const Game = ({ gamePackage, name, rating, released, image, hideGame, filterByRating }) => {

  return (
    <div className="ui card liked" >
      <div className="image">
        <img src={image} alt=""></img>
      </div>
      <div className="content">
        <a className="header">{name}</a>
        <br />
        <div className="meta description">
          <span className="year">Rating: {rating}</span>
        </div>
        <div className="description writing">Released: {released}</div>
        <div>
          <button className="negative ui button" onClick={() => hideGame(gamePackage)}>Hide</button>
        </div>
      </div>
    </div>
  );
}

export default Game;