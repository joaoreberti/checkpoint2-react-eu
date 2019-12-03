import React from "react";
import ReactFancyBox from "react-fancybox"
import "react-fancybox/lib/fancybox.css"

function ScreeShot({ imageUrl }) {

  return (
    <ReactFancyBox
      thumbnail={imageUrl}
      image={imageUrl} />
    // <img className="image image-gal" src={imageUrl}/>
  );
}

export default ScreeShot;