import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header>
                {/* Header desktop */}
                <div className="wrap-menu-header gradient1 trans-0-4">
                    <div className="container h-full">
                        <div className="wrap_header trans-0-3">
                            {/* Logo */}
                            <div className="logo">
                                <a href="index.html">
                                    <img src="images/icons/logo.png" alt="IMG-LOGO" data-logofixed="images/icons/logo2.png" />
                                </a>
                            </div>
                            {/* Menu */}
                            <div className="wrap_menu p-l-45 p-l-0-xl">
                                <nav className="menu">
                                    <ul className="main_menu">
                                        <li>
                                        <NavLink className="nav-link scrollto " to="/Home">Home</NavLink>
                                        </li>
                                        <li>
                                        <NavLink className="nav-link scrollto " to="/Menu">Menu</NavLink>
                                        </li>
                                        <li>
                                        <NavLink className="nav-link scrollto " to="/Reservation">Reservation</NavLink>
                                        </li>
                                        <li>
                                        <NavLink className="nav-link scrollto " to="/Gallery">Gallery</NavLink>
                                        </li>
                                        <li>
                                        <NavLink className="nav-link scrollto " to="/About">About</NavLink>
                                        </li>
                                        <li>
                                        <NavLink className="nav-link scrollto " to="/Blog">Blog</NavLink>
                                        </li>
                                        <li>
                                        <NavLink className="nav-link scrollto " to="/Contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* Social */}
                            <div className="social flex-w flex-l-m p-r-20">
                                <a href="#"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-facebook m-l-21" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-twitter m-l-21" aria-hidden="true" /></a>
                                <button className="btn-show-sidebar m-l-33 trans-0-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;