import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container, CardMedia } from "@material-ui/core";

export class Game extends Component {
  render() {
    const { name, background_image, rating, id } = this.props.game;
    return (
      <div>
        <CardContent>
          <Typography>
            <h2>{name}</h2>
          </Typography>

          <Typography>
            <h4>{rating}</h4>
          </Typography>

          <Typography>
            <CardMedia image={background_image} />
          </Typography>
        </CardContent>
      </div>
    );
  }
}

export default Game;
