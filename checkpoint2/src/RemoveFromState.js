import React from 'react';

const RemoveFromState = ({ game, onDelete }) => {
    
    return(
        <button onClick={() => onDelete(game)}> Remove Game </button>
    )
}

export default RemoveFromState;