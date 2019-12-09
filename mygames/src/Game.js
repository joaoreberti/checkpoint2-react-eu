import React from 'react';

 const Game = ({name, backgdImag, rate, release }) => {
    return (
        <>
            <h2> {name} - <i>rate : </i><span>{rate}</span> </h2>
            <img src={backgdImag} alt={`Released : ${release};`} style= {{width : '200px' , height: 'auto'}} />
            <br/>
        </>
    );
}

export default Game ; 