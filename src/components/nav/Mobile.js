/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Mobile = (props) => {
  return (
    <>
    <nav className="mobile-nav d-lg-none mobile-nav-active">
      <ul>
        <li className=""><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#team">Team</a></li>
        <li className="drop-down"><a href="">Drop Down</a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="drop-down"><a href="#">Drop Down 2</a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
            <li><a href="#">Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>

        <li className="get-started"><a href="#about">Get Started</a></li>
      </ul>
    </nav>
    {/* <div className="mobile-nav-overly" style={{display:"block"}} ></div> */}
    </>
  )
}

export default Mobile