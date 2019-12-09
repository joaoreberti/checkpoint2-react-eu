import React, {component} from 'react'
import axios from 'axios'


const url = 'https://wild-games.herokuapp.com/api/v1'

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           allGames: []
       }
    }
      

    componentDidMount() {
        axios.get(url)
        .then(res => {
          const allGames = res.data;
          this.setState({
              allGames
          })
        console.log(res.data)
        })

        
        
        .catch(error => {
          console.log(error);
        });
      }

   




    

    


    render () {
        return (
            <div>
              
            </div>
        )
    };


};




export default GameList