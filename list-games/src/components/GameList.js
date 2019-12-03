import React, { useState, useEffect } from "react";
import Game from "./Game";

function GameList() {
  const [ gamesArr, setGamesArr ] = useState([]);

  useEffect(() => {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then(rawRes => rawRes.json())
      .then(res => setGamesArr(res));
  }, [])

  console.log(gamesArr);

  return (
    <div className="games-list">
      {gamesArr.map(game => <Game game={game} setGamesArr={setGamesArr} gamesArr={gamesArr} />)}
    </div>
  );
}

export default GameList;
