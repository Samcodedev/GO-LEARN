import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom"
import logo from './img/GoLearnFull Color.png'
import nav from './img/hamburger (1).png'
import option from './img/options.png'



const NavBar = () => {

    console.log(window.innerWidth)




    // function list(){
    //     console.log(window.innerWidth)
    //     window.innerWidth > 1142 ? document.getElementById("list").style.display="flex" : document.getElementById("list").style.display="none"
    //     window.innerWidth < 1142 ? document.getElementById("nav").style.display="block" : document.getElementById("nav").style.display="none"
    // }
    
    // function pup(){
    //     document.getElementById("list").style.display="flex"
    //     document.getElementById("list").style.position="absolute"
    // }

    
    // setInterval(function(){
        
    // }, 1000)

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
                    <ul className="main" id='list'>
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="Courses">Courses</Link>
                            <ul className="dd">
                                <span><Link to="DecFinance">Financial Trading Courses</Link></span>
                                <span>Personal Development Courses</span>
                                <span>Marketing Courses</span>
                                <span>Design and IT Courses</span>
                                <span><Link to="/profile">Profile</Link></span>
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
                    <div id='nav' >
                        <img src={nav} alt="" />
                    </div>
                </div>
                <div className="register">
                    <div className="group">
                        <Link to="/register"><button>Login/register</button></Link>
                        <input type="text" placeholder="Search for anything" className='search'/>
                    </div>
                    <div className="option">
                        <img src={option} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;