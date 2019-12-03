import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Game = ({pos, gameName, gameRating, gameGenres, gameImage, gameId, RemoveFromState}) => {

    let OnClickHandler = (e) => {
        RemoveFromState(e);
    }  
    let gamegenres = gameGenres.map((genre) => genre.name).toString();
    
    //console.log(gamegenres);

    return(
        <Row className="movieslist">
            <Col xs className='coluna'>{gameName}</Col>
            <Col xs className='coluna'>{gameRating}</Col>
            <Col xs className='coluna'>{gamegenres}</Col> 
            <Col xs className='coluna'><img src={gameImage} className="image" /></Col>
            <Col xs className='coluna'><button value={pos} onClick={(e) => OnClickHandler(e)}>Remove</button></Col>
        </Row> 
    )
    
}
export default Game;
/* { game } */