import React, {Component} from 'react';

import './App.css'
import RollDice from './RollDice';

class App extends Component {
    render() {
        return(
            <div className="App-wrapper">
            <h1 className="App">Dice Game</h1>
            <RollDice/>
            </div>
        )
    }
}

export default App;