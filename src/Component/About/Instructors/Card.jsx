import React from 'react';
import {BsPersonCircle} from 'react-icons/bs'

const Card = (props) => {
    return(
        <div className="card">
            <div className="img-div">
                <img src={props.img} alt=""/>
            </div>
            <div className="content-div">
                <a href="/construction">
                    <span><BsPersonCircle fontSize="120%" /></span>
                </a>
                <h3>{props.name}</h3>
                <span>{props.work}</span>
            </div>
        </div>
    )
}

export default Card;