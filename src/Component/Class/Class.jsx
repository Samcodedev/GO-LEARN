import React from 'react';
import './Class.css'
import Module from './Card/Module';
import ModuleData from './Card/ModuleData.json'
import ReviewData from '../Review/data/ReviewData.json'
import StudentRev from '../Review/StudentRev'

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
        document.getElementById("review").style.display="none"
        document.getElementById("link1").style.borderBottom="2px solid #027dff"
        document.getElementById("link2").style.borderBottom="2px solid transparent"
        document.getElementById("link3").style.borderBottom="2px solid transparent"
        document.getElementById("link1").style.color="#027dff"
        document.getElementById("link2").style.color="#41454f"
        document.getElementById("link3").style.color="#41454f"
    }
    function file(){
        document.getElementById("file").style.display="flex"
        document.getElementById("overview").style.display="none"
        document.getElementById("review").style.display="none"
        document.getElementById("link1").style.borderBottom="2px solid transparent"
        document.getElementById("link2").style.borderBottom="2px solid #027dff"
        document.getElementById("link3").style.borderBottom="2px solid transparent"
        document.getElementById("link1").style.color="#41454f"
        document.getElementById("link2").style.color="#027dff"
        document.getElementById("link3").style.color="#41454f"
    }
    function reviews(){
        document.getElementById("file").style.display="none"
        document.getElementById("overview").style.display="none"
        document.getElementById("review").style.display="flex"
        document.getElementById("link1").style.borderBottom="2px solid transparent"
        document.getElementById("link2").style.borderBottom="2px solid transparent"
        document.getElementById("link3").style.borderBottom="2px solid #027dff"
        document.getElementById("link1").style.color="#41454f"
        document.getElementById("link2").style.color="#41454f"
        document.getElementById("link3").style.color="#027dff"
    }


    let [review, refunc] = React.useState('')
    let [rating, rafunc] = React.useState('')
    const handlereview = async (e) =>{
        e.preventDefault()
        let result2 = await fetch('https://mysterious-waters-58153.herokuapp.com/api/v1/course/6329e50c075b1dc8aef4fb85/reviews', 
         {
            method:'post',
            body:JSON.stringify({review, rating}),
            headers:{
                'content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            
        })
        result2 = await result2.json()
        console.warn(result2)
        console.log(result2)
    }

    if( rating > 5 ){
        rating = 5
    }else if(rating < 0){
        rating = 0
    }

    const rev = ReviewData.map((item) => {
        return(
            <StudentRev 
                course={item.course}
                name={item.name}
                time={item.time}
                review={item.review}
            />
        )
    }) 

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
                            <li id='link3' onClick={reviews}>Drop Review</li>
                        </ul>
                        <div className="course-content">
                            <div className="control">
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                            <div className="overview" id='overview'>
                                <h2>About Lesson</h2>
                            </div>
                            <div className="file" id='file'>
                                <h2>Exercise Files</h2>
                            </div>
                            <div className="review" id='review'>
                                <h2>Your Experience</h2>
                                <form onSubmit={handlereview} action="">
                                    <textarea value={review} onChange={(e) => refunc(e.target.value)} rows="10" placeholder="Let's know your experience about the course here..."></textarea>
                                    <span></span>
                                    <input type="number" value={rating} onChange={(e) => rafunc(e.target.value)} id="star" placeholder='rate 0 - 5' />
                                    <input type="submit" />
                                </form>
                                <div className="comments">
                                    {rev}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Class;