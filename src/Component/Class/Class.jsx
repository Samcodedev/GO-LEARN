import React from "react";
import "./Class.css";
import Module from "./Card/Module";
import ModuleData from "./Card/ModuleData.json";
// import ReviewData from '../Review/data/ReviewData.json'
import StudentRev from "../Review/StudentRev";
import { useLocation, useParams } from "react-router-dom";
import MemoryKeys from "../models/MemoryKeys";
import { useState } from "react";
import { useEffect } from "react";

const Class = () => {
  const { id } = useParams();
  // const location = useLocation();
  let selectedCourseId = id;
  let courseDataId = localStorage.getItem(MemoryKeys.SelectedCourseId);
  const [courseData, setCourseData] = useState();

  /**
   * Function to get course data
   */
  const handleGetCourseInfo = async () => {
    let result = await fetch(
      `https://golearn.up.railway.app/api/v1/course/${selectedCourseId}`,
      {
        method: "get",
      }
    );
    result = await result.json();
    console.log("Selected course info: ", result);
    setCourseData(result.data);
  };

  useEffect(() => {
    if (!courseData) {
      handleGetCourseInfo();
    }
  }, [courseData]);

  useEffect(() => {}, [courseDataId]);

  // videos nesting function
  let videoData = [
    "https://www.youtube.com/embed/LRjvSfu0Q1U",
    "https://www.youtube.com/embed/BnJ2VW4-DiA",
    "https://www.youtube.com/embed/xDBW8qWPkdc",
    "https://www.youtube.com/embed/qXCmc_wVA1o",
    "https://www.youtube.com/embed/RrnSHm6Lh4c",
    "https://www.youtube.com/embed/gTtGWH8EJfA",
  ];

  const [nextForward, nextForwardFunc] = React.useState(0);
  function next() {
    nextForwardFunc(nextForward + (nextForward <= 4 ? 1 : 0));
    // alert(nextForward)
  }

  function backward() {
    nextForwardFunc(nextForward - (nextForward >= 1 ? 1 : 0));
    // alert(nextForward)
  }

  // console.log("total length", videoData.length);

  const mode = ModuleData.map((item) => {
    return <Module module={item.module} title={item.title} time={item.time} />;
  });

  function overview() {
    document.getElementById("overview").style.display = "flex";
    document.getElementById("file").style.display = "none";
    document.getElementById("review").style.display = "none";
    document.getElementById("link1").style.borderBottom = "2px solid #027dff";
    document.getElementById("link2").style.borderBottom =
      "2px solid transparent";
    document.getElementById("link3").style.borderBottom =
      "2px solid transparent";
    document.getElementById("link1").style.color = "#027dff";
    document.getElementById("link2").style.color = "#41454f";
    document.getElementById("link3").style.color = "#41454f";
  }
  function file() {
    document.getElementById("file").style.display = "flex";
    document.getElementById("overview").style.display = "none";
    document.getElementById("review").style.display = "none";
    document.getElementById("link1").style.borderBottom =
      "2px solid transparent";
    document.getElementById("link2").style.borderBottom = "2px solid #027dff";
    document.getElementById("link3").style.borderBottom =
      "2px solid transparent";
    document.getElementById("link1").style.color = "#41454f";
    document.getElementById("link2").style.color = "#027dff";
    document.getElementById("link3").style.color = "#41454f";
  }
  function reviews() {
    document.getElementById("file").style.display = "none";
    document.getElementById("overview").style.display = "none";
    document.getElementById("review").style.display = "flex";
    document.getElementById("link1").style.borderBottom =
      "2px solid transparent";
    document.getElementById("link2").style.borderBottom =
      "2px solid transparent";
    document.getElementById("link3").style.borderBottom = "2px solid #027dff";
    document.getElementById("link1").style.color = "#41454f";
    document.getElementById("link2").style.color = "#41454f";
    document.getElementById("link3").style.color = "#027dff";
  }

  const [revew, refunct] = React.useState([]);
  const handlerev = async () => {
    let result = await fetch(
      `https://golearn.up.railway.app/api/v1/course/${selectedCourseId}/reviews`,
      {
        method: "get",
      }
    );
    result = await result.json();
    // console.log(result)

    refunct(result.data);
  };
  // console.log(revew)
  // handlerev();

  let [pup, pupf] = React.useState("");
  let [review, refunc] = React.useState("");
  let [rating, rafunc] = React.useState("");

  const handlereview = async (e) => {
    e.preventDefault();
    let result2 = await fetch(
      `https://golearn.up.railway.app/api/v1/course/${selectedCourseId}/reviews`,
      {
        method: "post",
        body: JSON.stringify({ review, rating }),
        headers: {
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem(MemoryKeys.UserToken),
        },
      }
    );
    result2 = await result2.json();
    console.warn(result2);
    console.log(result2);

    if (result2.success === true) {
      pupf(
        "You just created a review " +
          result2.data.review +
          " rated " +
          result2.data.raing || result2.error
      );
    } else {
      pupf(result2.error);
    }

    handlerev();
  };

  useEffect(() => {
    if (!revew) {
      handlerev();
    }
  }, [revew]);

  if (rating > 5) {
    rating = 5;
  } else if (rating < 0) {
    rating = 0;
  }

  const rev = revew.map((item) => {
    return (
      <StudentRev
        key={item._id}
        name={item.userName}
        time={item.createdAt}
        review={item.review}
        star={item.rating}
      />
    );
  });

  const materialsList = courseData?.materials.map((item) => {
    return (
      <a href={item} target="_blank" rel="noreferrer">
        {item}
      </a>
    );
  });

  const courseId = selectedCourseId;

  const handleCart = async (e) => {
    e.preventDefault();
    let result = await fetch("`https://golearn.up.railway.app/api/v1/cart", {
      method: "post",
      credencials: "include",
      body: JSON.stringify({
        courseId,
      }),
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem(MemoryKeys.UserToken),
      },
    });
    result = await result.json();
    console.warn(result);
    console.log(result);
  };

  return (
    <div className="class">
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
              <p>{courseData?.courseTitle}</p>
            </div>
            <div className="second">
              {/* <span>Your Progress: 0 of 11 (0%)</span> */}
              <button onClick={handleCart}>Add to profile</button>
            </div>
          </div>
          <iframe
            src={videoData[nextForward]}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="course-details">
            <ul>
              <li id="link1" onClick={overview}>
                Overview
              </li>
              <li id="link2" onClick={file}>
                Exercise Files
              </li>
              <li id="link3" onClick={reviews}>
                Drop Review
              </li>
            </ul>
            <div className="course-content">
              <div className="control">
                <button onClick={backward}>Previous</button>
                <button onClick={next}>Next</button>
              </div>
              <div className="overview" id="overview">
                <h2>About Lesson</h2>
                <p>{courseData?.courseDescription}</p>
              </div>
              <div className="file" id="file">
                <h2>Exercise Files</h2>
                {materialsList}
              </div>
              <div className="review" id="review">
                <h2>Your Experience</h2>
                <form onSubmit={handlereview} action="">
                  <textarea
                    value={review}
                    onChange={(e) => refunc(e.target.value)}
                    rows="10"
                    placeholder="Let's know your experience about the course here..."
                  ></textarea>
                  <span id="err">{pup}</span>
                  <input
                    type="number"
                    value={rating}
                    onChange={(e) => rafunc(e.target.value)}
                    id="star"
                    placeholder="rate 0 - 5"
                  />
                  <input type="submit" />
                </form>
                <div className="comments">{rev}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
