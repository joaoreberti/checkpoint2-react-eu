import React from 'react';
import {NavLink} from "react-router-dom";
import './Game.css'

class Agame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render(){
    return (

      <div className="test">
        <p> TEST </p>
        <NavLink  activeClassName="active" to="/">Back Home</NavLink>
      </div>
    )
  }
}


export default Agame;
