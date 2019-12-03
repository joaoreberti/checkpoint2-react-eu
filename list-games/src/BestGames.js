import React from 'react';

const BestGames = ({game, bestClick}) => {
    
        return <div><button onClick={()=>bestClick(game)} >Best games</button></div>
    }
    
export default BestGames;