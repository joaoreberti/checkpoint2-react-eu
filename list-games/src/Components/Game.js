import React from 'react';


const Game = ({name, release, background_image, rating}) => (
    <div> 
        <li>{name}</li>
        <li>{release}</li>
        <li>{background_image}</li>
        <li>{rating}</li>
    </div>
)
export default Game;