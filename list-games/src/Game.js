// Display Info

import React from "react";
import "./Game.css";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test"
    };
    // this.handleLike = this.handleLike.bind(this);
  }

  render() {
    return (
      <div class="column">
        <div class="ui card">
          <div class="image">
            <img src={this.props.image}></img>
          </div>

          <div class="content">
            <a class="header">{this.props.name}</a>
            <div class="meta">
              <span class="date">{this.props.rating} ⭐</span>
            </div>
            <div class="description">
              {" "}
              <Link to={"screenshots/" + this.props.id}>See screenshots</Link>
            </div>
            <br></br>
            <button
              class="ui button"
              onClick={() => this.props.handleDelete(this.props.slug)}
            >
              Delete Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesList;
