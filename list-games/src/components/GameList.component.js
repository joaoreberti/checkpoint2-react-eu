import React from 'react';
import axios from 'axios';


class GameList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        games: []
    }
}

retrieveGameList = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then(response => {
        this.setState({
            games: response.data
        })
    })
  
}
componentWillMount() {
    this.retrieveGameList();
}

render() {
    return(
        <div>
         
        </div>
    )
}
}



export default GameList;