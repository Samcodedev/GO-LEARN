import React from 'react';
import './Header.css'
import img from './img/about olubori 2.png'
const Header = () => {
    return(
        <div className="header">
            <div className="sub-header">
                <div className="img-div">
                    <img src={img} alt=""/>
                </div>
                <div className="text-content">
                    <h1>About Us</h1>
                    <p>At Go-Learn, we believe that flexible and easy to access learning opportunities can bring a significant change in how individuals prefer to learn! Therefore, we offers you the possibility of earning while you enjoy the beauty of eLearning!</p>
                </div>
            </div>
        </div>
    )
}


export default Header;