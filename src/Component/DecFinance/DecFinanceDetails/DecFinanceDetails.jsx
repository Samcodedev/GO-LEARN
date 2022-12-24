import React, {useEffect} from "react";
import "./DecFinanceDetails.css";
import img from "./img/360_F_392755534_r5mtZvJFFJk5JCi9aUpMojIvpnt98Lfq.png";
import profile from "./img/Group 1.png";
import ClassesData from "../../Courses/Data/ClassesData.json";
import Module from "../../Class/Card/Module";
import ModuleData from "../../Class/Card/ModuleData.json";
// import ReviewData from '../../Review/data/ReviewData.json'
import { Link } from "react-router-dom";
import StudentRev from "../../Review/StudentRev";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import moment from "moment";

const DecFinanceDetails = (props) => {
  let experience = [];
  // let name = []
  let members = [];
  // let duration = []
  let mate_1 = [];
  let mate_2 = [];
  let mate_3 = [];
  let mate_4 = [];
  let Requirement = [];
  let tag_1 = [];
  let tag_2 = [];
  let tag_3 = [];

  for (let i = 0; i < ClassesData.length; i++) {
    experience = ClassesData[5].details.experience;
    //     name = ClassesData[5].author.name
    members = ClassesData[5].details.members;
    //     duration = ClassesData[5].details.duration
    mate_1 = ClassesData[5].materials.mate_1;
    mate_2 = ClassesData[5].materials.mate_2;
    mate_3 = ClassesData[5].materials.mate_3;
    mate_4 = ClassesData[5].materials.mate_4;
    Requirement = ClassesData[5].requirement;
    tag_1 = ClassesData[5].tags.tag1;
    tag_2 = ClassesData[5].tags.tag2;
    tag_3 = ClassesData[5].tags.tag3;
  }

  function info() {
    document.getElementById("info").style.display = "flex";
    document.getElementById("review").style.display = "none";
    document.getElementById("inf").style.borderBottom = "2.5px solid #027dff";
    document.getElementById("rev").style.borderBottom =
      "2.5px solid transparent";
  }

  function review() {
    document.getElementById("info").style.display = "none";
    document.getElementById("review").style.display = "block";
    document.getElementById("inf").style.borderBottom =
      "2.5px solid transparent";
    document.getElementById("rev").style.borderBottom = "2.5px solid #027dff";
  }

  const mode = ModuleData.map((item) => {
    return <Module module={item.module} time={item.time} title={item.title} />;
  });
  let data = props.data;
  console.log(data);

  const courseId = data._id;
  const handleCart = async (e) => {
    e.preventDefault();
    let result = await fetch("https://golearn.onrender.com/api/v1/cart", {
      method: "post",
      credencials: "include",
      body: JSON.stringify({
        courseId,
      }),
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    result = await result.json();
    console.warn(result);
    console.log(result);
  };

  let [revew, refunc] = useState([]);
  const handlereview = async () => {
    let result = await fetch(
      `https://golearn.onrender.com/api/v1/course/${data._id}/reviews`,
      {
        method: "get",
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);

    refunc(result.data);
  };
  console.log(revew);
  let stars = [];

  revew.map((item) => {
    return stars.push(item.rating);
  });
  console.log(stars);

  let starSum = stars.reduce((add, value) => {
    return add + value;
  }, 0);

  let starSumValues = ((starSum / (stars.length * 5)) * 100).toFixed(1);
  let starSumValue;

  if (starSumValues > 0) {
    starSumValue = starSumValues;
  } else {
    starSumValue = 0;
  }
  // console.log(starSumValue)

  let count5 = 0;
  let count4 = 0;
  let count3 = 0;
  let count2 = 0;
  let count1 = 0;
  stars.forEach((Element) => {
    if (Element === 5) {
      count5 += 1;
    } else if (Element === 4) {
      count4 += 1;
    } else if (Element === 3) {
      count3 += 1;
    } else if (Element === 2) {
      count2 += 1;
    } else if (Element === 1) {
      count1 += 1;
    }
  });

  let bar5 = (count5 / (count5 + 1)) * 100;
  let bar4 = (count4 / (count4 + 1)) * 100;
  let bar3 = (count3 / (count3 + 1)) * 100;
  let bar2 = (count2 / (count2 + 1)) * 100;
  let bar1 = (count1 / (count1 + 1)) * 100;
  console.log(bar5);

  useEffect(() => {
    handlereview();
  }, []);

  const stu = revew.map((item) => {
    return (
      <StudentRev
        key={item._id}
        name={item._id}
        time={item.createdAt}
        review={item.review}
        star={item.rating}
      />
    );
  });

  return (
    <div className="DecFinanceDetails">
      <div className="sub-DecFinanceDetails">
        <div className="main-detail">
          <div className="img-div">
            <img src={img} alt="" />
          </div>
          <nav>
            <li id="inf" onClick={info}>
              Course Info
            </li>
            <li id="rev" onClick={review}>
              Reviews
            </li>
          </nav>
          <div className="course-info" id="info">
            <div className="about">
              <h2>About Course</h2>
              <h3>Course Description</h3>
              <p>{data.courseDescription}</p>
              <h3>Who This Course is for</h3>
              <p>
                Anyone with a basic understanding of cryptocurrencies can take
                this course.
              </p>
              <p>
                Interested students also need to possess familiarity with
                cryptocurrency wallets and cyber security best practices
              </p>
            </div>
            <div className="gain">
              <h3>What Will You Learn?</h3>
              <ul>
                <li>
                  At the end of this course you will have been taught the
                  following:
                </li>
                <li>What DeFi is at a fundamental level</li>
                <li>What DeFi is at a fundamental level</li>
                <li>How to set up a Binance wallet</li>
                <li>
                  How to use the safest and most popular DeFi tools and services
                  for earning profit in this exciting new space!
                </li>
              </ul>
            </div>
            <div className="course-content">
              <h3>Course Content</h3>
              <div className="tutor-according">{mode}</div>
            </div>
          </div>
          <div className="reviews" id="review">
            <h3>Student Ratings & Reviews</h3>
            <div className="chat">
              <div className="total-rating">
                <h1>{starSumValue}</h1>
                <span>
                  <FaStar fill="rgb(226, 194, 12)" />
                  <FaStar fill="rgb(226, 194, 12)" />
                  <FaStar fill="rgb(226, 194, 12)" />
                  <FaStar fill="rgb(226, 194, 12)" />
                  <FaStar fill="rgb(226, 194, 12)" />
                </span>
                <p>Total 5 Ratings</p>
              </div>
              <div className="rating-bar">
                <div className="column">
                  <div className="star">
                    <span>
                      <FaStar fill="rgb(226, 194, 12)" />
                    </span>
                    <p>5</p>
                  </div>
                  <div className="bar">
                    <div className="prog" style={{ width: bar5 }}></div>
                  </div>
                  <div className="rate">
                    <p>{count5} Rating</p>
                  </div>
                </div>
                <div className="column">
                  <div className="star">
                    <span>
                      <FaStar fill="rgb(226, 194, 12)" />
                    </span>
                    <p>4</p>
                  </div>
                  <div className="bar">
                    <div className="prog" style={{ width: bar4 }}></div>
                  </div>
                  <div className="rate">
                    <p>{count4} Rating</p>
                  </div>
                </div>
                <div className="column">
                  <div className="star">
                    <span>
                      <FaStar fill="rgb(226, 194, 12)" />
                    </span>
                    <p>3</p>
                  </div>
                  <div className="bar">
                    <div className="prog" style={{ width: bar3 }}></div>
                  </div>
                  <div className="rate">
                    <p>{count3} Rating</p>
                  </div>
                </div>
                <div className="column">
                  <div className="star">
                    <span>
                      <FaStar fill="rgb(226, 194, 12)" />
                    </span>
                    <p>2</p>
                  </div>
                  <div className="bar">
                    <div className="prog" style={{ width: bar2 }}></div>
                  </div>
                  <div className="rate">
                    <p>{count2} Rating</p>
                  </div>
                </div>
                <div className="column">
                  <div className="star">
                    <span>
                      <FaStar fill="rgb(226, 194, 12)" />
                    </span>
                    <p>1</p>
                  </div>
                  <div className="bar">
                    <div className="prog" style={{ width: bar1 }}></div>
                  </div>
                  <div className="rate">
                    <p>{count1} Rating</p>
                  </div>
                </div>
              </div>
            </div>
            {stu}
          </div>
        </div>
        <div className="sub-detail">
          <div className="free">
            <div className="free-head">
              <span onClick={handleCart}>Free</span>
              <Link to="/class" state={{ id: data }}>
                <button>Enroll Now</button>
              </Link>
              <p>Free access this course</p>
            </div>
            <div className="free-footer">
              <ul>
                <li>
                  <span>Intermediate</span>
                </li>
                <li>
                  <span>{members} Total Enrolled</span>
                </li>
                <li>
                  <span> Duration: {data.courseDuration}</span>
                </li>
                <li>
                  <span>{moment(data.updatedAt).format("DD MMM YYYY, h:mm A")} Last Updated</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="course-detail">
            <div className="course-top">
              <h3>A course by</h3>
              <div className="profile">
                <img src={profile} alt="" />
                <div className="content">
                  <Link to="/construction">{data.publisherName}</Link>
                  <span>{experience}</span>
                </div>
              </div>
            </div>
            <div className="course-footer">
              <div className="first">
                <h3>Material Includes</h3>
                <ul>
                  <li>{mate_1}</li>
                  <li>{mate_2}</li>
                  <li>{mate_3}</li>
                  <li>{mate_4}</li>
                </ul>
              </div>
              <div className="first">
                <h3>Requirements</h3>
                <ul>
                  <li>{Requirement}</li>
                </ul>
              </div>
              <div className="first">
                <h3>Tags</h3>
                <div className="tags">
                  <button> {tag_1} </button>
                  <button> {tag_2} </button>
                  <button> {tag_3} </button>
                </div>
              </div>
              <div className="first">
                <h3>Audience</h3>
                <ul>
                  <li>
                    Get your team access to top GoLearn courses anytime,
                    anywhere.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecFinanceDetails;
