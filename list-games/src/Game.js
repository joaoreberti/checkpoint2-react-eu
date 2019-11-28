import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Card, CardMedia } from "@material-ui/core";

export class Game extends Component {
  render() {
    const { name, background_image, rating, id } = this.props.game;
    return (
      <div>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Card
            style={{
              backgroundColor: "#ca9c18",
              width: "60vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography>
              <h2>{name}</h2>
            </Typography>

            <Typography>
              <h4>Rating: {rating}</h4>
            </Typography>

            <Typography>
              <img src={background_image} style={{ width: 100, height: 80 }} />
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
