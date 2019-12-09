import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
            </BrowserRouter>
        );
    }
}

export default App;