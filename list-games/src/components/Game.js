import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container, CardActions,Button, GridList, GridListTile} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    
}));

export default function GameList({game}){

const classes = useStyles();

if(game === undefined) return 'loading...'  
return (
    <Container maxWidth="md" style={{ marginTop: 16 }}>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {game.name}
                </Typography>
                <CardActions disableSpacing>
                    {game.genres.map(
                        genre => {
                        return (<Button variant="contained" >{genre.name}</Button>)
                    }
                    )}
                </CardActions>
                
            </CardContent>
        </Card>
        <Button variant = "contained"> Delete </Button>
        <GridList cellHeight={160} cols={3}>
        {game.short_screenshots.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.image} alt={tile.id} />
            </GridListTile>
        ))}
        </GridList>
    </Container>
)
}