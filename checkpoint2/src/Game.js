import React from 'react';
import { Route, Switch, NavLink, withRouter} from 'react-router-dom';
import RemoveFromState from './RemoveFromState'

const Game = ({ game, onDelete }) => {
    return(
        
        <div className="card-game-container">
            <p className="game-name">{game.name}</p>
            <div className="image" style={{ backgroundImage: `url(${game.background_image})` }}></div>
            <div className="rating-container">
                <span>Rating: {game.rating}*</span>
                <span>Released: {game.released}</span>
                <RemoveFromState game={game} onDelete={onDelete}/>
                <NavLink to={`/jeu/screenshots/${game.id}`}>Screenshots</NavLink>
            </div>
        </div>
    )
}

export default Game;