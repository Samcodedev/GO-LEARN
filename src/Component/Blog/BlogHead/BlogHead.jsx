import React from 'react';
import { Link } from 'react-router-dom';
import './BlogHead.css'
// import { Link } from 'react-router-dom';

const BlogHead = () => {
    return(
        <div className="bloghead">
            <div className="sub-bloghead">
                <div className="text">
                    <h1>Blog</h1>
                    <span>
                        <Link to="/">Home</Link> / 
                        <Link to="/Blog"> Blog</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogHead;