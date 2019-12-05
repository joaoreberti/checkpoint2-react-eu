import React from 'react'
import axios from 'axios';
import Game from './Game'

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        axios.get(`https://wild-games.herokuapp.com/api/v1`)
            .then(res => {
                // const obj = res.data;
                this.setState({ games: res.data });
            })
    }

    showGames = () => {
        return this.state.games.map((item, index) => {
            return (
                <Game title={item.name} img={item.background_image} rating={item.rating} delete={this.deleteGame.bind(this, index)} />
            )
        })
    }

    deleteGame = (index) => {
        const copyGames = Object.assign([], this.state.games);
        copyGames.splice(index, 1);
        this.setState({
            games: copyGames
        })
    }



    render() {

        return (
            <div>
                
                {/* <button className='btn'>Best Games</button>

                {this.state.games.filter(item =>
                    !this.state.showBestRating ||
                    item.rating)
                } */}

                {this.showGames()}
            </div>
        );
    }
}

export default GameList;
