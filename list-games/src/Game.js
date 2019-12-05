import React, {Component} from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            background_image:'',
            rating:''
        }
    }


    render() {

        return (
           <div>
                <button onClick> </button>
                <h1> Name: {this.props.name}</h1>
                <img src={this.props.background_image} alt='background_image'/>
                <p> Rating:{this.props.rating}</p>




           </div>
        )
    }


}

export default App