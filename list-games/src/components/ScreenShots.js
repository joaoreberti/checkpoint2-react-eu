import React, {Component} from "react"
import "./ScreenShots.css"
import { Link } from "react-router-dom"

class Screenshots extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){
        const screenShots = this.props.location.state
        console.log(screenShots)
        this.setState(screenShots)
    }

    render(){
        return(
            <div >
                <button><Link to="/">Return</Link></button>
            <div className="gallery">
                

                {this.state.imgs? this.state.imgs.map(((img, index)=> <img alt="" key={index}src={`${img.image}`} />  )): <h1>Loading</h1>}
            </div>
            </div>
        )
    }
}

export default Screenshots;

