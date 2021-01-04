import React, {Component} from 'react';
import './App.css';

class Die extends Component {
    state = {
        number : 'one'
    }
    numOnDice = () => {
        let dieClasses = ['one', 'two', 'three', 'four', 'five', 'six'];
        let randNumDie = Math.floor(Math.random() * dieClasses.length);
        let dieIdx = dieClasses[randNumDie];
        this.setState({number: dieIdx})
    };
    render() {
        let displayDie = <i className={`fas fa-dice-${this.state.number}`}></i>;
        return (
            <div>
            <h1>I'm a Die</h1>
            {displayDie}
            {/* <i className="fas fa-dice-"></i>
            <i className="fas fa-dice-two"></i>
            <i className="fas fa-dice-three"></i>
            <i className="fas fa-dice-four"></i>
            <i className="fas fa-dice-five"></i>
            <i className="fas fa-dice-six"></i> */}
            <button onClick={this.numOnDice}>Die Number</button>
            </div>
        )
    }
}

export default Die;