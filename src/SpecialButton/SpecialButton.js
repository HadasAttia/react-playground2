import React, { Component } from 'react';

class SpecialButton extends Component {
    render() {
        return (
            <div>
                <button onclick={this.handleClick}>Click me!</button>
            </div>

        )
    };
}

export default SpecialButton;