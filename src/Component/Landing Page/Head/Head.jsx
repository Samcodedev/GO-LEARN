import React from "react";
import "./Head.css";
import { Link } from "react-router-dom";
import Course from "../.././Courses";
import { BsPerson } from "react-icons/bs";
import Card from "./Card";

const Head = ({landingCourses}) => {
  const data = [
    {
      title: "Cryptocurrency Trading Course",
      star: "**********",
    },
  ];

  data.map((item) => {
    return <Course title={item.title} star={item.star} />;
  });

  console.log(landingCourses)

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
        <div className="card-wrapper">
          <Card 
            data={landingCourses[0]}
          />
        </div>
        <div className="card-wrapper">
          <Card 
            data={landingCourses[1]}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Head;
