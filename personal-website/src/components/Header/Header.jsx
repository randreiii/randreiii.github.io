import React from "react";
import Logo from "../../rda.png";
import './Header.css'

import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">

                    <img src={Logo} width="150px" alt="logo" className="logo" />

                </div>
                <div className="right">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home" className="about">Home</Link>
                            </li>
                            <li>
                                <Link to="/work" className="work">Work</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;