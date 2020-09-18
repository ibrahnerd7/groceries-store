/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from "react-router-dom";

const Desktop = (props) => {
    return (
        <nav className="nav-menu d-none d-lg-block">
            <ul>
                <li className="active"><a href="#header">Home</a></li>
                <li><a href="#about">Fruits & Vegetables</a></li>
                <li><a href="#services">Grocery & Staples</a></li>
                <li><a href="#portfolio">Drinks</a></li>
                <li className="drop-down"><a href="">Account</a>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Sign Out</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Cart</a></li>

                <li className="get-started"><a href="#about">Get Started</a></li>
            </ul>
        </nav>
    )
}

export default Desktop