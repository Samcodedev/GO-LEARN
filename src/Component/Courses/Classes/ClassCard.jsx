import React from 'react';
import './Classes.css'
import img from './img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png'
import profile from './img/Group 1.png'
import { Link } from 'react-router-dom';

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
                    <p>{props.duration}</p>
                    <p>{props.member}</p>
                </div>
                <div className="author">
                    <p>By <a href="/construction">{props.name}</a> in <a href="/construction">{props.job1}</a> <a href="/construction">{props.job2}</a> <a href="/construction">{props.job3}</a></p>
                    <a href="/construction"><img src={profile} alt="/construction"/></a>
                </div>
            </div>
            <div className="enrol-div">
                <a href={props.link}><button>Enroll Course</button></a>
            </div>
        </div>
    )
}

export default ClassCard;