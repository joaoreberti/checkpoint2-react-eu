import React, { Component } from 'react';
import Game from './Game';
import axios from 'axios';
import game from './game.css';

 class GameList extends Component {
     constructor(props){
     super(props)
        this.state = {
        games: []
        }
    }

    fetchGames = () => {
        axios
            .get(`https://wild-games.herokuapp.com/api/v1`)
            .then(res => {
                this.setState({ 
                    games: res.data
                 })
            })
    }

    fctDelete = () => {
        
    }

  componentDidMount() {
  this.fetchGames();      
  }

  render() {

    const { games } = this.state;

    return (
      <div className="gameUl">
        <ul>
            { games.map((game, index) => (
                    < Game {...game} key={index} / >
                ))
            }
        </ul>
      </div>
    )
  }
}
export default GameList;

{/* 

    render(){

        const { movies } = this.state;
        
        return (
                <ul>
                    {movies.map((movie, index) => (
                        <Movie {...movie} key={index}/>
                      
                    ))
                    }
                </ul>
        );
    }
}
 */}
