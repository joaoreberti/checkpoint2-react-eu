import React from "react";
import "./Screenshots.css";

class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test"
    };
    // this.handleLike = this.handleLike.bind(this);
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h2>Screenshots</h2>
        <div class="ui card">
          <div class="image">
            <img src={this.props.screenshots[0].image}></img>
            <img src={this.props.screenshots[1].image}></img>
            <img src={this.props.screenshots[2].image}></img>
            <img src={this.props.screenshots[3].image}></img>
            <img src={this.props.screenshots[4].image}></img>
            <img src={this.props.screenshots[5].image}></img>
            <img src={this.props.screenshots[6].image}></img>
          </div>
        </div>
      </>
    );
  }
}

export default Screenshots;
