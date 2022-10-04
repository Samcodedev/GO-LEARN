import React from 'react';
import './Class.css'
import Module from './Card/Module';
import ModuleData from './Card/ModuleData.json'
// import video from './video/React and node JS project #16 Login API integration.mp4'

const Class = () => {
    const mode = ModuleData.map((item) =>{
        return(
            <Module 
                module={item.module}
                title={item.title}
                time={item.time}
            />
        )
    })


    function overview(){
        document.getElementById("overview").style.display="flex"
        document.getElementById("file").style.display="none"
        document.getElementById("link1").style.borderBottom="2px solid #027dff"
        document.getElementById("link2").style.borderBottom="2px solid transparent"
        document.getElementById("link1").style.color="#027dff"
        document.getElementById("link2").style.color="#41454f"
    }
    function file(){
        document.getElementById("file").style.display="flex"
        document.getElementById("overview").style.display="none"
        document.getElementById("link1").style.borderBottom="2px solid transparent"
        document.getElementById("link2").style.borderBottom="2px solid #027dff"
        document.getElementById("link1").style.color="#41454f"
        document.getElementById("link2").style.color="#027dff"
    }


    return(
        <div className='class'>
            <div className="sub-class">
                <div className="content">
                    <div className="content-head">
                        <span>Course Content</span>
                    </div>
                    {mode}
                </div>
                <div className="video">
                    <div className="video-head">
                        <div className="first">
                            <p>FOREX Trading Course</p>
                        </div>
                        <div className="second">
                            <span>Your Progress: 0 of 11 (0%)</span>
                            <button>Mark as Complete</button>
                        </div>
                    </div>
                    <video src="https://youtu.be/xsQyr77SR08" type="video/mp4" controls />
                    <div className="course-details">
                        <ul>
                            <li id='link1' onClick={overview}>Overview</li>
                            <li id='link2' onClick={file}>Exercise Files</li>
                        </ul>
                        <div className="course-content">
                            <div className="overview" id='overview'>
                                <h2>About Lesson</h2>
                            </div>
                            <div className="file" id='file'>
                                <h2>Exercise Files</h2>
                            </div>
                            <div className="control">
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Class;