import React,{Component} from 'react';
import Game from './Game.js';



class GameList extends Component {
     constructor(props) {
         super(props);
         this.state = {
             games: []
         }
     }

     componentDidMount() {
         fetch('https://wild-games.herokuapp.com/api/v1') 
         .then(results => results.json())
         .then(data => {this.setState({games: data.games});})
     }

    
     showGames = () => {
        return this.state.games.map(item => {
            return(
                <Game name={item.name} image={item.background_image} rating={item.rating}/>
            )
        } );
    }

    render() {
        return (
            <div>
            
           {this.showGames() {games:this.state.games.length >= 0 ? true : null}}
            </div>



        )
    }

}


export default GameList