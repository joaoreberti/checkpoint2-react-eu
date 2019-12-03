import React from "react";
import "./Screenshots.css";

class Screenshots extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h1>{this.props.rating} ⭐ </h1>
        <h2>Screenshots</h2>
        <div className="screenshots">
          {this.props.screenshots.map(id => {
            return (
              <div class="ui card">
                <div class="image">
                  <img src={id.image}></img>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Screenshots;
