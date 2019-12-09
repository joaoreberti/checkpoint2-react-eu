import React, { Component } from "react";
import { tsPropertySignature } from "@babel/types";

const Game = (props) => {
    return (
    <div>
        {props.name} - {props.rating}/5 ⭐
        <img src={props.background_image} />
    </div>
    )
}

export default Game