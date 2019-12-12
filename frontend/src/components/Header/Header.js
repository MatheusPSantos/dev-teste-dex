import React, { Component } from 'react';
import './Header.css';
import { div, Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-logo">
                        <Link to="/dashboard">
                            <img src="assets/logo.png" alt="" />
                        </Link>
                    </div>
                    <ul className="header-links">
                        <li><div onClick={()=> this.props.changeRoute('foods')}>FOODS </div></li>
                        <li><div onClick={()=> this.props.changeRoute('peoples')}>PEOPLE</div></li>
                        <li><div onClick={()=> this.props.changeRoute('places')}>PLACES</div></li>
                    </ul>
                </div>
            </div>
        );
    }
}