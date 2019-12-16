import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import '../App.css';


export default function Header(props) {

    let carouselItem = props.games.map(el => (
        <Carousel.Item className = 'carousel' key ={el.id}>
            <img
            className="d-block w-100"
            src={el.background_image}
            alt={el.name}
            />  
            <Carousel.Caption className ='info'>
                <h3>{el.name}</h3>
            </Carousel.Caption>      
        </Carousel.Item>
    ))
    return (
        <Carousel interval ={2000} >
        {carouselItem}
        </Carousel>
    )
    
}