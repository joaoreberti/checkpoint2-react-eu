import React , {Component} from 'react';
import Game from './Game';

export default class GameList extends Component {
    constructor (props) {
        super(props) ;
        this.state={
                istud : 'hoc'   // What does it mean ? comments below.
            }
        
    }

    fakeData = [
        'first:',
        'second:',
        'third:'
    ]

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


    render() {

        return(
            <>
                <h2>GameList creation</h2>
                {this.fakeList(this.fakeData)}
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