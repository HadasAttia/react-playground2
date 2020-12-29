import React, { Component } from 'react';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        };
    }

    toggle() {
        this.setState({
            isShown: !this.state.isShown
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle.bind(this)}>Toggle</button>
                { this.state.isShown && <div>text text text</div> }
            </div>
        );
    }
}

export default Toggle;
