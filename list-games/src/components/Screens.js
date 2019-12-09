import React from 'react';
import { NavLink } from 'react-router-dom'

class Screens extends React.Component {
    render() {
        console.log(this.props.games)
        return(
            <>
            <div>This is a test for screenshot page</div>

            <NavLink to={`/`}>Back to list</NavLink>
            </>
        )
    }
}

export default Screens;