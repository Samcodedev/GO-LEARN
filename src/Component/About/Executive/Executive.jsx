import React from 'react';
import './Executive.css'
import img from './img/olubori-free2.png'

const Executive = () => {
    return(
        <div className="OnlineBlog">
            <div className="sub-OnlineBlog">
                <div className="OnlineBlog-img-div">
                    <img src={img} alt=""/>
                </div>
                <div className="OnlineBlog-content">
                    <span>Difference in Execution</span>
                    <h2>Improving Lives from Learning and Earning.</h2>
                    <p>At GoLearn, we understand that a target-based learning approach can make a significant change in the lives of our students from all over the world! We also avail to them the options to earn as an alternative to raising money for ventures after the program. </p>
                    <div className="online-props">
                        <ul>
                            <li> Expert Instructors</li>
                            <li> Capacity Building</li>
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

export default Executive;