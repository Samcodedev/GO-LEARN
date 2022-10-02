import React from 'react';
import './Module.css'

const Module = (props) => {
    return(
        <div className="tutor-according-item">
            <div className="tutor-according-head">
                <h4>{props.module}</h4>
            </div>
            <div className="tutor-according-body">
                <span>{props.time}</span>
                <h5>{props.title}</h5>
            </div>
        </div>
    )
}

export default Module;