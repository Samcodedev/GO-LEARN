import React from 'react';
import './ProfileBody.css'
import img from './img/Group 1.png'
import img2 from './img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png'

import ClassesData from '../../Courses/Data/ClassesData.json'
import { Link } from "react-router-dom"
import { useEffect } from 'react';

const ProfileBody = () => {

    let star = ""
    let title = ""

    for( let i=0; i<ClassesData.length; i++ ){
        star = ClassesData[5].star
        title = ClassesData[5].title
    }

    let [det, efunc] = React.useState('')
    const handleLogin = async () =>{
        const config ={
            headers:{
                'content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        console.log(config.headers)
        let result = await fetch('https://mysterious-waters-58153.herokuapp.com/api/v1/auth', config, {
            method:'get',
            credencials: 'include'
            
        })
        result = await result.json()
        console.warn(result)
        console.log(result)
        let deta = result.data
        efunc(
            det = deta
        )
    }
    console.log(det)


    useEffect(() => {
        return () => {
            handleLogin()
        };
    })

    function dashboard(){
        document.getElementById("dashboard").style.display="flex"
        document.getElementById("profile").style.display="none"
        document.getElementById("first").style.backgroundColor="#007bff"
        document.getElementById("first").style.color="#ffffff"
        document.getElementById("second").style.backgroundColor="transparent"
    }

    function profile(){
        document.getElementById("dashboard").style.display="none"
        document.getElementById("profile").style.display="block"
        document.getElementById("first").style.backgroundColor="transparent"
        document.getElementById("second").style.backgroundColor="#007bff"
    }

    
    return(
        <div className='profilebody'>
            <div className="sub-profilebody">
                <div className="top">
                    <div className="alert">
                        <span>Your Application is pending as of 10 September, 2022</span>
                    </div>
                    <div className="details">
                        <div className="img-div">
                            <img src={img} alt="" />
                        </div>
                        <div className="text-div">
                            <h5>Hello,</h5>
                            <h3>{det.firstName} {det.lastName}</h3>
                        </div>
                    </div>
                </div>

                <div className="dashboard">
                    <div className="dashboard-nav">
                        <ul>
                            <li onClick={dashboard} id='first'><span className='span'>Dashboard</span></li>
                            <li onClick={profile} id='second'><span className='span'>My Profile</span></li>
                            <li><span className='span'>Enrolled Courses</span></li>
                            <li><span className='span'>Wishlist</span></li>
                            <li><span className='span'>Reviews</span></li>
                            <li><span className='span'>My Quiz Attempts</span></li>
                            <li><span className='span'>Order History</span></li>
                            <li><span className='span'>Question & Answer</span></li>
                            <li><span className='span'>Settings</span></li>
                            <li><span className='span'>Logout</span></li>
                        </ul>
                    </div>
                    <div className="dashboard-main" id='dashboard'>
                        <div className="upload">
                            <div className="alert">
                                <span>Set Your Profile Photo</span>
                            </div>
                            <button>Click Here</button>
                        </div>
                        <h4>Dashboard</h4>
                        <div className="properties">
                            <div className="box">
                                <div className="img-div">
                                    <img src={img} alt="" />
                                </div>
                                <div className="text-div">
                                    <h1>1</h1>
                                    <p>Enrolled Courses</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-div">
                                    <img src={img} alt="" />
                                </div>
                                <div className="text-div">
                                    <h1>1</h1>
                                    <p>Active Courses</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img-div">
                                    <img src={img} alt="" />
                                </div>
                                <div className="text-div">
                                    <h1>0</h1>
                                    <p>Completed Courses</p>
                                </div>
                            </div>
                        </div>
                        <h4>In Progress Courses</h4>
                        <Link to="/DecFinance">
                            <div className="course">
                                <div className="img-div">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="text-div">
                                    <span>{star}</span>
                                    <h3>{title}</h3>
                                    <p>Completed Lessons: <span> 0 of 6 lesson</span></p>
                                    <div className="progress-div">
                                        <span>Complete 20%</span>
                                        <div className="bar">
                                            <div className="progress"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="profile" id='profile'>
                        <div className="data">
                            <h2>Profile</h2>
                            <ul>
                                <li>Registered Date</li>
                                <li>{det.createdAt}</li>
                            </ul>
                            <ul>
                                <li>First Name</li>
                                <li>{det.firstName}</li>
                            </ul>
                            <ul>
                                <li>LastName</li>
                                <li>{det.lastName}</li>
                            </ul>
                            <ul>
                                <li>UserName</li>
                                <li>{det.userName}</li>
                            </ul>
                            <ul>
                                <li>Email</li>
                                <li>{det.email}</li>
                            </ul>
                            <ul>
                                <li>Phone Number</li>
                                <li>+234 9067925333</li>
                            </ul>
                            <ul>
                                <li>id</li>
                                <li>{det._id}</li>
                            </ul>
                            <ul>
                                <li>Role</li>
                                <li>{det.role}</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody;