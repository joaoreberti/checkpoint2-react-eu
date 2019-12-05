import React from 'react';
import {Card} from 'react-bootstrap';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenshots: false
        }
    }

    handleScreenshots = () => {
        this.setState({
            screenshots: !this.state.screenshots
        })
    }


    render() {
    
        return (
            <div>
                <Card style={{ width: '18rem' }} className="game-card">
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Released date: {this.props.releasedDate}
                        </Card.Text>
                        <Card.Text>
                            Rating: {this.props.rating}
                        </Card.Text>
                    </Card.Body>
                        
                    <Card.Body>
                        {/* 
                        TODO : implement showImages component and connect it to a button placed right here*/}
                        <Card.Link href={"/jeu/screenshots/" + this.props.id} onClick={this.handleScreenshots}>screenshots</Card.Link>
                    </Card.Body>
                </Card>
                    {}

                
            </div>
        )
    }
}



export default Game;