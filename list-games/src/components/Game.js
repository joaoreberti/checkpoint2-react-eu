import React, {Component} from 'react';

const Game = ({id, name, slug, games_count, background_image, image_background}) => (
    <div>
        <li>{id}</li>
        <li>{name}</li>
        <li>{slug}</li>
        <li>{games_count}</li>
        <li>{background_image}</li>
        <li>{image_background}</li>
    </div>
)

export default Game;