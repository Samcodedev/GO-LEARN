import React from 'react'
import img2 from "./img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png";
import ClassesData from "../../Courses/Data/ClassesData.json";

const ProfileCard = (props) => {

    let star = "";
  
    for (let i = 0; i < ClassesData.length; i++) {
      star = ClassesData[5].star;
    }

  return (
    <div className="course">
        <div className="img-div">
            <img src={img2} alt="" />
        </div>
        <div className="text-div">
            <span>{star}</span>
            <h3>{props.title}</h3>
            <p>
            Completed Lessons: <span> 0 of 6 lesson</span>
            </p>
            <div className="progress-div">
            <span>Complete 20%{props.dta}</span>
            <div className="bar">
                <div className="progress"></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
