import React, {Component} from 'react';

const Game = ({id, name, background_image}) => (
        <div className="game-container">
            <li><h2>{id}</h2></li>
            <li><h1>{name}</h1></li>
            <li><img src={background_image} /></li>
            <button className="button">Delete</button>
        </div>
)

export default Game;