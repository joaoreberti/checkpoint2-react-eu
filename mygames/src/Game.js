import React from 'react';

 const Game = ({name, backgdImag, rate, preview, release }) => {
    return (
        <>
            <h2>>> {name} <span>{rate}</span> </h2>
            <img src={backgdImag} alt={`Released : ${release};`} style= {{width : '200px' , height: 'auto'}} />
            <img src={preview} alt='Screenshots unaviable.' style = {{ width: '100px', height: 'auto'}}/>
            <br/>
        </>
    );
}

export default Game ;  //<p>{ea.name} : <img src = {ea["background_image"]} alt= 'img'></img> : {ea.rating}</p>