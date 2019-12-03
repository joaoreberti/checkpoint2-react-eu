import React from "react";

function Game({ game, setGamesArr, gamesArr }) {
  const { background_image, name, rating, released } = game;
  
  return (
    <div className="game">
      <img className="image" src={background_image}/>
      <button className="remove" onClick={() => setGamesArr(gamesArr.filter(each => each !== game))}>Remove</button>
      <p className="game-title">{name}</p>
      <p>Rating: {rating}</p> 
      <p>Released: {released}</p>     
    </div>
  );
}

export default Game;

// 0:
// background_image: "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"
// clip: {clip: "https://media.rawg.io/media/stories-640/5b0/5b0cfff8c606c5e4db4f74f108c4413b.mp4", clips: {…}, preview: "https://media.rawg.io/media/stories-previews/f65/f6593df6c8df32c7f4763f9cb112a514.jpg"}
// dominant_color: "0f0f0f"
// genres: (2) [{…}, {…}]
// id: 3498
// name: "Grand Theft Auto V"
// rating: 4.47
// released: "2013-09-17"
// saturated_color: "0f0f0f"
// short_screenshots: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// slug: "grand-theft-auto-v"