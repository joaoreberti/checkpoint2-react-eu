import React from "react";

const ScreenShots = props => {
  const screenshots = props.game.short_screenshots;
  console.log(screenshots);
  return (
    <div>
      {screenshots.map(screenshot => (
        <img key={screenshot.id} src={screenshot.image} />
      ))}
    </div>
  );
};

export default ScreenShots;
