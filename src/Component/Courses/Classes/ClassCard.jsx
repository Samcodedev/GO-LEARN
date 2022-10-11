import React from 'react';
import './Classes.css'
import img from './img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png'
import profile from './img/Group 1.png'
import { Link } from "react-router-dom"

const ClassCard = (props) => {
    return(
        <div className="card">
            <div className="img-div">
                <img src={img} alt=""/>
            </div>
            <div className="content-div">
                <span>{props.star}</span>
                <a href={props.link}><h3>{props.title}</h3></a>
                <div className="details">
                    <p>{props.time}</p>
                    <p>{props.audience}</p>
                </div>
                <div className="author">
                    <p>By <Link to="/construction">{props.author}</Link> in <Link to="/construction">{props.category}</Link> <Link to="/construction">{props.category}</Link> <Link to="/construction">{props.category}</Link></p>
                    <Link to="/construction"><img src={profile} alt="/construction"/></Link>
                </div>
            </div>
            <div className="enrol-div">
                <a href={props.link}><button>Enroll Course</button></a>
            </div>
        </div>
    )
}

export default ClassCard;
