import React , {Component} from 'react';
import Game from './Game';

export default class GameList extends Component {
    constructor (props) {
        super(props) ;
        this.state={
                istud : 'hoc'   // What does it mean ? comments below.
                //GameList to be fetched.
                //count to be added on update.
            }
        
    }


    // Checkout the React updating with firing <Button/>.
    i = 0
    count = () => {
        this.i +=1;
        this.setState({count : this.i})
    }

    //Display <Game> Commponent according the fetched data displayed as an array.
    loadList = (thelist = ['wainting a list']) => {
        const rendeList = [];

        for (let ea of thelist) { 
            rendeList.push(
                <li>
                    <Game name={ea.name} backgdImag={ea['background_image']}  rate={ea.rating} release={ea.released} /> 
                </li> 
            ) 
        }
        return rendeList;
    }

    //MMMMMMMMMMMMMMMMMMMMMMMMMMM_ Mounting _MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

    componentDidMount() {

        fetch('https://wild-games.herokuapp.com/api/v1')
            .then(res => res.json()) 
            .then(data => this.setState( {gamelist : data}))
            .catch(err => console.log('FETCHING Fail from API response!'))  // this.fillAList(GameList, data) //alert( ))  
            //this.setState({istud: 'hic'})
    }



    //UUUUUUUUUUUUUUUUUUUUUUUUUUUUU_ UpDating _UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU

    componentDidUpdate() {
            // alert(this.state.gamelist);
        console.log(this.state.gamelist)
        console.log(this.i, this.state.count);
        
    }


    //RRRRRRRRRRRRRRRRRRRRRRRRRRRR_____ Rendering  __________RRRRRRRRRRRRRRRRRRRRRRRRRR

    render() {

        return(
            <>
                <button onClick = { ()=> this.count()}>click to update</button>
                <h2>GameList creation</h2>
                <p>Long List ? {this.loadList().length} items</p>
                {this.loadList(this.state.gamelist)}
                <br/>
                
                <p>GameList & game online ? Good start, so !</p>
            </>
        )
    }
}



/**
 * Comments upon lamda latin words : 
 *  
 * Is, ea, id : means 'this' either as "...'what' will be..." or as "...a thing, which is gonna be..." ;

    Hic, haec, hoc means : 'this' as a close one ;
    Iste, ista, istud : means 'that' as near the point ;
    Ille, illa, illud : means 'that' as far away.

    From French website:
    cf. https://www.maxicours.com/se/cours/les-pronoms-adjectifs-is-ea-id/
    cf. https://www.maxicours.com/se/cours/les-pronoms-adjectifs-demonstratifs/
 */