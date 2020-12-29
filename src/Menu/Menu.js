import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

export default Menu;