import React from "react";
import "./ProfileBody.css";

import { useEffect } from "react";
import { GiBookmarklet, GiNotebook } from "react-icons/gi";
import { RiBookmark3Fill } from "react-icons/ri";
import { HiUserCircle } from 'react-icons/hi'
import { useState } from "react"
import ProfileCard from "./ProfileCard";
import CourseCard from "../../InstructorProfile/CourseCard/CourseCard";

const ProfileBody = () => {

  // fetching user data and also sending a unique token to the header

  const [det, effunc] = React.useState("");
  const handleLogin = async () => {
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    let result = await fetch(
      "https://golearn.onrender.com/api/v1/auth",
      config,
      {
        method: "get",
        mode: "cors",
        credentials: "include",
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);
    effunc(result.data);
  };




  const [cart, cartfunc] = React.useState([]);
  const handlecart = async () => {
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    let result = await fetch(
      "https://golearn.onrender.com/api/v1/cart",
      config,
      {
        method: "get",
        moded: "cors",
        credencials: "include",
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);
    cartfunc(result.data.course);
  };

  
  
  const carts = cart.map((item)=>{
    return(
      <ProfileCard 
        title={item.courseTitle}
        dta={item.courseId}
        data={item}
      />
    )
  })

  const [instructCourse, instructCourseFunc] = useState([])
  const [instructorError, instructorErrorFunc] = useState([])
  const handleinstructorCourse = async () => {
    let result = await fetch(
      `https://golearn.onrender.com/api/v1/course/publisher/${det._id}`,
      {
        method: "get",
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);

    result.data ? instructCourseFunc(result.data) : instructorErrorFunc(result) 
  };

  const courseCreatedCard = instructCourse.map((item) =>{
    return(
      <CourseCard 
        courseTitle={item.courseTitle}
        publisher={item.publisherName}
        duration={item.courseDuration}
        data={item}
      />
    )
  })


  useEffect(() => {
    handleLogin()
  }, [])

  det.role=== "publisher"? handleinstructorCourse() : console.log("Hello loading");
  
  det.role=== "user"? handlecart() : console.log("publisher");


  console.log(det);

  let [audience, aufunc] = React.useState([]);
  let [category, cafunc] = React.useState("");
  let [courseContent, cofunc] = React.useState([]);
  let [courseDescription, codfunc] = React.useState("");
  let [courseDuration, cdfunc] = React.useState("");
  let [courseTitle, ctfunc] = React.useState("");
  let [materials, mafunc] = React.useState([]);
  let [requirement, refunc] = React.useState([]);
  let [tags, tafunc] = React.useState([]);

  let [whatToLearn, whfunc] = React.useState([]);


  const handleCreateCourse = async (e) => {
    e.preventDefault();
    let result = await fetch(
      "https://golearn.onrender.com/api/v1/course",
      {
        method: "post",
        mode: "cors",
        credencials: "include",
        body: JSON.stringify({
          courseTitle,
          courseDescription,
          courseDuration,
          category,
          whatToLearn,
          requirement,
          audience,
          materials,
        }),
        headers: {
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);

    if (result.success === true) {
      document.getElementById(
        "message"
      ).innerHTML = `You have successfully created ${courseTitle} course.`;
      document.getElementById("message").style.color = "green";
    } else if (result.success === false) {
      document.getElementById("message").innerHTML = `${result.error}`;
      document.getElementById("message").style.color = "red";
    }
  };

  function dashboard() {
    document.getElementById("dashboard").style.display = "flex";
    document.getElementById("profile").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("cart").style.display = "none"
  //   document.getElementById("first").style.backgroundColor = "#007bff";
  //   document.getElementById("first").style.color = "#ffffff";
  //   document.getElementById("second").style.backgroundColor = "transparent";
  //   document.getElementById("sixth").style.backgroundColor = "transparent";
  }

  function profile() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("create").style.display = "none";
    document.getElementById("cart").style.display = "none"
  }

  function create() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("create").style.display = "block";
    document.getElementById("cart").style.display = "none"
  }

  function course(){
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("cart").style.display = "flex"
  }

  const [courseContentInput, setCourseContentInput] = useState([
    {
      visibility: true,
    },
    {
      visibility: false,
    },
    {
      visibility: false,
    },
    {
      visibility: false,
    },
    {
      visibility: false,
    },
  ]);

  function addCourseContent() {
    for (let i = 0; i < courseContentInput.length; i++) {
      if (!courseContentInput[i].visibility) {
        const newCourseContentInput = [...courseContentInput];

        newCourseContentInput[i].visibility = true;

        setCourseContentInput(newCourseContentInput);

        return;
      }
    }
  }



  

  return (
    <div className="profilebody">
      <div className="sub-profilebody">
        <div className="top">
          <div className="alert">
            <span>Your Application is pending as of 10 September, 2022</span>
          </div>
          <div className="profileDetails">
            <div className="img-div">
              <HiUserCircle />
            </div>
            <div className="text-div">
              <h5>Hello,</h5>
              <h3>
                {det.firstName} {det.lastName}
              </h3>
            </div>
          </div>
        </div>

        <div className="dashboard">
          <div className="dashboard-nav">
            <ul>
              <li onClick={dashboard} id="first">
                <span className="span">Dashboard</span>
              </li>
              <li onClick={profile} id="second">
                <span className="span">My Profile</span>
              </li>
              <li onClick={course}>
                <span className="span" >{det.role=== "publisher"? "Course Created" : "Enrolled Courses"  } </span>
              </li>
              <li>
                <span className="span"> {det.role=== "publisher"? "Create Blog" : "Reviews" } </span>
              </li>
              <li onClick={create} style={{display: det.role=== "publisher"? "block" : "none"  }}>
                <span className="span">Create Course</span>
              </li>
              <li>
                <span className="span">Settings</span>
              </li>
              <li>
                <span className="span">Logout</span>
              </li>
            </ul>
          </div>
          <div className="dashboard-main" id="dashboard">
            <div className="upload">
              <div className="alert">
                <span>Set Your Profile Photo</span>
              </div>
              <button>Click Here</button>
            </div>
            <h4>Dashboard</h4>
            <div className="properties">
              <div className="box">
                <div className="img-div">
                  <GiBookmarklet fontSize="55px" color="#027dff" />
                </div>
                <div className="text-div">
                  <h1>{det.role=== "publisher"? instructCourse.length : cart.length }</h1>
                <p> {det.role=== "publisher"? "Created Course" : "Enrolled Courses" } </p>
                </div>
              </div>
              <div className="box">
                <div className="img-div">
                  <GiNotebook fontSize="55px" color="#027dff" />
                </div>
                <div className="text-div">
                  <h1>{cart.length}</h1>
                  <p> {det.role=== "publisher"? "Created Blogs" : "Active Courses" }</p>
                </div>
              </div>
              <div className="box">
                <div className="img-div">
                  <RiBookmark3Fill fontSize="55px" color="#027dff" />
                </div>
                <div className="text-div">
                  <h1>0</h1>
                  <p>Completed Courses</p>
                </div>
              </div>
            </div>
            <h4>In Progress Courses</h4>
            {carts}
          </div>
          <div className="profile" id="profile">
            <div className="data">
              <h2>Profile</h2>
              <ul>
                <li>Registered Date</li>
                <li>{det.createdAt}</li>
              </ul>
              <ul>
                <li>First Name</li>
                <li>{det.firstName}</li>
              </ul>
              <ul>
                <li>LastName</li>
                <li>{det.lastName}</li>
              </ul>
              <ul>
                <li>UserName</li>
                <li>{det.userName}</li>
              </ul>
              <ul>
                <li>Email</li>
                <li>{det.email}</li>
              </ul>
              <ul>
                <li>Phone Number</li>
                <li>+234 9067925333</li>
              </ul>
              <ul>
                <li>id</li>
                <li>{det._id}</li>
              </ul>
              <ul>
                <li>Role</li>
                <li>{det.role}</li>
              </ul>
            </div>
          </div>
          <div className="create-course" id="create">
            <h2>Create Course</h2>
            <form onSubmit={handleCreateCourse} action="">
              <label>Course Title</label>
              <input
                type="text"
                value={courseTitle}
                onChange={(e) => ctfunc(e.target.value)}
              />

              <label>Course Description</label>
              <input
                type="text"
                value={courseDescription}
                onChange={(e) => codfunc(e.target.value)}
              />

              <label>Course Duration</label>
              <input
                type="text"
                value={courseDuration}
                onChange={(e) => cdfunc(e.target.value)}
              />

              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => cafunc(e.target.value)}
              />

              <label>Course Content</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {courseContentInput.map((eachContent, index) => (
                    <div key={index}>
                      {courseContentInput[index].visibility && (
                        <input
                          type="text"
                          value={courseContent}
                          onChange={(e) => cofunc(e.target.value)}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {courseContentInput[0].visibility && (
                  <span onClick={addCourseContent}>Add</span>
                )}
              </div>
              {/* <div className="array-input">
                {courseContentInput[1].visibility && (
                  <input
                    type="text"
                    value={courseContent}
                    onChange={(e) => cofunc(e.target.value)}
                  />
                )}
              </div>
              <div className="array-input">
                {courseContentInput[2].visibility && (
                  <input
                    type="text"
                    value={courseContent}
                    onChange={(e) => cofunc(e.target.value)}
                  />
                )}
              </div>
              <div className="array-input">
                {courseContentInput[3].visibility && (
                  <input
                    type="text"
                    value={courseContent}
                    onChange={(e) => cofunc(e.target.value)}
                  />
                )}
              </div>
              <div className="array-input">
                {courseContentInput[4].visibility && (
                  <input
                    type="text"
                    value={courseContent}
                    onChange={(e) => cofunc(e.target.value)}
                  />
                )}
              </div> */}

              <label>What To Learn</label>
              <div className="array-input">
                <input
                  type="text"
                  value={whatToLearn}
                  onChange={(e) => whfunc(e.target.value)}
                />
                <span>Add</span>
              </div>

              <label>Requirement</label>
              <div className="array-input">
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => refunc(e.target.value)}
                />
                <span>Add</span>
              </div>

              <label>Audience</label>
              <div className="array-input">
                <input
                  type="text"
                  value={audience}
                  onChange={(e) => aufunc(e.target.value)}
                />
                <span>Add</span>
              </div>

              <label>Materials</label>
              <div className="array-input">
                <input
                  type="text"
                  value={materials}
                  onChange={(e) => mafunc(e.target.value)}
                />
                <span>Add</span>
              </div>

              <label>Tags</label>
              <div className="array-input">
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => tafunc(e.target.value)}
                />
                <span>Add</span>
              </div>

              <span id="message"></span>
              <input type="submit" value="Create" className="submit" />
            </form>
          </div>
          <div className="cart" id="cart" style={{justifyContent: instructorError? "center": "space-between", alignItems: instructorError? "center": "flex-start" }} >
            {det.role=== "publisher"? courseCreatedCard : carts } 
            <h4 style={{textAlign: "center", marginBlockEnd: 0, height: "fit-content"}}>{instructorError.error}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
