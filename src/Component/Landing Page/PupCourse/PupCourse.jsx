import React from "react";
import "./PupCourse.css";
import Card from "./Card.jsx";
// import ClassesData from '../../Courses/Data/ClassesData'
import { Link } from "react-router-dom";

const PupCourse = ({landingCourses}) => {

  return (
    <div className="pupcourse">
      <div className="sub-pupcourse">
        <div className="pupcourse-top-text">
          <span>Learn At Your Own Pace</span>
          <h2>Go-Learn Popular Courses</h2>
          <p>
            Explore all our courses and choose the one suitable to your goals
            and start learning with us. We assure you that you will never regret
            it.
          </p>
        </div>
        <div className="wrapper">
          <Card
            data={landingCourses[2]}
          />
          <Card
            data={landingCourses[3]}
          />
          <Card
            data={landingCourses[4]}
          />
        </div>
        <div className="pupcourse-bottom-text">
          <p>
            Enjoy top notch learning methods and achieve next level skills. You
            are the creator of your own career and we will guide you through it.
            <Link to="/register">Register Free Now!</Link>{" "}
          </p>
          <Link to="/Courses">
            <button>VIEW MORE COURSES</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PupCourse;
