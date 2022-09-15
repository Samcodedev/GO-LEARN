import React from 'react';
import icons from './img/Vector (4).png'
import { Link } from "react-router-dom"

const Card = (props) => {
    return(
        <div className="box">
            <div className="icons">
                <img src={icons} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Link to=""><span>Start Now!</span></Link>
        </div>
    )
}

export default Card;