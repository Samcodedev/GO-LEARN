import React from 'react';
import './PupCourse.css'
// import forex from './img/Forex.png'
import crypt from './img/download 2.png'
import prof from './img/Group 1.png'

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
                        <span><a href="/construction">{props.author}</a></span>
                    </div>
                    <div className="card-content">
                        <h1><a href={props.link}>{props.title}</a></h1>
                         <p>{props.content}</p>
                    </div>
                     <div className="card-bottom">
                        <ul>
                            <li><a href="/construction">Lesson {props.lesson}</a></li>
                            <li><a href="/construction">Students {props.students}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;