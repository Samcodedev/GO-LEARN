import React from "react";
import "./ProfileBody.css";
import img from "./img/Group 1.png";

import { useEffect } from "react";
import { GiBookmarklet, GiNotebook } from "react-icons/gi";
import { RiBookmark3Fill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import CourseCard from "../../InstructorProfile/CourseCard/CourseCard";

const ProfileBody = ({ setLoginStatus }) => {
  let [savedCourses, setSavedCourses] = React.useState([]);

  const fetchCourses = async () => {
    let result = await fetch("https://golearn.up.railway.app/api/v1/course", {
      method: "get",
      mode: "cors",
      credencials: "include",
    });
    result = await result.json();

    const data = result.data;

    setSavedCourses(data);

    localStorage.setItem("courses", JSON.stringify(data));

    // console.log("RESULT: ", data);
  };

  const savedCoursesArray = savedCourses;
  if (savedCoursesArray && savedCoursesArray !== []) {
    localStorage.setItem("courses", JSON.stringify(savedCoursesArray));
  }

  useEffect(() => {
    fetchCourses();
  }, []);

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
      "https://golearn.up.railway.app/api/v1/auth",
      config,
      {
        method: "get",
        credencials: "include",
      }
    );
    result = await result.json();
    // console.warn(result);
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
      "https://golearn.up.railway.app/api/v1/cart",
      config,
      {
        method: "get",
        credencials: "include",
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);
    cartfunc(result.data.course);
  };

  const carts = cart.map((item) => {
    return (
      <ProfileCard title={item.courseTitle} dta={item.courseId} data={item} />
    );
  });

  let [pup, pupfunc] = React.useState(true);

  function pupF() {
    pupfunc(!pup);
  }

  const [instructCourse, instructCourseFunc] = useState([]);
  const [instructorError, instructorErrorFunc] = useState([]);
  const handleinstructorCourse = async () => {
    let result = await fetch(
      `https://golearn.up.railway.app/api/v1/course/publisher/${det._id}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    result = await result.json();
    // console.warn(result);
    // console.log(result);

    result.data ? instructCourseFunc(result.data) : instructorErrorFunc(result);
  };

  const courseCreatedCard = instructCourse.map((item) => {
    return (
      <CourseCard
        id={item._id}
        courseTitle={item.courseTitle}
        publisher={item.publisherName}
        duration={item.courseDuration}
        icon={<SlOptionsVertical />}
        data={item}
        del={pupF}
      />
    );
  });

  useEffect(() => {
    handleLogin();
  }, []);

  det.role === "publisher" && handleinstructorCourse();
    // : console.log("Hello loading");
  det.role === "user" && handlecart()
  //  : console.log("publisher");

  // console.log(det);

  let [courseTitle, ctfunc] = React.useState("");
  let [courseDescription, codfunc] = React.useState("");
  let [courseDuration, cdfunc] = React.useState("");
  let [category, cafunc] = React.useState("");
  let [whatToLearn, whfunc] = React.useState([]);
  let [requirement, refunc] = React.useState([]);
  let [audience, aufunc] = React.useState([]);
  let [materials, mafunc] = React.useState([]);

  let [courseContent, cofunc] = React.useState([]);
  let [tags, tafunc] = React.useState([]);

  // // alert(audience)

  // let audienceSt = []
  // let [courseContentSt, ccfunc] = React.useState([])
  // let [materialsSt, mfunc] = React.useState([])
  // let [requirementSt, rfunc] = React.useState([])
  // let [tagsSt, tfunc] = React.useState([])
  // let [whatToLearnSt, wlfunc] = React.useState([])

  // function audi(){
  //     // stafunc(() => JSON.stringify(audienceSt))
  //     audienceSt.push("samuel")
  //     console.log(audienceSt)
  // }
  // function cour(){
  //     courseContent.push(courseContentSt)
  //     console.log(audience)
  // }
  // function mate(){
  //     materials.push(materialsSt)
  // }
  // function requ(){
  //     requirement.push(requirementSt)
  // }
  // function tage(){
  //     tags.push(tagsSt)
  // }
  // function what(){
  //     whatToLearn.push(whatToLearnSt)
  // }

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    const courseContentValues = Object.values(courseContent);
    const whatToLearnValues = Object.values(whatToLearn);
    const requirementValues = Object.values(requirement);
    const audienceValues = Object.values(audience);

    console.log("Form inputs: ", {
      courseTitle,
      courseDescription,
      courseDuration,
      category,
      whatToLearn,
      requirement,
      audience,
      materials,

      courseContent,
      courseContentValues,
      whatToLearnValues,
      requirementValues,
      audienceValues,
    });

    let result = await fetch("https://golearn.up.railway.app/api/v1/course", {
      method: "post",
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
    });
    result = await result.json();
    console.warn(result);
    console.log(result);

    if (result.success === true) {
      document.getElementById(
        "message"
      ).innerHTML = `You have successfully created ${courseTitle} course.`;
      document.getElementById("message").style.color = "green";
    } else if (result.success === false) {
      document.getElementById(
        "message"
      ).innerHTML = `An error occured, please fill in all fields, and try again.`;
      document.getElementById("message").style.color = "red";
    }
  };

  function dashboard() {
    document.getElementById("dashboard").style.display = "flex";
    document.getElementById("profile").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("cart").style.display = "none";
    //   document.getElementById("first").style.backgroundColor = "#007bff";
    //   document.getElementById("first").style.color = "#ffffff";
    //   document.getElementById("second").style.backgroundColor = "transparent";
    //   document.getElementById("sixth").style.backgroundColor = "transparent";
  }

  function profile() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("create").style.display = "none";
    document.getElementById("cart").style.display = "none";
  }

  function create() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("create").style.display = "block";
    document.getElementById("cart").style.display = "none";
  }

  function course() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("create").style.display = "none";
    document.getElementById("cart").style.display = "flex";
  }

  // State that handles course content input
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

  // State that handles what to learn input
  const [whatToLearnInput, setWhatToLearnInput] = useState([
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

  // State that handles requirement input
  const [requirementInput, setRequirementInput] = useState([
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

  // State that handles audience input
  const [audienceInput, setAudienceInput] = useState([
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

  // State that handles materials input
  const [materialsInput, setMaterialsInput] = useState([
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

  // State that handles tags input
  const [tagsInput, setTagsInput] = useState([
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

  // Function to add input field
  function addInputField(contentName, contentNameFunction, temporaryName) {
    // Create loop
    for (let i = 0; i < contentName.length; i++) {
      // If current iteration visibility status is false
      if (!contentName[i].visibility) {
        // Create state instance
        const temporaryName = [...contentName];

        // Set current indec value to true
        temporaryName[i].visibility = true;

        // Set state
        contentNameFunction(temporaryName);

        return;
      }
    }
  }

  const navigate = useNavigate();

  /**
   * Function to logout of application
   */
  function logout() {
    // Clear localStorage
    localStorage.clear();

    // Set login status to true
    setLoginStatus(false);

    // Navigate to homepage
    navigate("/login");

    // window.location.reload(true);
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
              <img src={img} alt="" />
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
                <span className="span">
                  {det.role === "publisher"
                    ? "Course Created"
                    : "Enrolled Courses"}{" "}
                </span>
              </li>
              {/* <li>
                <span className="span"> {det.role=== "publisher"? "Create Blog" : "Reviews" } </span>
              </li> */}
              <li
                onClick={create}
                style={{ display: det.role === "publisher" ? "block" : "none" }}
              >
                <span className="span">Create Course</span>
              </li>
              {/* <li>
                <span className="span">Settings</span>
              </li> */}
              <li onClick={logout}>
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
                  <h1>
                    {det.role === "publisher"
                      ? instructCourse.length
                      : cart.length}
                  </h1>
                  <p>
                    {" "}
                    {det.role === "publisher"
                      ? "Course Created "
                      : "Enrolled Courses"}{" "}
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img-div">
                  <GiNotebook fontSize="55px" color="#027dff" />
                </div>
                <div className="text-div">
                  <h1>{cart.length}</h1>
                  <p>
                    {" "}
                    {det.role === "publisher"
                      ? "Created Blogs"
                      : "Active Courses"}
                  </p>
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
                <li>{moment(det.createdAt).format("DD MMM YYYY, h:mm A")}</li>
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
              {/* <ul>
                <li>Phone Number</li>
                <li>+234 9067925333</li>
              </ul>
              <ul>
                <li>id</li>
                <li>{det._id}</li>
              </ul> */}
              <ul>
                <li>Role</li>
                <li>{det.role}</li>
              </ul>
            </div>
          </div>
          {/* Form begins here */}
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
                          value={courseContent[index]}
                          onChange={(e) =>
                            cofunc({
                              ...courseContent,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {courseContentInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(courseContentInput, setCourseContentInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>What To Learn</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {whatToLearnInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={whatToLearn[index]}
                          onChange={(e) =>
                            whfunc({
                              ...whatToLearn,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {whatToLearnInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(whatToLearnInput, setWhatToLearnInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>Requirement</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {requirementInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={requirement[index]}
                          onChange={(e) =>
                            refunc({
                              ...requirement,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {requirementInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(requirementInput, setRequirementInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>Audience</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {audienceInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={audience[index]}
                          onChange={(e) =>
                            aufunc({
                              ...audience,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {audienceInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(audienceInput, setAudienceInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>Materials</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {materialsInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={materials[index]}
                          onChange={(e) =>
                            mafunc({
                              ...materials,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {materialsInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(materialsInput, setMaterialsInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>Tags</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {tagsInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={tags[index]}
                          onChange={(e) =>
                            tafunc({
                              ...tags,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {tagsInput[0].visibility && (
                  <span onClick={() => addInputField(tagsInput, setTagsInput)}>
                    Add
                  </span>
                )}
              </div>

              <span id="message"></span>
              <input type="submit" value="Create" className="submit" />
            </form>
          </div>
          <div
            className="cart"
            id="cart"
            style={{
              justifyContent: instructorError ? "center" : "space-between",
              alignItems: instructorError ? "center" : "flex-start",
            }}
          >
            {det.role === "publisher" ? courseCreatedCard : carts}
            <h4
              style={{
                textAlign: "center",
                marginBlockEnd: 0,
                height: "fit-content",
              }}
            >
              {instructorError.error}
            </h4>
          </div>
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
                <button>Confirm</button>
                <button onClick={pupF}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
