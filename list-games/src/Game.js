import React from 'react';
import './Game.css';
import RemoveButton from './RemoveButton.js'



const Game = ({ gameslist, handleClick }) => {


    return (
        <div className='game'>
            <div className='info'>
                <p>Game:{gameslist.name} </p>
                <p>Rating:{gameslist.rating}</p>
            </div>
            <img src={gameslist.background_image} alt=''></img>
            <RemoveButton game={gameslist} gameslist={gameslist} handleClick={handleClick}></RemoveButton>

        </div>
    );
}


export default Game;
