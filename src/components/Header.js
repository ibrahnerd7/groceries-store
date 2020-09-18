/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Desktop from "./nav/Desktop";
import Mobile from "./nav/Mobile";

const Header = (props) => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container">
                <div className="header-container d-flex align-items-center">
                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="#"><span>GroceStore</span></a></h1>
                        <button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu"></i></button>
                    </div>
                    <Mobile />
                    <Desktop />
                </div>
            </div>
        </header>
    )
}

export default Header
