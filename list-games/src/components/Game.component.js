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
                <Card style={{ width: '18rem' }}>
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
                    <ListGroup className="list-group-flush">
                        {/* {this.listGenres(props.genres)} */}
                        {/* <ListGroupItem>{this.props.genre}</ListGroupItem> */}
                        {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                    </ListGroup>
                    <Card.Body>
                        {/* <Card.Link href={this.props.clip}>Clip</Card.Link> */}
                        {/* <Card.Link href={this.props.secondClip}>Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}



export default Game;