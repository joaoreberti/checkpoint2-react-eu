import React, {Component} from 'react';
import '../App.css';


class Game extends Component{

  render(){
    return(
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card">
          <img
           src={this.props.image}
           className="card-img"
           alt={this.props.title}
           />

          <div className="card-body">
            <h5 className="card-title">
                {this.props.title}
            </h5>
            
            <p className="card-text">
                {this.props.rating}
            </p>
            <button onClick={()=>this.props.delete(this.props.id)}>
                delete Me
            </button>
          </div>
        </div>
      </div>
    )
  }

};


export default Game;