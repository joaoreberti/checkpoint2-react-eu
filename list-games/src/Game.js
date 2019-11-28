import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

export class Game extends Component {
  render() {
    const { name, background_image, rating, id } = this.props.game;
    return (
      <div>
        <CardContent>
          <Card style={{ backgroundColor: "#ca9c18" }}>
            <Typography>
              <h2>{name}</h2>
            </Typography>

            <Typography>
              <h4>Rating: {rating}</h4>
            </Typography>

            <Typography>
              <img src={background_image} style={{ width: 80, height: 80 }} />
            </Typography>

            <Button
              type="submit"
              variant="text"
              color="primary"
              size="small"
              value="Submit"
              onClick={this.props.deleteGame.bind(this, id)}
            >
              Delete
            </Button>
          </Card>
        </CardContent>
      </div>
    );
  }
}

export default Game;
