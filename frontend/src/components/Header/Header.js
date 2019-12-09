import React, { Component } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <Link to="/dashboard">
                        <img src="img/assets/logo.png" className="header-logo" alt="" />
                    </Link>
                    <ul className="header-links">
                        <li><NavLink activeClassName="active" to="/dashboard/food">FOODS </NavLink></li>
                        <li><NavLink activeClassName="active" to="/dashboard/people">PEOPLE</NavLink></li>
                        <li><NavLink activeClassName="active" to="/dashboard/places">PLACES</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}