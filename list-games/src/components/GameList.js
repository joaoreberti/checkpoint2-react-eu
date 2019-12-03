import React, { useState, useEffect } from "react";
import Game from "./Game";
import FilterButton from "./FilterButton";

function GameList() {
  const [ gamesArr, setGamesArr ] = useState([]);
  const [ isFilterOn, setFilterToggle ] = useState(false);

  useEffect(() => {
    fetch("https://wild-games.herokuapp.com/api/v1")
      .then(rawRes => rawRes.json())
      .then(res => setGamesArr(res));
  }, [])

  console.log(gamesArr);
  return (
    <>
      {gamesArr && <FilterButton setFilterToggle={setFilterToggle} isFilterOn={isFilterOn}/>}
      <div className="games-list">
        {
          isFilterOn ?
            gamesArr
              .filter(game => Number(game.rating) > 4.5)
              .map(game => <Game key={game.id} game={game} setGamesArr={setGamesArr} gamesArr={gamesArr} /> )
            :
            gamesArr.map(game => <Game key={game.id} game={game} setGamesArr={setGamesArr} gamesArr={gamesArr} />)
        }
      </div>
    </>
  );
}

export default GameList;
