import React from 'react';
import './DecFinanceDetails.css'
import img from './img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png'
import profile from './img/Group 1.png'
import ClassesData from '../../Courses/Data/ClassesData.json'
import { Link } from 'react-router-dom';

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

    return(
        <div className="DecFinanceDetails">
             <div className="sub-DecFinanceDetails">
                 <div className="main-detail">
                    <div className="img-div">
                        <img src={img} alt=""/>
                    </div>
                    <nav>
                        <li>Course Info</li>
                        <li>Reviews</li>
                    </nav>
                    <div className="course-info">
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
                                <div className="tutor-according-item">
                                    <div className="tutor-according-head">
                                        <h4>Module 1: What is DEFI</h4>
                                    </div>
                                    <div className="tutor-according-body">
                                        <span>11:10</span>
                                        <h5>What is DeFi</h5>
                                    </div>
                                </div>
                                <div className="tutor-according-item">
                                    <div className="tutor-according-head">
                                        <h4>Module 2: Bitcoin as a DEFI</h4>
                                    </div>
                                    <div className="tutor-according-body">
                                        <span>13:59</span>
                                        <h5>Bitcoin as DeFi</h5>
                                    </div>
                                </div>
                                <div className="tutor-according-item">
                                    <div className="tutor-according-head">
                                        <h4>Module 3: Liquidity Mining</h4>
                                    </div>
                                    <div className="tutor-according-body">
                                        <span>44:22</span>
                                        <h5>Liquidity Mining</h5>
                                    </div>
                                </div>
                                <div className="tutor-according-item">
                                    <div className="tutor-according-head">
                                        <h4>Module 4: DAPPS and DEXES</h4>
                                    </div>
                                    <div className="tutor-according-body">
                                        <span>14:14</span>
                                        <h5>Decentralized Exchanges	</h5>
                                    </div>
                                </div>
                                <div className="tutor-according-item">
                                    <div className="tutor-according-head">
                                        <h4>Module 5: Liquidity Mining and Yield Farming</h4>
                                    </div>
                                    <div className="tutor-according-body">
                                        <span>13:16</span>
                                        <h5>DeFi Impermament Loss</h5>
                                    </div>
                                </div>
                                <div className="tutor-according-item">
                                    <div className="tutor-according-head">
                                        <h4>Join the Go-Learn DeFi Community</h4>
                                    </div>
                                    <div className="tutor-according-body">
                                        <span>00:00</span>
                                        <h5>Join Community</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews">
                        
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
<<<<<<< HEAD
                                    <Link to="/construction">{name}</Link>
=======
                                    <a href="/construction">{name}</a>
>>>>>>> 459cd684714a1564a95a1e540734be9d85559a87
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
