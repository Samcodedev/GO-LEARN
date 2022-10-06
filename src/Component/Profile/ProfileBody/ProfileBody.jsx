import React from 'react';
import './ProfileBody.css'
import img from './img/Group 1.png'
import img2 from './img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png'

import ClassesData from '../../Courses/Data/ClassesData.json'
import { Link } from "react-router-dom"
import { useEffect } from 'react';
// import axios from 'axios';

const ProfileBody = () => {

    let star = ""
    let title = ""

    for( let i=0; i<ClassesData.length; i++ ){
        star = ClassesData[5].star
        title = ClassesData[5].title
    }


    // fetching user data and also sending a unique token to the header

    const [det, effunc] = React.useState('')
    const handleLogin = async () =>{
            const config ={
                headers:{
                    'content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        let result = await fetch('https://mysterious-waters-58153.herokuapp.com/api/v1/auth', config, {
            method:'get',
            credencials: 'include'
            
        })
        result = await result.json()
        console.warn(result)
        console.log(result)
        effunc(result.data)
    }

    useEffect(() => {
        handleLogin()
    }, [])
    console.log(det)
    

// courseTitle
// courseDescription
// courseDuration
// category
// whatToLearn
// requirement
// audience
// materials


    let [courseTitle, ctfunc] = React.useState('')
    let [courseDescription, cdtfunc] = React.useState('')
    let [courseDuration, cdfunc] = React.useState('')
    let [category, cfunc] = React.useState('')
    let [whatToLearn, wlfunc] = React.useState('')
    let [requirement, rfunc] = React.useState('')
    let [audience, afunc] = React.useState('')
    let [materials, mfunc] = React.useState('')


    const handleCreateCourse = async (e) =>{
        e.preventDefault()
        // const config2 ={
        //     headers:{
        //         'content-Type': 'application/json',
        //         Authorization: 'Bearer ' + localStorage.getItem('token')
        //     }
        // }
        let result = await fetch('https://mysterious-waters-58153.herokuapp.com/api/v1/course', {
            method:'post',
            credencials: 'include',
            body:JSON.stringify({courseTitle, courseDescription, courseDuration, category, whatToLearn, requirement, audience, materials}),
            headers: {
                'content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            
        })
        result = await result.json()
        console.warn(result)
        console.log(result)
    }
    
    // const handleCreateCourse = () => {
    //     const config2 = {
    //         Headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('token'),
    //             body:JSON.stringify({courseTitle, courseDescription, courseDuration, category, whatToLearn, requirement, audience, materials})
    //         }
    //     }
    //     axios.post('https://mysterious-waters-58153.herokuapp.com/api/v1/course', config2).then(
    //         res => {
    //             console.log(res)
    //         }
    //     ),
    //     err => {
    //         console.log(err)
    //     }

    // }
    // useEffect(() => {
    //     handleCreateCourse()
    // }, [])

    // {courseTitle, courseDescription, courseDuration, category, whatToLearn, requirement, audience, materials}

    function dashboard(){
        document.getElementById("dashboard").style.display="flex"
        document.getElementById("profile").style.display="none"
        document.getElementById("create").style.display="none"
        document.getElementById("first").style.backgroundColor="#007bff"
        document.getElementById("first").style.color="#ffffff"
        document.getElementById("second").style.backgroundColor="transparent"
        document.getElementById("sixth").style.backgroundColor="transparent"
    }

    function profile(){
        document.getElementById("dashboard").style.display="none"
        document.getElementById("profile").style.display="block"
        document.getElementById("create").style.display="none"
        document.getElementById("first").style.backgroundColor="transparent"
        document.getElementById("second").style.backgroundColor="#007bff"
        document.getElementById("sixth").style.backgroundColor="transparent"
    }

    function create(){
        document.getElementById("dashboard").style.display="none"
        document.getElementById("profile").style.display="none"
        document.getElementById("create").style.display="block"
        document.getElementById("first").style.backgroundColor="transparent"
        document.getElementById("second").style.backgroundColor="transparent"
        document.getElementById("sixth").style.backgroundColor="#007bff"
    }
    // sixth
    
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
                            <li onClick={create} id='sixth'><span className='span'>Create Course</span></li>
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
                    <div className="create-course" id="create">
                        <h2>Create Course</h2>
                        <form onSubmit={handleCreateCourse} action="">
                            <label>Course Title</label>
                            <input type="text" value={courseTitle} onChange={(e) => ctfunc(e.target.value)} />

                            <label>Course Description</label>
                            <input type="text" value={courseDescription} onChange={(e) => cdtfunc(e.target.value)} />

                            <label>Course Duration</label>
                            <input type="text" value={courseDuration} onChange={(e) => cdfunc(e.target.value)}  />

                            <label>Category</label>
                            <input type="text" value={category} onChange={(e) => cfunc(e.target.value)}  />

                            <label>What To Learn</label>
                            <input type="text" value={whatToLearn} onChange={(e) => wlfunc(e.target.value)}  />

                            <label>Requirement</label>
                            <input type="text" value={requirement} onChange={(e) => rfunc(e.target.value)}  />

                            <label>Audience</label>
                            <input type="text"  value={audience} onChange={(e) => afunc(e.target.value)} />

                            <label>Materials</label>
                            <input type="text" value={materials} onChange={(e) => mfunc(e.target.value)}  />

                            <input type="submit" value="Create" className='submit'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ProfileBody;