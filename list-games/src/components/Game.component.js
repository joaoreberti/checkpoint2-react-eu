import React from 'react';
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap';


class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    // listGenres = (genres) => {
    // for(let i = 0; i <= 2; i++) {
    //     return(
    //         <ListGroupItem>{genres[i].name}</ListGroupItem>
    //     )
    // }
    // }

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
                        {/* <Card.Link href={this.props.secondClip}>Another Link</Card.Link> */}
                    </Card.Body>
                </Card>


                
            </div>
        )
    }
}



export default Game;