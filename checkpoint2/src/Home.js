import React from 'react';
import GamesList from './GamesList'
import BestGames from './BestGames'
import { withRouter } from 'react-router-dom'

const Home = ({ gamesData, onDelete, areBestRating, onFilterBestGames, match }) => {
    console.log(match)
    return(
            <div>
                <h1>Games List</h1>
                <BestGames areBestRating={areBestRating} onFilterBestGames={onFilterBestGames}/>
                <GamesList gamesData={gamesData} onDelete={onDelete} />
            </div>    
    )
}

export default withRouter(Home);