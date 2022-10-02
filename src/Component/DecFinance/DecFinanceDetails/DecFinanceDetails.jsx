import React from 'react';
import './DecFinanceDetails.css'
import img from './img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png'
import profile from './img/Group 1.png'
import ClassesData from '../../Courses/Data/ClassesData.json'
import Module from '../../Class/Card/Module';
import ModuleData from '../../Class/Card/ModuleData.json'
import ReviewData from '../../Review/data/ReviewData.json'
import { Link } from 'react-router-dom';
import StudentRev from '../../Review/StudentRev';

const DecFinanceDetails = () => {


    let experience = []
    let name = []
    let members = []
    let duration = []
    let mate_1 = []
    let mate_2 = []
    let mate_3 = []
    let mate_4 = []
    let Requirement =[]
    let tag_1 = []
    let tag_2 = []
    let tag_3 = []

    for( let i=0; i < ClassesData.length; i++){
        experience = ClassesData[5].details.experience
        name = ClassesData[5].author.name
        members = ClassesData[5].details.members
        duration = ClassesData[5].details.duration
        mate_1 = ClassesData[5].materials.mate_1
        mate_2 = ClassesData[5].materials.mate_2
        mate_3 = ClassesData[5].materials.mate_3
        mate_4 = ClassesData[5].materials.mate_4
        Requirement = ClassesData[5].requirement
        tag_1 = ClassesData[5].tags.tag1
        tag_2 = ClassesData[5].tags.tag2
        tag_3 = ClassesData[5].tags.tag3
    }

    

    function info(){
        document.getElementById("info").style.display="flex"
        document.getElementById("review").style.display="none"
        document.getElementById("inf").style.borderBottom="2.5px solid #027dff"
        document.getElementById("rev").style.borderBottom="2.5px solid transparent"
    }

    function review(){
        document.getElementById("info").style.display="none"
        document.getElementById("review").style.display="block"
        document.getElementById("inf").style.borderBottom="2.5px solid transparent"
        document.getElementById("rev").style.borderBottom="2.5px solid #027dff"
    }
    

    const mode = ModuleData.map((item) =>{
        return(
            <Module 
                module={item.module}
                time={item.time}
                title={item.title}
            />
        )
    })

    const stu = ReviewData.map((item) =>{
        return(
            <StudentRev 
                name={item.name}
                time={item.time}
                review={item.review}
            />
        )
    })

    return(
        <div className="DecFinanceDetails">
             <div className="sub-DecFinanceDetails">
                 <div className="main-detail">
                    <div className="img-div">
                        <img src={img} alt=""/>
                    </div>
                    <nav>
                        <li id='inf' onClick={info}>Course Info</li>
                        <li id='rev' onClick={review}>Reviews</li>
                    </nav>
                    <div className="course-info" id='info'>
                        <div className="about">
                            <h2>About Course</h2>
                            <h3>Course Description</h3>
                            <p>This course is designed to help you understand decentralised finance and how to navigate and benefit from protocols built for DeFI on the blockchain.</p>
                            <h3>Who This Course is for</h3>
                            <p>Anyone with a basic understanding of cryptocurrencies can take this course.</p>
                            <p>Interested students also need to possess familiarity with cryptocurrency wallets and cyber security best practices</p>
                        </div>
                        <div className="gain">
                            <h3>What Will You Learn?</h3>
                            <ul>
                                <li>At the end of this course you will have been taught the following:</li>
                                <li>What DeFi is at a fundamental level</li>
                                <li>What DeFi is at a fundamental level</li>
                                <li>How to set up a Binance wallet</li>
                                <li>How to use the safest and most popular DeFi tools and services for earning profit in this exciting new space!</li>
                            </ul>
                        </div>
                        <div className="course-content">
                            <h3>Course Content</h3>
                            <div className="tutor-according">
                                {mode}
                            </div>
                        </div>
                    </div>
                    <div className="reviews" id='review'>
                        <h3>Student Ratings & Reviews</h3>
                        <div className="chat">
                            <div className="total-rating">
                                <h1>3.0</h1>
                                <span>⭐⭐⭐⭐⭐</span>
                                <p>Total 5 Ratings</p>
                            </div>
                            <div className="rating-bar">
                                <div className="column">
                                    <div className="star">
                                        <span>⭐</span>
                                        <p>5</p>
                                    </div>
                                    <div className="bar">
                                        <div className="prog">

                                        </div>
                                    </div>
                                    <div className="rate">
                                        <p>1 Rating</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="star">
                                        <span>⭐</span>
                                        <p>4</p>
                                    </div>
                                    <div className="bar">
                                        <div className="prog">
                                            
                                        </div>
                                    </div>
                                    <div className="rate">
                                        <p>1 Rating</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="star">
                                        <span>⭐</span>
                                        <p>3</p>
                                    </div>
                                    <div className="bar">
                                        <div className="prog">
                                            
                                        </div>
                                    </div>
                                    <div className="rate">
                                        <p>0 Rating</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="star">
                                        <span>⭐</span>
                                        <p>2</p>
                                    </div>
                                    <div className="bar">
                                        <div className="prog">
                                            
                                        </div>
                                    </div>
                                    <div className="rate">
                                        <p>0 Rating</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="star">
                                        <span>⭐</span>
                                        <p>1</p>
                                    </div>
                                    <div className="bar">
                                        <div className="prog">
                                            
                                        </div>
                                    </div>
                                    <div className="rate">
                                        <p>1 Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {stu}
                    </div>
                 </div>
                 <div className="sub-detail">
                    <div className="free">
                        <div className="free-head">
                            <span>Free</span>
                            <button>Enroll Now</button>
                            <p>Free access this course</p>
                        </div>
                        <div className="free-footer">
                            <ul>
                                <li><span>Intermediate</span></li>
                                <li><span>{members} Total Enrolled</span></li>
                                <li><span> Duration: {duration}</span></li>
                                <li><span>April 3, 2022 Last Updated</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="course-detail">
                        <div className="course-top">
                            <h3>A course by</h3>
                            <div className="profile">
                                <img src={profile} alt=""/>
                                <div className="content">
                                    <Link to="/construction">{name}</Link>
                                    <span>{experience}</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-footer">
                            <div className="first">
                                <h3>Material Includes</h3>
                                <ul>
                                    <li>{mate_1}</li>
                                    <li>{mate_2}</li>
                                    <li>{mate_3}</li>
                                    <li>{mate_4}</li>
                                </ul>
                            </div>
                            <div className="first">
                                <h3>Requirements</h3>
                                <ul>
                                    <li>{Requirement}</li>
                                </ul>
                            </div>
                            <div className="first">
                                <h3>Tags</h3>
                                <div className="tags">
                                    <button> {tag_1} </button>
                                    <button> {tag_2} </button>
                                    <button> {tag_3} </button>
                                </div>
                            </div>
                            <div className="first">
                                <h3>Audience</h3>
                                <ul>
                                    <li>Get your team access to top GoLearn courses anytime, anywhere.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default DecFinanceDetails;
