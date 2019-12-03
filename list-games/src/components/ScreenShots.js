import React from "react";
import { withRouter, Link} from "react-router-dom";
import ScreenShot from "./ScreenShot.js"

function ScreenShots({ gameId, location }) {
  const { short_screenshots: screenShotsArr, name } = location.game;

  return (
    <>  
      <h3>{name} picture gallery</h3>
      <div className="gallery">
        {screenShotsArr.map(screenShot => <ScreenShot key={screenShot.id} imageUrl={screenShot.image} /> )}
      </div>
      <Link to="/" className="back"><button className="button">Home</button></Link>
    </>
  );
}

export default withRouter(ScreenShots);