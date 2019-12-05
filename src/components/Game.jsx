import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const {name,background_image,rating} = this.props;

    return(
      <React.Fragment>
          <p>{name}</p>
          <img src={background_image} alt='image'/>
          <p>{rating}</p>
      </React.Fragment>
    );
  }
}

export default Game;