import React, {Component} from 'react';

import './App.css'
import RollDice from './RollDice';

class App extends Component {
    render() {
        return(
            <div>
            <h1 className="App">Here will render the Dice Game!!!</h1>
            <RollDice/>
            </div>
        )
    }
}

export default App;