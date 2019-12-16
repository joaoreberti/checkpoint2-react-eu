import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { 
    Button, 
    Grid, 
    Card, 
    CardMedia, 
    CardActionArea,
    Typography,
    CardContent,
    Container,
    CardActions } from '@material-ui/core';

import StarRateIcon from '@material-ui/icons/StarRate';

import Header from '../components/Header'
export default function GameList({ games, handleClick, handleSortRating,btn_text, bg_color }){

    
    
    function renderGame(game) {
        return (
            <Grid item xs ={6} md={4} key={game.id} >
                <Card style ={{minHeight: 400}} onClick = {() => {

                    const index = games.findIndex(el => el.id === game.id)
                    handleClick(index)
                }}>
                    
                    <Link to={`/games/${game.slug}`} style ={{textDecoration: 'none'}}>
                        <CardActionArea>
                            <CardMedia image={game.background_image} style={{ height: 200 }} />

                        </CardActionArea>
                        
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {game.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   Released: {game.released} 
                                    
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Rating: {game.rating} <StarRateIcon fontSize ='inherit'/>
                                    
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Genes: {game.genres.map(genre => (<span style ={{paddingLeft: 5}}>{genre.name}</span>))}
                                
                                    
                                </Typography>
                    
                            </CardContent>
                        
                    </Link>
                   
                </Card>
            </Grid>
        )
    }
    
    if (games === undefined) {
        return 'Loading...'
    }
return (
    <div>

        <Header games = {games}/>
        <Container maxWidth="md" style={{ marginTop: 16 }}>
            <Grid container direction="column" spacing={4} >
            <Grid item className = 'games_list_header'>
                <h1> {btn_text.header}</h1>
            </Grid>
            <Grid item >
                <Button variant = 'outlined' onClick ={handleSortRating}> {btn_text.btn} </Button>
            </Grid>
            <Grid item>
                    <Grid container spacing={2} justify = 'space-between'>
                        {games.map(game => renderGame(game))}
                    </Grid>
                </Grid>
            </Grid>
        </Container> 
    </div>
)
}