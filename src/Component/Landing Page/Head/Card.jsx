import React from "react";
import { Link } from "react-router-dom";
import { BiBookAlt } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import prof from "./img/Group 1.png";

const Card = ({data, hideBottomVisibility}) => {
//   console.log("Card props: ", props);
  // console.log(props.data)
//   let hideBottomVisibility = props.hideBottomVisibility;
//   let course = props.data;
  let course = data;
//   console.log("Course: ", props.data);
  return (
    <div className="card">
      <div className="card-img">
        <img 
        // src={forex} 
        src={`${data.courseImage ? `${data.courseImage}` : '/logo.png'}`}
        alt="" />
      </div>
      <div className="cont">
        <div className="card-prof">
          <img src={prof} alt="" />
          <span>
            <Link to="/instructor">{course.publisherName}</Link>
          </span>
        </div>
        <div className="card-content">
          <h1>
            <Link to="/DecFinance" state={{ id: course }}>
              {course.courseTitle}
            </Link>
          </h1>
          <p>{course.courseDescription}</p>
        </div>
        {!hideBottomVisibility && <div className="card-bottom">
          <ul>
            <li>
              <Link to="">
                {" "}
                <BiBookAlt fontSize="20px" color="#007bff" /> Lesson 9
              </Link>
            </li>
            <li>
              <Link to="">
                {" "}
                <HiUserGroup fontSize="20px" color="#007bff" /> Students 288
              </Link>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default Card;
