import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";
import Image from "material-ui-image";
import Link from "@material-ui/core/Link";

export class Game extends Component {
  render() {
    const {
      name,
      background_image,
      rating,
      id,
      short_screenshots
    } = this.props.game;
    return (
      <div>
        <Card
          style={{
            padding: "0.5vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1vh",
            backgroundColor: "inherit"
          }}
        >
          <Typography>
            <Image
              src={background_image}
              style={{
                width: "30vw",
                height: "20vh"
              }}
            />{" "}
          </Typography>
          <Card
            style={{
              backgroundColor: "#ffcbcc",
              padding: "0.5vh",
              width: "30vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Link href={`/jeu/screenshots/${id}`} color="inherit">
              {" "}
              <h2 style={{ fontFamily: "Mukta Vaani" }}>{name}</h2>
            </Link>

            <h4 style={{ fontFamily: "Mukta Vaani" }}>Rating: {rating}</h4>

            <Button
              type="submit"
              variant="text"
              size="medium"
              value="Submit"
              style={{ color: "#493f46" }}
              onClick={this.props.deleteGame.bind(this, id)}
            >
              Delete
            </Button>
          </Card>
        </Card>
      </div>
    );
  }
}

export default Game;
