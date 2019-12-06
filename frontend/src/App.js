import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login'

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Login} />
            </BrowserRouter>
        );
    }
}

export default App;