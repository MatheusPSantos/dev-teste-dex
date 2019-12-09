import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <img src="img/assets/logo.png" className="header-logo" alt="" />
                    <ul className="header-links">
                        <li><NavLink to="">FOODS </NavLink></li>
                        <li><NavLink to="">PEOPLE</NavLink></li>
                        <li><NavLink to="">PLACES</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}