import React from 'react';
import './Game.css';
import { Switch, Route, Link } from "react-router-dom"; 
import Screenshot from './Screenshots';


function Game({ game, remove_game }) {
  return (
    <>
    <Switch>
        <div className="game-card">
            <img src={game.background_image} alt="Poster"/>
            <h4>{game.name}</h4>
            <h4>{game.released}</h4>
            <h4>Rating: {game.rating}</h4>

            <button onClick={() => remove_game(game)}>
                Remove
            </button>

            <Link to="/screenshots">
                <button>
                        See screenshots
                </button>
            </Link>
        </div>
        <Route 
            exact path="/screenshots"
            render={() => {
                game.short_screenshots.map((screenshot)=>{
                    console.log(screenshot)
                    return(
                    <Screenshot
                        image={screenshot.image}
                    />
                    ) 
                })

            }
            }
        >
        </Route>
    </Switch>
    </>
  );
}

export default Game;
