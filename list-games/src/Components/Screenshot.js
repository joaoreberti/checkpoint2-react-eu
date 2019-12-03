import React from 'react';
import { Link } from 'react-router-dom';

const Screenshot = ({ gameScreenshot }) => {
    
    return (
        <div>
            <Link to="/">Back To Home</Link>
            <div>

                {gameScreenshot.short_screenshots.map(screenshot =>
                    <img src={screenshot.image} alt="" />
                )}
            </div>
        </div>

    )
}

export default Screenshot;

