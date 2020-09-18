import React from 'react'
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from '../components/auth/Login';
import Home from '../pages/Home';

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default Navigation