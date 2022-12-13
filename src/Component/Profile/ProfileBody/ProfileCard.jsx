import React, { useEffect } from 'react'
import img2 from "./img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png";
import ClassesData from "../../Courses/Data/ClassesData.json";
import './ProfileCard.css'

const ProfileCard = ({courseTit,publisherName,data}) => {

    let star = "";
  
    for (let i = 0; i < ClassesData.length; i++) {
      star = ClassesData[5].star;
    }

    console.log(data)




    let [enCourse, enCoursefunc] = React.useState([]);
    // let courseTit = enCourse.courseTitle
    // let publisherName = enCourse.publisherName
    const handlecourse = async () => {
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    let result = await fetch(
      `https://golearn.onrender.com/api/v1/course/${data.courseId}`,
      config,
      {
        method: "get",
        credencials: "include",
      }
    );
    result = await result.json();
    console.warn(result.data);
    console.log(result.data);
    enCoursefunc(
      result.data
    )
  };
  console.log(enCourse)

  useEffect(() => {
    handlecourse()
  }, [])

  return (
    <div className="course">
        <div className="img-div">
            <img src={img2} alt="" />
        </div>
        <div className="text-div">
            <span>{star}</span>
            <h3>{courseTit || enCourse.courseTitle}</h3>
            <p>
            Completed Lessons: <span> 0 of 6 lesson</span>
            </p>
            <div className="progress-div">
            <span>Complete 20%{publisherName || enCourse.publisherName}</span>
            <div className="bar">
                <div className="progress"></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
