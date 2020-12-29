import React, { Component } from 'react';
import './RandomColorSquare.css';

class RandomColorSquare extends Component {

    state = {
        backgroundColor: 'purple'
    }
    
    changeColor() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        this.setState({
            backgroundColor: '#' + randomColor 
        })
    }

    render() {
        return (
            <div className="RandomColorSquare" onClick={this.changeColor.bind(this)} style={{ backgroundColor: this.state.backgroundColor}}>
                
            </div>
        );
    }
}

export default RandomColorSquare;
