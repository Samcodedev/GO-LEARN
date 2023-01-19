import React from "react";
// import { Link } from 'react-router-dom';
import "./courseCard.css";
// import { FiBookmark } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseCard = (props) => {

  let [pup, pupfunc] = React.useState(true);

  function pupF() {
    pupfunc(!pup);
  }
  // console.log(props.data);

  

  let deleteCourse = async () => {
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    let result = await fetch(
      `https://golearn.up.railway.app/api/v1/course/${props.id}`,
      config,
      {
        credentials: "include",
        method: 'DELETE',
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);
  };


  // function setDele(){
  //    delFunc(
  //     props.id
  //    )
  // }
  return (
    <div className="cardContainer">
      <div className="cardContainer__topArea">
        <div className="thumbnail">
          <img
            src="https://go-learn.online/wp-content/uploads/2021/04/pexels-worldspectrum-844124-1.jpg"
            alt="thumbnail"
          />
        </div>
        <div className="bookmarkBox">
          {/* <FiBookmark /> */}
          {props.icon}
          <ul>
            <li onClick={pupF}>Delete</li>
            <li>Update</li>
          </ul>
        </div>
      </div>
      <div className="cardContainer__details">
        <div className="ratings">
          {/* Ratings */}
          ⭐⭐⭐⭐⭐
          <p>2.64 (11)</p>
        </div>
        <div className="courseInfo">
          <h2>{props.courseTitle}</h2>
          <div className="courseInfo__details">
            <span className="users">
              <HiOutlineUser /> 223
            </span>
            <span className="duration">
              <BsClock /> {props.duration}
            </span>
          </div>
        </div>
        <div className="tutorInfo">
          <div className="tutorInfo__image">
            <img src="https://go-learn.online/wp-content/uploads/2021/05/golearn-walter-150x150.jpg" alt="" />
          </div>
          <span>By {props.publisher}</span>
        </div>
      </div>
      <div className="bottom">
        <Link to="/DecFinance" state={{ id: props.data }}>
          <button className="btn">Enroll Course</button>
        </Link>
      </div>


      {/* -- pup up box -- */}
      <div
        className="pup-up"
        id="pupUp"
        style={{ display: pup ? "none" : "flex" }}
      >
        <div className="pup-box">
          <h4>
            You're about to delete the following course click CONFIRM to
            delete and CANCEL to abort.
          </h4>
          <div className="button">
            <button onClick={deleteCourse}>Confirm</button>
            <button onClick={pupF}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
