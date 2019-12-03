import React from 'react';
import Game from './Game';

class GamesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games: [],
            isClicked: false,
        }
    }
    
    handleFetch = () => {
        fetch (`https://wild-games.herokuapp.com/api/v1`)
 	    .then(res => res.json()) 
 	    .then(results => {
		    this.setState({
            games: results,
            isClicked: true,
	        })
	    })
    }

    componentDidMount(){
        this.handleFetch()
    }


    handleClick = (game) => {
        const filteredGames = this.state.games.filter(element => element !== game)
        this.setState({games: filteredGames})
    }


    handleBest = () => this.setState({isClicked: !this.state.isClicked})
    


    render(){
        const { games, isClicked } = this.state
        return (
            <div>
                <button onClick={this.handleBest}>
                    { isClicked ? "Best Games" : "All Games" }
                </button>
            <div className="games">
                { games
                    .filter(game =>
                        isClicked || game.rating >= 4.5)
                    .map(game => 
                        <Game
                        game={game}
                        key={game.id} 
                        name={game.name}
                        released={game.released}
                        img={game.background_image}
                        rating={game.rating}
                        handleClick={this.handleClick}
                        screenshots={game.short_screenshots}
                        />)
                }
            </div>
            </div>
        )
    }
}

export default GamesList;