import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
            callOut: 'Buy online and pick up in store or curbside',
            details: 'Find out more.'

        }
    }

    render() {
        return (
            <div className="banner">
                <span className="callOut">{this.state.callOut}</span>
                <a href="#" className="details">{this.state.details}</a>
            </div>
        )
    }
}