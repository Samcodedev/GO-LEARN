import React from 'react'
import './Head.css'
import forex from './img/Forex.png'
import crypt from './img/download 2.png'
import prof from './img/Group 1.png'
import { Link } from 'react-router-dom';
import Course from '../.././Courses'
import { BiBookAlt } from 'react-icons/bi'
import { HiUserGroup } from 'react-icons/hi'
import { BsPerson } from 'react-icons/bs'

const Head = () => {

    const data = [
        {
            title: "Cryptocurrency Trading Course",
            star: "**********"
        }
    ]

    data.map((item) =>{
        return(
            <Course 
                title={item.title}
                star={item.star}
            />
        )
    })
    


    return(
        <div className="head">
            {/* <div className="sub-head"> */}
                <div className="head-text">
                    <h1>Nigeria's foremost Learning and Earning Platform</h1>
                    <p>At Go-Learn, we believe that flexible and easy to access learning opportunities can bring a significant change in how individuals prefer to learn! Therefore, we offers you the possibility of earning while you enjoy the beauty of eLearning!</p>
                    <Link to="/register"><button> <BsPerson fontSize="20px" /> Join For Free</button></Link>
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
                                    <span><Link to="">Trader Hack</Link></span>
                                </div>
                                <div className="card-content">
                                    <h1><Link to="">Cryptocurrency Trading Course</Link></h1>
                                    <p>This course is built for persons in search of clarity on the workings of the cyptocurrencies market and those who are relatively new to crypto.</p>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li><Link to=""> <BiBookAlt fontSize="20px" color='#007bff' /> Lesson 9</Link></li>
                                        <li><Link to=""> <HiUserGroup fontSize="20px" color='#007bff' /> Students 288</Link></li>
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
                                    <span><Link to="">ABOKI</Link></span>
                                </div>
                                <div className="card-content">
                                    <h1><Link to="">Affiliate Marketing Course</Link></h1>
                                    <p>This course will teach you strategies to make money with affiliate Marketing today and help you create a great passive income revenue system.</p>
                                </div>
                                <div className="card-bottom">
                                <ul>
                                    <li><Link to=""> <BiBookAlt fontSize="20px" color='#007bff' /> Lesson 9</Link></li>
                                    <li><Link to=""> <HiUserGroup fontSize="20px" color='#007bff' /> Students 288</Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Head