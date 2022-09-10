import React from 'react';
import '../OnlineBlog/OnlineBlog.css'
import './FreeAccess.css'
import img from './img/olubori-free3.jpg'

const FreeAccess = () => {
    return(
        <div className="OnlineBlog Online">
            <div className="sub-OnlineBlog sub-Online">
                <div className="OnlineBlog-img-div Sub-Online-img">
                    <img src={img} alt=""/>
                </div>
                <div className="OnlineBlog-content cont">
                    <span>Get Instant Access For Free</span>
                    <h2>Self Development Course</h2>
                    <p>Go-Learn Self Development Course can assist you in bringing the significant changes in personal understanding and reshaping the confidence to achieve the best from your career! We trust that learning should be enjoyable, and only that can make substantial changes to someone!</p>
                    <a href="/construction"><button>Start For Free</button></a>
                </div>
            </div>
        </div>
    )
}

export default FreeAccess;