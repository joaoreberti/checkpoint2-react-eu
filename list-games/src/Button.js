import React from "react";

const Button = ({ game }) => {

    const handleClickGame = () => {
        onClickGame(game);
    }

    return (
        <li onClick={handleClickGame} className={game.isShowing ? 'True' : 'False'}>
            {game.text}
        </li>
    )
}


export default Button;