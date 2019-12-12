import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Card from "../../components/Card/Card";
import UserProvider from '../../providers/User/UserProvider';
import ContentProvider from '../../providers/Content/ContentProvider';

import './Dashboard.css';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foods: [],
            peoples: [],
            places: [],
            route: 'foods'
        };

        if (!this.currentUser()) {
            this.props.history.push('/');
        }
    }

    getContent() {
        const content = new ContentProvider();
        content.getAllFoods()
            .then(res => {
                this.setState({ foods: res });
            });
        content.getAllPeoples()
            .then(res => {
                this.setState({ peoples: res });
            });
        content.getAllPlaces()
            .then(res => {
                this.setState({ places: res });
            });
        return content;
    }

    componentDidMount() {
        this.getContent();
    }

    currentUser() {
        return new UserProvider().currentUser();
    }

    loadContent(page) {
        if(page === undefined || page === 'foods') {
            this.setState({ route: 'foods' });
        }
        else if (page === 'peoples') {
            this.setState({ route: 'peoples' });
        }
        else if (page === 'places') {
            this.setState({ route: 'places' });
        }
    }

    render() {
        return (
            <div>
                <Header changeRoute={(page) => this.loadContent(page)} />
                <div className="container">
                    <div className="dashboard">
                        <h2 className="title">
                            List of {this.state.route}
                        </h2>
                        <div className="rectangle"></div>
                        <div className="list-box">
                            {(this.state.route === 'foods') ? this.state.foods.map((el, index) => <Card key={index} name={el.name} imageLink={el.imageLink} />) : null}
                            {(this.state.route === 'peoples') ? this.state.peoples.map((el, index) => <Card key={index} name={el.name} imageLink={el.imageLink} />) : null}
                            {(this.state.route === 'places') ? this.state.places.map((el, index) => <Card key={index} name={el.name} imageLink={el.imageLink} />) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}