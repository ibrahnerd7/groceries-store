import React,{useContext}  from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Home from '../pages/Home';
import  {UserContext} from "../providers/Userprovider";

const Navigation = () => {
const user=useContext(UserContext)

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation