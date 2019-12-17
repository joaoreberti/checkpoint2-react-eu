import React from 'react';
import { GridList, GridListTile, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

export default function Screenshoots(props){

if(props.game === undefined) return 'loading...'  
return (
    <Container>
        <div>
            <Link to = {"/games"}><HomeIcon fontSize = 'large'/> Go to home page</Link>
        </div>
        <GridList cellHeight={300} cols={3}>
        {props.game.short_screenshots.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.image} alt={tile.id} />
            </GridListTile>
        ))}
        
    </GridList> 
    </Container>
    
)
}