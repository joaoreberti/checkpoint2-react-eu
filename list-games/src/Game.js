import React, { Component } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap'

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            isAlive: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            isAlive: false
        })


        this.props.back(this.state.data.id)
    }
    render() {
        return (
            <Col style={this.state.isAlive ? null : { visibility: 'hidden' }}>
                <Row className='game-title'>
                    <Col>
                        <h3>{this.state.data.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='img-container' style={{ width: '10%' }}>
                        <Image className='img' src={this.state.data['short_screenshots'] ? this.state.data['short_screenshots'][0].image : null} rounded />
                    </Col>
                </Row>
                <Row>
                    <h5>Rating: {this.state.data.rating}</h5>
                </Row>
                <Row>
                    <Col className='py-3'>
                        <Button onClick={this.handleClick} variant='dark' size='lg'>
                            Ded Game
                        </Button>
                    </Col>
                </Row>
            </Col >
        );
    }
}

