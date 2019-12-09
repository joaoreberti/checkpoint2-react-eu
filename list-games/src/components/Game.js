import React, { Component } from 'react';
import game from './game.css';

const Game = ({id, name, background_image, deleteGame}) => (
    <div className='headerGame'>
        <div className="game">
            <li>{id}</li>
            <li>{name}</li>
            <li><img src={background_image}></img></li>        
        </div>
        <button onClick={() => deleteGame()}>Delete</button>
    </div>
)
export default Game;