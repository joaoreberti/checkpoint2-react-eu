import React, { Component } from 'react';
import axios from "axios";
import { Row, Col, Button } from 'react-bootstrap'
import Game from './Game'

export default class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            
        }
        this.handleClick = this.handleClick.bind(this)
    }

    childData = (myData) => {
        let pos = this.state.apiData.findIndex(g => g.id == myData)

        this.state.apiData.splice(pos, 1)
        // console.log(this.state.apiData)
        this.forceUpdate()
    }
    handleClick = () => {
        this.setState(
            {
                apiData: this.state.apiData.filter((e) => {
            

                    return e.rating >= 4.5;
                })
            }
        )
        this.forceUpdate()

    }
    componentDidMount() {
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then(res => {
                this.setState({
                    apiData: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <Row className='filter py-5'>
                    <Col>
                        <Button onClick={this.handleClick} variant='dark' size='lg'>
                            Best Gamez
                        </Button>
                    </Col>
                </Row>
                <Row className='game-list'>
                    {console.log(this.state.apiData)}
                    {this.state.apiData.map((e, i) => {
                        return <Game key={i} className='game' data={e} back={this.childData} />
                    })}
                </Row>
            </div>
        );
    }
}

