import React from 'react';

class Game extends React.Component {
    render() {
        const {name,background_image,rating,method} = this.props;

        return(
            <React.Fragment>
                <div className="gameCard">
                    <p className="gameTitle">{name}</p>
                    <img src={background_image} alt='Poster Game' className="gameImage"/>
                    <div className="gameCardFooter">
                        <p className="gameRating">Rating: {rating}</p>
                        <button 
                            className="eraseGameButton"
                            onClick={method}>
                            Erase Game
                        </button> 
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default Game;