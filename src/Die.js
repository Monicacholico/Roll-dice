import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    // state = {
    //     number : 'one'
    // }
    // numOnDice = () => {
    //     let dieClasses = ['one', 'two', 'three', 'four', 'five', 'six'];
    //     let randNumDie = Math.floor(Math.random() * dieClasses.length);
    //     let dieIdx = dieClasses[randNumDie];
    //     this.setState({number: dieIdx})
    // };
    render() {
        // let displayDie = <i className={`fas fa-dice-${this.props.number}`}></i>;
        let displayDie = <i className={`fas fa-dice-${this.props.face}`}></i>;
        return (
            <div>
            {displayDie}
            {/* <button onClick={this.numOnDice}>Die Number</button> */}
            </div>
        )
    }
}

export default Die;