/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/Userprovider";
import { authentication } from '../../firebase/config'

const Desktop = (props) => {
    const user = useContext(UserContext)
    return (
        <nav className="nav-menu d-none d-lg-block">
            <ul>
                <li className="active"><a href="#header">Home</a></li>
                <li><a href="#about">Grocery</a></li>
                <li><a href="#portfolio">Drinks</a></li>
                <li className="drop-down"><a href="">Account</a>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        {
                            user && <li><a href="/">Profile</a></li>
                        }
                        {user &&
                            <li>
                                <a href="/" onClick={async () => await authentication.signOut().then(() => console.log("signed out"))}
                                >Sign Out</a>
                            </li>
                        }
                    </ul>
                </li>
                <li><a href="#contact">Cart</a></li>

                <li className="get-started"><a href="#about">Get Started</a></li>
            </ul>
        </nav>
    )
}

export default Desktop