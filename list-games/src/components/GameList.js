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


export default function GameList({ games, handleClick }){

    
    
    function renderGame(game) {
        return (
            <Grid item xs ={6} md={4}>
                <Card style ={{minHeight: 400}} onClick = {() => {

                    const index = games.findIndex(el => el.id === game.id)
                    handleClick(index)
                }}>
                    <Link to={`/games/${game.slug}`}>
                        <CardMedia image={game.background_image} style={{ height: 200 }} />
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {game.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {game.released}
                                    {game.rating}
                                    
                                </Typography>
                                <CardActions disableSpacing>
                                {game.genres.map(
                                        genre => {
                                            return (<Button variant="contained" >{genre.name}</Button>)}
                                )}
                                </CardActions>
                            </CardContent>
                        </CardActionArea>
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
        <Container maxWidth="md" style={{ marginTop: 16 }}>
            <Grid container direction="column" spacing={4}>
            <Grid item>
                    <Grid container spacing={2}>
                        {games.map(game => renderGame(game))}
                    </Grid>
                </Grid>
            </Grid>
        </Container> 
    </div>
)
}