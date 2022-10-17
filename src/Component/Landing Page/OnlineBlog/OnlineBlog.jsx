import React from 'react';
import './OnlineBlog.css'
import img from './img/olubori-free2.png'
import { Link } from 'react-router-dom';
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { RiRemoteControlLine } from 'react-icons/ri'
import { MdOutlineAccessTime } from 'react-icons/md'
import { GrGrow } from 'react-icons/gr'

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
                            <li> <FaChalkboardTeacher /> Expert Trainers</li>
                            <li> <MdOutlineAccessTime /> Lifetime Access</li>
                        </ul>
                        <ul>
                            <li> <RiRemoteControlLine /> Remote Learning</li>
                            <li> <GrGrow stroke='#7A7A7A' /> Self Development</li>
                        </ul>
                    </div>
                    <Link to="/profile"><button> <BsFillJournalBookmarkFill fontSize="20px" /> View All Courses</button></Link>
                </div>
            </div>
        </div>
    )
}

export default OnlineBlog;