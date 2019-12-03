import React from 'react';

const BestGames = ({ areBestRating, onFilterBestGames }) => {
    
    return(
        <button onClick={onFilterBestGames}>
            {
                !areBestRating? "Best Games" : "All Games"
            }
        </button>
    )
}

export default BestGames;