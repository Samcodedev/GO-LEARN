import React from 'react';
import './PupCourse.css'
// import forex from './img/Forex.png'
import crypt from './img/download 2.png'
import prof from './img/Group 1.png'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return(
        <div className="card-wrapper">
            <div className="card">
                <div className="card-img">
                    <img src={crypt} alt=""/>
                </div>
                <div className="cont">
                    <div className="card-prof">
                        <img src={prof} alt=""/>
                        <span><Link to="/profile">{props.author}</Link></span>
                    </div>
                    <div className="card-content">
                        <h1><Link to="/profile">{props.title}</Link></h1>
                         <p>{props.content}</p>
                    </div>
                     <div className="card-bottom">
                        <ul>
                            <li><Link to="/profile">Lesson {props.lesson}</Link></li>
                            <li><Link to="/profile">Students {props.students}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;