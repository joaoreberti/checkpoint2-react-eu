import React from 'react';
import { Route, Switch, NavLink, withRouter} from 'react-router-dom';

const Screenshots = ({ routerProps, gamesData }) => {
    const game = gamesData.find(element => element.id == routerProps.match.params.id)
    
    if(game){
        return(
                <div className="screenshot-images-container">
                    <h1>Screenshots</h1>
                    {
                        game.short_screenshots.map(image => {
                            return <img className="screenshot-images" src={image.image} />
                        })

                    }
                </div>

        )
    } else {
        return(<h1>Screenshots</h1>)
    }
}

export default Screenshots;