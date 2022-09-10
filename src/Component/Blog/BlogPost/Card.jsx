import React from 'react';
import './BlogPost.css'
import img from './img/blog-img-1.jpg'

const Card = (props) => {
    return(
        <div className="card">
            <div className="img-div">
                <img src={img} alt=""/>
            </div>
            <div className="content">
                <a href="/construction"><h3>{props.title}</h3></a>
                <p>{props.content}</p>
                <div className="buttom">
                    <ul>
                        <li><a href="/construction">{props.author}</a></li>
                        <li><a href="/construction">{props.date}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;