import React, { Component } from 'react';

const axios = require('axios');

class Gamelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        }
    }

    componentDidMount() {
        const list = async () => {
            const response = await axios.get('https://wild-games.herokuapp.com/api/v1')
            console.log(response)
            }
    }
          
    

    render() {
        const { games } = this.state;
        return (
            <ul>
                {games.map((game, index) => {
                    return(
                        <div>
                          hello!
                        </div>
                    )
                }
                )}
            </ul>
        )
    }

}

export default Gamelist;
