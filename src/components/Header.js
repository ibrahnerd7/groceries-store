/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header=(props)=>{
    return(
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container">
                <div className="header-container d-flex align-items-center">
                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="#"><span>GroceStore</span></a></h1>
                        <button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu"></i></button>
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="#header">Home</a></li>
                            <li><a href="#about">Fruits & Vegetables</a></li>
                            <li><a href="#services">Grocery & Staples</a></li>
                            <li><a href="#portfolio">Drinks</a></li>
                            <li className="drop-down"><a href="">Account</a>
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Sign Out</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Cart</a></li>

                            <li className="get-started"><a href="#about">Get Started</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
