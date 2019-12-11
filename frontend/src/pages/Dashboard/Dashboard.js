import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import ContentProvider from '../../providers/Content/ContentProvider';

import './Dashboard.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            food: [],
            people: [],
            place: []
        };
    }

    componentDidMount() {
        new ContentProvider().getAllFoods();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="dashboard">
                        <h2 className="title">
                            List of foods
                        </h2>
                        <div className="rectangle"></div>
                        <div className="list-box">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}