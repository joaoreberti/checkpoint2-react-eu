import React , {Component} from 'react';
import Game from './Game';

export default class GameList extends Component {
    constructor (props) {
        super(props) ;
        this.state={
                istud : 'hoc'   // What does it mean ? comments below.
                //GameList to be fetched.
            }
        
    }

    fakeData = [
        'first:',
        'second:',
        'third:'
    ]

    GameList = [];

    fillAList ( list, content)  {
        list = content ;
    }

    fakeList = (fakDat) => {
        const myList = [];
        for (let ea of fakDat) {

            myList.push(
                <li>
                    <p>{ea}</p>
                    <Game/>
                </li> 
            ) 
        }
        return myList;

    }

    loadList = (thelist= ['wainting a list']) => thelist   ;

    componentDidMount() {

        fetch('https://wild-games.herokuapp.com/api/v1')
            .then(res => res.json()) 
            .then(data => this.setState( {gamelist : data}))
                //.catch(err => console.log('FETCHING Fail from API response!')) } ) ) // this.fillAList(GameList, data) //alert( ))  
            //this.setState({istud: 'hic'})
    }


    componentDidUpdate() {
        alert(this.state.gamelist);
        console.log(this.state.gamelist)
        
    }


    render() {

        return(
            <>
                <h2>GameList creation</h2>
                {/* {this.loadList(this.state.gamelist)} */}
                <br/>
                <p>Long List ? {GameList.lenght} items</p>
                <p>GameList & game online ? Good start, so !</p>
        <div>{this.state.mylist}</div>
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