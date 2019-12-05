import React from "react";

const Game = ({ name, background_image, rating, remove, arrayIndex }) => {
  return (
    <div>
      <div className="container">
        <div className="card" />
        <img src={background_image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Rating: {rating}</p>
          <button
            className="btn btn-secondary"
            onClick={() => remove(arrayIndex)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
