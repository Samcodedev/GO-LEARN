import React from 'react';
import icons from './img/Vector (4).png'

const Card = (props) => {
    return(
        <div className="box">
            <div className="icons">
                <img src={icons} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <a href="/construction"><span>!Start Now</span></a>
        </div>
    )
}

export default Card;