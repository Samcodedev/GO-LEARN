import React from "react";
import "./Head.css";
import { Link } from "react-router-dom";
import Course from "../.././Courses";
import { BsPerson } from "react-icons/bs";
import Card from "./Card";

const Head = ({ landingCourses }) => {
  const data = [
    {
      title: "Cryptocurrency Trading Course",
      star: "**********",
    },
  ];

  data.map((item) => {
    return <Course title={item.title} star={item.star} />;
  });

  console.log("landingCourses: ", landingCourses);

  const course = JSON.parse(localStorage.getItem("courses"));
  let data1 = course[0];
  let data2 = course[1];

  console.log("Data 1: ", data1);
  console.log("Data 2: ", data2);

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
        <Link to="/register">
          <button>
            {" "}
            <BsPerson fontSize="20px" /> Join For Free
          </button>
        </Link>
      </div>
      <div className="head-card">
        <div className="card-wrapper">{data1 && <Card data={data1} />}</div>
        <div className="card-wrapper">{data2 && <Card data={data2} />}</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Head;
