import React  from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Game = ({game, removeGame}) =>{
    return(
        <>
            <Container>
                <Row>
                  <Col md={12}>
                      <div className="d-flex justify-content-center aling-items-center" style={{margin: '20px 0px'}}>
                        <Card className="col-md-6">
                            <Card.Img variant="top" src={game.background_image}/>
                            <Card.Body>
                                <Card.Text>
                                    <span className="font-weight-bold">Name: {game.name}</span><br/>
                                    <span className="font-weight-bold">Rating: {game.rating} </span><br/>
                                </Card.Text>
                                <Button variant="primary" onClick={()=>removeGame(game) }>Remove game</Button>
                            </Card.Body>
                        </Card>
                    </div>
                  </Col>
                </Row>
            </Container>
        </>
    )

}

export default Game;