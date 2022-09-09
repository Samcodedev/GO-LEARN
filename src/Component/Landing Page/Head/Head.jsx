import React from 'react'
import './Head.css'
import forex from './img/Forex.png'
import crypt from './img/download 2.png'
import prof from './img/Group 1.png'

const Head = () => {
    return(
        <div className="head">
            <div className="sub-head">
                <div className="head-text">
                    <h1>Nigeria's foremost Learning and Earning Platform</h1>
                    <p>At Go-Learn, we believe that flexible and easy to access learning opportunities can bring a significant change in how individuals prefer to learn! Therefore, we offers you the possibility of earning while you enjoy the beauty of eLearning!</p>
                    <a href=""><button>Join For Free</button></a>
                </div>
                <div className="head-card">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-img">
                                <img src={forex} alt=""/>
                            </div>
                            <div className="cont">
                                <div className="card-prof">
                                    <img src={prof} alt=""/>
                                    <span><a href="">Trader Hack</a></span>
                                </div>
                                <div className="card-content">
                                    <h1><a href="">Cryptocurrency Trading Course</a></h1>
                                    <p>This course is built for persons in search of clarity on the workings of the cyptocurrencies market and those who are relatively new to crypto.</p>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li><a href="">Lesson 9</a></li>
                                        <li><a href="">Students 288</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="card-img">
                                <img src={crypt} alt=""/>
                            </div>
                            <div className="cont">
                                <div className="card-prof">
                                    <img src={prof} alt=""/>
                                    <span><a href="">ABOKI</a></span>
                                </div>
                                <div className="card-content">
                                    <h1><a href="">Affiliate Marketing Course</a></h1>
                                    <p>This course will teach you strategies to make money with affiliate Marketing today and help you create a great passive income revenue system.</p>
                                </div>
                                <div className="card-bottom">
                                <ul>
                                    <li><a href="">Lesson 11</a></li>
                                    <li><a href="">Students 377</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head