import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.svg'


export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            naveLinks: ['holiday gifts', 'designer collections', 'woman', 'men', 'kids', 'home', 'beauty', 'sale'],
        }
    }

    render() {

        let links = this.state.naveLinks.map((link, index) => {
            return <li><a key={index} className={link} href="#">{link}</a>
                <div className="dropdown">
                
                </div>
            </li>
        })

        return (
            <nav className="nav">
                <div className="top-nav">
                    <img src={logo} alt="logo" className="logo"/>
                    <div className="user-actions">
                        <span className="search">Search</span>
                        <span className="sign-in">Sign in</span>
                        <span className="bag">Bag</span>
                    </div>
                </div>

                <div className="bottom-nav">
                    <ul className="links">
                        {links}
                    </ul>
                </div>
            </nav>
        )
    }
}