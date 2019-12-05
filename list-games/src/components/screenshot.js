import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

class Screenshot extends React.Component{
    render(){
        console.log(this.props.screenshotRes.name)
        console.log(this.props.screenshotRes.id)

        return(
            <div>
                <button><Link to='/'>Homepage</Link></button>

                {this.props.screenshotRes.map((screen, index) => (
                    <li key={index}>
                        <h2>{screen.name}</h2>
                    </li>
                ))}
            </div>
        )
    }
}

export default Screenshot