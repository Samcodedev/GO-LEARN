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

  const carts = cart.map((item, index) => {
    return (
      <ProfileCard titleValue={item.courseTitle} dta={item.courseId} data={item} key={index} />
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
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    result = await result.json();
    // console.warn(result);
    // console.log("cart course", result);

    result.data ? instructCourseFunc(result.data) : instructorErrorFunc(result);
  };

  const courseCreatedCard = instructCourse.map((item, index) => {
    return (
      <CourseCard
        id={item._id}
        courseTitle={item.courseTitle}
        publisher={item.publisherName}
        duration={item.courseDuration}
        icon={<SlOptionsVertical />}
        data={item}
        del={pupF}
        refresh={handleinstructorCourse}
        key={index}
      />
    );
  });

  useEffect(() => {
    handleLogin();
    // det.role === "publisher" && handleinstructorCourse();
    // : console.log("Hello loading");
    det.role === "user" && handlecart()
    //  : console.log("publisher");
  }, []);


  // console.log(det);

  let [courseTitle, ctfunc] = React.useState("");
  let [courseDescription, codfunc] = React.useState("");
  let [courseDuration, cdfunc] = React.useState("");
  let [category, cafunc] = React.useState("");
  let [whatToLearnValues, whfunc] = React.useState([]);
  let [requirementValues, refunc] = React.useState([]);
  let [audienceValues, aufunc] = React.useState([]);
  let [materialsValues, mafunc] = React.useState([]);

  let [courseContentValues, cofunc] = React.useState([]);
  let [tags, tafunc] = React.useState([]);
  let [titleValue,titleValuefunc] = React.useState([]);


  // this is used to get the course id so as to update it with the "coursecontent" and "videos" at handleCourseUpdate
    const [createCou, createCoufunc] = React.useState()

    const whatToLearn = Object.values(whatToLearnValues);
    const requirement = Object.values(requirementValues);
    const audience = Object.values(audienceValues);
    const materials = Object.values(materialsValues);
    const title = Object.values(titleValue)
    const courseContent = Object.values(courseContentValues);

    const handleCourseUpdate = async (e) => {
      e.preventDefault();

      let result = await fetch(`https://golearn.up.railway.app/api/v1/course/uploadcontent/${createCou}`, {
        method: "post",
        credencials: "include",
        body: JSON.stringify({
          title,
          courseContent,
        }),
        headers: {
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      result = await result.json();
      console.warn(result);
      console.log(result);

    }

  // function update() {
    // createCou? handleCourseUpdate() : alert("don't call")
  // }

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    // console.log("Form inputs: ", {
    //   courseTitle,
    //   courseDescription,
    //   courseDuration,
    //   category,
    //   whatToLearnValues,
    //   requirementValues,
    //   audienceValues,
    //   materialsValues,

    //   courseContentValues,
    //   courseContent,
    //   whatToLearn,
    //   requirement,
    //   audience,
    // });

    console.log("Form inputs: ", {
        courseTitle,
        courseDescription,
        courseDuration,
        category,
        whatToLearn,
        requirement,
        audience,
        materials,
        title,
        courseContent,
    });

    // return;

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
    createCoufunc(result.data._id)

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

    // call handleCourseUpdate() to update the course (to upload course content and videos) immediately after course is created
    createCou? handleCourseUpdate() : console.log("no course created")
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
  const [courseContentValuesInput, setCourseContentInput] = useState([
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
  const [whatToLearnValuesInput, setWhatToLearnInput] = useState([
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

  // State that handles requirementValues input
  const [requirementValuesInput, setRequirementInput] = useState([
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

  // State that handles audienceValues input
  const [audienceValuesInput, setAudienceInput] = useState([
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

  // State that handles materialsValues input
  const [materialsValuesInput, setMaterialsInput] = useState([
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

  // State that handle titleValue input
  const [titleValueInput, settitleValueInput] = useState([
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



  const [displaypictures, displaypictureFunc] = React.useState()

  let profilePic = async (e) => {
    e.preventDefault();

    const displaypicture = new FormData()
    displaypicture.append('displaypicture', displaypictures)

    let result = await fetch('https://golearn.up.railway.app/api/v1/auth/uploaddisplaypicture', {
      method: "post",
      credencials: "include",
      body: JSON.stringify({
        displaypicture,
      }),
      headers: {
        "content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    result = await result.json();
    console.warn(result);
    console.log(result);

    console.log(displaypicture)

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


              <form onSubmit={profilePic}>
                <input type="file" name="file"
                  // value={displaypicture}
                  onChange={(e) => displaypictureFunc(e.target.files[0])} 
                />

                  <input type="submit" value="upload" />
              </form>
                <button onClick={handleinstructorCourse}>Click Here</button>
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
            <div className="course-progress">
              {carts}
            </div>
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
              {/*
                value={displaypicture}
                onChange={(e) => displaypictureFunc(e.target.value)} */}

              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => cafunc(e.target.value)}
              />

              <label>What To Learn</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {whatToLearnValuesInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={whatToLearnValues[index]}
                          onChange={(e) =>
                            whfunc({
                              ...whatToLearnValues,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {whatToLearnValuesInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(whatToLearnValuesInput, setWhatToLearnInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>Requirement</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {requirementValuesInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={requirementValues[index]}
                          onChange={(e) =>
                            refunc({
                              ...requirementValues,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {requirementValuesInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(requirementValuesInput, setRequirementInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>Audience</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {audienceValuesInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={audienceValues[index]}
                          onChange={(e) =>
                            aufunc({
                              ...audienceValues,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {audienceValuesInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(audienceValuesInput, setAudienceInput)
                    }
                  >
                    Add
                  </span>
                )}
              </div>

              <label>Materials</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {materialsValuesInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={materialsValues[index]}
                          onChange={(e) =>
                            mafunc({
                              ...materialsValues,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {materialsValuesInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(materialsValuesInput, setMaterialsInput)
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

              {/* to upload the course content */}
              <label>Course Content</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {titleValueInput.map((eachContent, index) => (
                    <div key={index}>
                      {eachContent.visibility && (
                        <input
                          type="text"
                          value={titleValue[index]}
                          onChange={(e) =>
                            titleValuefunc({
                              ...titleValue,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {titleValueInput[0].visibility && (
                  <span onClick={() => addInputField(titleValueInput, settitleValueInput)}>
                    Add
                  </span>
                )}
              </div>

              {/* to upload the course videos (send to the API as "coursecontent") */}
              <label>Upload Videos</label>
              <div className="array-input">
                <div className="array-input-course-content">
                  {courseContentValuesInput.map((eachContent, index) => (
                    <div key={index}>
                      {courseContentValuesInput[index].visibility && (
                        <input
                          type="file"
                          value={courseContentValues[index]}
                          onChange={(e) =>
                            cofunc({
                              ...courseContentValues,
                              [index]: e.target.value,
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
                {courseContentValuesInput[0].visibility && (
                  <span
                    onClick={() =>
                      addInputField(courseContentValuesInput, setCourseContentInput)
                    }
                  >
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
          {/* <div
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
