import React from 'react';
import '../../Blog/BlogHead/BlogHead'
import { Link } from 'react-router-dom';

const RegisterTop = () => {
    return(
        <div className="bloghead">
            <div className="sub-bloghead">
                <div className="text">
                    <h1>Student Registration</h1>
                    <span>
                        <a href="/">Home</a> / 
                        <a href="/register"><Link to="/register"> Student Registration</Link></a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RegisterTop;