import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom"
import logo from './img/GoLearnFull Color.png'



const NavBar = () => {
    return(
        <div className="navbar">
            <div className="sub-navbar">
                <div className="logo-search">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <input type="text" placeholder="Search for anything"/>
                </div>
                <div className="navigation">
                    <ul className="main">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="Courses">Courses</Link>
                            <ul className="dd">
                                <span><Link to="DecFinance">Financial Trading Courses</Link></span>
                                <span>Personal Development Courses</span>
                                <span>Marketing Courses</span>
                                <span>Design and IT Courses</span>
                            </ul>
                        </li>
                        <li>
                            <Link to="Blog">Go-Learn</Link>
                            <ul className="dd">
                                <span><Link to="About">About</Link></span>
                                <span><Link to="Contact-Us">Contact Us</Link></span>
                            </ul>
                        </li>
                        <li><Link to="Blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="register">
                    <a href=""><button>Login/register</button></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;