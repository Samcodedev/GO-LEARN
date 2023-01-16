import React from "react";
import "./Head.css";
import { Link } from "react-router-dom";
import Course from "../.././Courses";
import { BsPerson } from "react-icons/bs";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";

const Head = ({ landingCourses }) => {
  const [tokenAvailability, setTokenAvailability] = useState(false);

  const data = [
    {
      title: "Cryptocurrency Trading Course",
      star: "**********",
    },
  ];

  data.map((item) => {
    return <Course title={item.title} star={item.star} />;
  });

  // console.log("landingCourses: ", landingCourses);

  const course = JSON.parse(localStorage.getItem("courses"));

  const fashionCourses = course.filter(word => word.category === "Forex" || word.category === "Finance");

  console.log('fashionCourses: ', fashionCourses);

  let data1 = fashionCourses[0];
  let data2 = fashionCourses[1];

  // console.log("Data 1: ", data1);
  // console.log("Data 2: ", data2);

  // useeffect hook to get token from localStorage and set token availability 
  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setTokenAvailability(true);
  }, []);

  return (
    <div className="head">
      {/* <div className="sub-head"> */}
      <div className="head-text">
        <h1>Nigeria's foremost Learning and Earning Platform</h1>
        <p>
          At Go-Learn we believe that flexible and easy to access learning
          opportunities can bring a significant change in how individuals prefer
          to learn. Therefore, we offer you the beauty of eLearning.
        </p>
        {tokenAvailability ? (
          <Link to="/courses">
            <button>
              <BsPerson fontSize="20px" /> View Courses
            </button>
          </Link>
        ) : (
          <Link to="/register">
            <button>
              <BsPerson fontSize="20px" /> Join For Free
            </button>
          </Link>
        )}
      </div>
      <div className="head-card">
        <div className="card-wrapper">{data1 && <Card data={data1} hideBottomVisibility={true} />}</div>
        <div className="card-wrapper">{data2 && <Card data={data2} hideBottomVisibility={true} />}</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Head;
