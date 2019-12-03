import React, { Component } from 'react';
import '../App.css';
import Game from './Game';
import { Container, Row, Col, Button } from "react-bootstrap";

class GameList extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            games: []
        }
        this.removeGame = this.removeGame.bind(this)

    }
    
    componentDidMount() {
        this.getGames()
    }

    bestGamesShowing = () => {
        const filterGame = this.state.games.filter( bestgames =>  bestgames.rating >= 4.5);
        console.log(filterGame);
    }

    removeGame (game) {
        this.setState(({ games }) => {
          const mGames = [ ...games ]
          mGames.splice(game, 1)
          return { games: mGames }
        })
      }


    getGames = () => {
        fetch('https://wild-games.herokuapp.com/api/v1')
        .then(results => results.json())
        .then(data => {
            this.setState({
                games: data,
            })
        })
    }
    
    
    render () {
        const thisGames = this.state.games

        return (
            <>
            <Container>
                <Row>
                    <Col md={12} className="text-center" style={{margin:'20px 0 8px 0'}}>
                        <h1>Game List</h1>
                        <Button onClick={() => this.bestGamesShowing()}>
                         {this.state.games ? "Best Games" : "All Games"}</Button>
                    </Col>
                </Row>
            </Container>
              {thisGames.map(game => <Game removeGame={this.removeGame} key={game.id} game={game} />)}
              
            </>
        ); 
    }


}

export default GameList;
