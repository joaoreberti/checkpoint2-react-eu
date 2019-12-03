import React, { useState,  useEffect  } from 'react';
import Game from './Game';
import { Grid, Row, Col } from 'react-flexbox-grid';


function GameList() {
    const [gameList, setGameList] = useState([]);
  

    useEffect(() => {
        fetch('https://wild-games.herokuapp.com/api/v1')
        .then(results => {
          return results.json();
        })
        .then(data => {
          //console.log(`this is the fetched data ${data[0].name}`);
          
          let games = data;
          setGameList(games);
          //console.log(games);
        })
    }, []);
 
    const RemoveFromState = (e) => {
        //console.log(`function RemoveFromState was called and this is the value passed as props ${e.target.value}`);
        let listWithoutRemoved = [...gameList];
        let removedGameList = listWithoutRemoved.splice(e.target.value, 1);
        //console.log(`removed ${removedGameList}`)
        setGameList(listWithoutRemoved);
    }  

    //console.log(gameList);

    return (
        <div className="board">
            <h1>Games List</h1>
            <Grid>
                <Row className="box">
                    <Col xs >
                        <b>Name</b>
                    </Col>
                    <Col xs >
                        <b>Rating</b>
                    </Col>
                    <Col xs >
                        <b>Genres</b>
                    </Col>
                    <Col xs >
                        <b>Image</b>
                    </Col>
                    <Col xs >
                        <b>Remove from List</b>
                    </Col>
                </Row>
                {gameList.map((game, pos) =>  <Game key={game.id} pos={pos} gameName={game.name} gameRating={game.rating} gameGenres={game.genres} gameImage={game.background_image} gameId={game.id} RemoveFromState={RemoveFromState}/>  )}
            </Grid>
        </div>
        
    );
}

export default GameList;


/*<Game key={game.id}  game={ game } RemoveFromState={RemoveFromState}/>  */