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


    loadList = (thelist= ['wainting a list']) => {
        const rendeList = [];
        for (let ea of thelist) {  //preview={thelist.clip.preview}

            rendeList.push(
                <li>
                    <Game name={thelist.name} backgdImag={thelist['background_image']}  rate={thelist.rating}  release={thelist.released} /> 
                </li> 
            ) 
        }
        return rendeList;
    }

    componentDidMount() {

        fetch('https://wild-games.herokuapp.com/api/v1')
            .then(res => res.json()) 
            .then(data => this.setState( {gamelist : data}))
            .catch(err => console.log('FETCHING Fail from API response!'))  // this.fillAList(GameList, data) //alert( ))  
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
                {this.loadList(this.state.gamelist)}
                <br/>
                <p>Long List ? {this.loadList().length} items</p>
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