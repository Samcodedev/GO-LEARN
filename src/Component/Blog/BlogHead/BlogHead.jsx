import React from 'react';
import './BlogHead.css'
// import { Link } from 'react-router-dom';

const BlogHead = () => {
    return(
        <div className="bloghead">
            <div className="sub-bloghead">
                <div className="text">
                    <h1>Blog</h1>
                    <span>
                        <a href="/">Home</a> / 
                        <a href="/Blog"> Blog</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogHead;