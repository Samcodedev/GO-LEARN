import React from 'react';
import './OnlineBlog.css'
import img from './img/olubori-free2.png'

const OnlineBlog = () => {
    return(
        <div className="OnlineBlog">
            <div className="sub-OnlineBlog">
                <div className="OnlineBlog-img-div">
                    <img src={img} alt=""/>
                </div>
                <div className="OnlineBlog-content">
                    <span>Online Learning</span>
                    <h2>Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World</h2>
                    <p>At Go-Learn, we understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>
                    <div className="online-props">
                        <ul>
                            <li> Expert Trainers</li>
                            <li> Lifetime Access</li>
                        </ul>
                        <ul>
                            <li> Remote Learning</li>
                            <li> Self Development</li>
                        </ul>
                    </div>
                    <a href="/construction"><button>View All Courses</button></a>
                </div>
            </div>
        </div>
    )
}

export default OnlineBlog;