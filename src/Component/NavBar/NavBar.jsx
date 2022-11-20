import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "./img/GoLearnFull Color.png";
import nav from "./img/hamburger (1).png";
import option from "./img/options.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";

const NavBar = ({ isLoggedIn }) => {
  console.log(window.innerWidth);

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

  return (
    <div className="navbar">
      {/* <div className="sub-navbar"> */}
      <div className="logo-search">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <input type="text" placeholder="Search for anything" />
      </div>
      <div className="navigation">
        <ul className="main" id="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Courses">
              Courses <RiArrowDownSLine fontSize="20px" />
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </Link>
            <ul className="dd">
              <span>
                <Link to="DecFinance">Decentralized Finance</Link>
              </span>
              <span>
                <Link to="DecFinance">Personal Development Courses</Link>
              </span>
            </ul>
          </li>
          <li>
            <Link to="Blog">
              Go-Learn <RiArrowDownSLine fontSize="20px" />{" "}
            </Link>
            <ul className="dd">
              <span>
                <Link to="About">About</Link>
              </span>
              <span>
                <Link to="Contact-Us">Contact Us</Link>
              </span>
            </ul>
          </li>
          <li>
            <Link to="Blog">Blog</Link>
          </li>
        </ul>
        <div id="nav">
          <img src={nav} alt="" />
        </div>
      </div>
      <div className="register">
        {/* Conditional rendering using login status  */}
        {isLoggedIn ? (
          <Link to="/profile">
            <button className="profileBtn">
              <HiOutlineUserCircle fontSize='22'/>
              Profile
            </button>
          </Link>
        ) : (
          <div className="group">
            <Link to="/login">
              <button className="loginBtn">Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
            <input
              type="search"
              placeholder="Search for anything"
              className="search"
            />
          </div>
        )}
        <div className="option">
          <img src={option} alt="" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NavBar;
