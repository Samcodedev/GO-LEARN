import React from "react";
import "./ProfileBody.css";
import img from "./img/Group 1.png";

import { useEffect } from "react";
import { GiBookmarklet, GiNotebook } from "react-icons/gi";
import { RiBookmark3Fill, RiEditCircleFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import CourseCard from "../../InstructorProfile/CourseCard/CourseCard";
import { BsPlus } from "react-icons/bs";

const ProfileBody = ({ setLoginStatus }) => {
  let [savedCourses, setSavedCourses] = React.useState([]);

  const [editProfilePicture, setEditProfilePicture] = useState(false);

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
    console.log(`Fetching user's courses in cart`);

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

    // cartAvailability = true;
  };

  const carts = cart.map((item, index) => {
    return (
      <ProfileCard
        titleValue={item.courseTitle}
        dta={item.courseId}
        data={item}
        key={index}
      />
    );
  });

  let [pup, pupfunc] = React.useState(true);
  // let [selectedCourse, setSelectedCourse] = React.useState();

  function pupF() {
    pupfunc(!pup);
  }

  let instructCourseAvailability = false;
  const [instructCourse, instructCourseFunc] = useState([]);
  const [instructorError, instructorErrorFunc] = useState([]);

  const handleinstructorCourse = async () => {
    console.log("Fetching instructor courses");

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
    console.log("courses", result);

    result.data ? instructCourseFunc(result.data) : instructorErrorFunc(result);

    instructCourseAvailability = true;

    return;
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
        key={index}
      />
    );
  });

  // useEffect(() => {
  //   handleLogin();
  //   det.role === "user" && handlecart();
  // }, [det.role]);

  useEffect(() => {
    if(det.role === "user") {
      handlecart();
      return;
    }
    if(det.role === "publisher") {
      handleinstructorCourse();
    }
    // det.role === "publisher" && handleinstructorCourse();
  }, [det.role]);

  // useEffect(() => {
  //   // if (det.role === "publisher") {
  //   //   handleinstructorCourse();
  //   //   return;
  //   // }
  //   det.role === "publisher" && handleinstructorCourse();
  // }, [det.role]);

  const [isVideoCourseContentUploadType, setIsVideoCourseContentUploadType] =
    useState(true);

  let [courseTitle, ctfunc] = React.useState("");
  let [courseDescription, codfunc] = React.useState("");
  let [courseDuration, cdfunc] = React.useState("");
  let [category, cafunc] = React.useState("");
  let [whatToLearnValues, whfunc] = React.useState([]);
  let [requirementValues, refunc] = React.useState([]);
  let [audienceValues, aufunc] = React.useState([]);
  let [materialsValues, mafunc] = React.useState([]);

  let [courseContentValues, cofunc] = React.useState([]);
  // let [videoFiles, setVideoFiles] = React.useState([]);
  let [tags, tafunc] = React.useState([]);
  let [titleValue, titleValuefunc] = React.useState([]);

  // this is used to get the course id so as to update it with the "coursecontent" and "videos" at handleUploadCourseContent
  // const [createCou, createCoufunc] = React.useState();

  const whatToLearn = Object.values(whatToLearnValues);
  const requirement = Object.values(requirementValues);
  const audience = Object.values(audienceValues);
  const materials = Object.values(materialsValues);
  const title = Object.values(titleValue);
  const courseContent = Object.values(courseContentValues);

  const [courseImage, courseImageFunc] = React.useState(null);
  // const [courseImageFile, setcourseImageFile] = React.useState(null);

  // function update() {
  // createCou? handleUploadCourseContent() : alert("don't call")
  // }

  const [responseMessage, setResponseMessage] = useState();

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
    // createCoufunc(result.data._id);

    if (result.success === true) {
      // Upload course content
      handleUploadCourseContent(result.data._id);
      // Upload course image
      handleCourseImage(result.data._id);
      setResponseMessage(
        `You have successfully created ${courseTitle} course.`
      );
      // document.getElementById(
      //   "message"
      // ).innerHTML = `You have successfully created ${courseTitle} course.`;
      document.getElementById("message").style.color = "green";
    } else if (result.success === false) {
      setResponseMessage(
        "An error occured, please fill in all fields, and try again."
      );
      // document.getElementById(
      //   "message"
      // ).innerHTML = `An error occured, please fill in all fields, and try again.`;
      document.getElementById("message").style.color = "red";
    }

    // call handleUploadCourseContent() to update the course (to upload course content and videos) immediately after course is created
    // createCou ? handleUploadCourseContent() : console.log("no course created");
  };

  const handleUploadCourseContent = async (courseId) => {
    // const data1 = new FormData();
    // data1.append("displaypicture", imageFile);
    // console.log("courseContent: ", courseContent);

    let result = await fetch(
      `https://golearn.up.railway.app/api/v1/course/uploadcontent/${courseId}`,
      {
        method: "post",
        credencials: "include",
        body: {
          title,
          courseContent,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);
  };

  const handleCourseImage = async (courseId) => {
    console.log("Image file: ", coverImageFile);
    courseImageFunc(!courseImage);

    // const data = new FormData();
    // data.append("File", imageFile);

    const data = new FormData();
    data.append("courseimage", coverImageFile);
    console.log("data: ", data);

    let result = await fetch(
      `https://golearn.up.railway.app/api/v1/course/uploadcourseimage/${courseId}`,
      {
        method: "post",
        credencials: "include",
        body: data,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log("Loading");
    result = await result.json();
    console.warn(result);
    console.log(result);
    console.log("DATA: ", data);

    handleLogin();
    // console.log(displaypicture);
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

    det.role === "publisher" ? handleinstructorCourse() : handlecart();
  }

  // State that handles course content input
  const [courseContentValuesInput, setCourseContentInput] = useState([
    {
      visibility: true,
    },
    // {
    //   visibility: false,
    // },
    // {
    //   visibility: false,
    // },
    // {
    //   visibility: false,
    // },
    // {
    //   visibility: false,
    // },
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

  /**
   *
   * @param {state name} contentName holds name of the state
   * @param {state function} contentNameFunction holds name of function that sets state
   * @param {nil} temporaryName
   * @returns voids
   */
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

  /**
   * Function to add new course content field
   */
  function addNewCourseContent() {
    // Create instance of state
    let _courseContentValuesInput = courseContentValuesInput;

    // Create instance of state object
    let _courseContentValuesInputObj = {
      visibility: true,
    };

    // Push object instance into state instance
    _courseContentValuesInput.push(_courseContentValuesInputObj);

    // Set state
    setCourseContentInput(_courseContentValuesInput);

    console.log(courseContentValuesInput);

    console.log([
      {
        "Title: ": titleValue,
        "Video: ": courseContentValues,
      },
    ]);
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

  // State that holds display picture info
  const [displaypicture, displaypictureFunc] = React.useState(null);
  const [imageFile, setImageFile] = React.useState(null);

  // State that holds display picture info
  const [coverImage, setCoverImage] = React.useState(null);
  const [coverImageFile, setCoverImageFile] = React.useState(null);

  const handleImageFile = (e) => {
    setImageFile(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    displaypictureFunc(imgURL);
  };

  const handleCoverImageUpload = (e) => {
    setCoverImageFile(e.target.files[0]);
    const imgURL = URL.createObjectURL(e.target.files[0]);
    setCoverImage(imgURL);
  };

  const handleCourseContentUpload = (e, type) => {
    if (type === "video") {
      // let _courseContentValues = courseContentValues;

      // _courseContentValues.push(e.target.files[0]);

      cofunc([...courseContentValues, e.target.files[0]]);

      // const videoURL = URL.createObjectURL(e.target.files[0]);

      // setVideoFiles(videoURL);

      // console.log(courseContentValues);
      return;
    }
    if (type === "link") {
      cofunc([...courseContentValues, e.target.value]);

      return;
    }
  };

  const profilePic = async (e) => {
    e.preventDefault();
    console.log("Image file: ", imageFile);
    displaypictureFunc(!displaypicture);

    // const data = new FormData();
    // data.append("File", imageFile);

    const data = new FormData();
    data.append("displaypicture", imageFile);
    console.log("data: ", data);

    let result = await fetch(
      "https://golearn.up.railway.app/api/v1/auth/uploaddisplaypicture",
      {
        method: "post",
        credencials: "include",
        // body: JSON.stringify({
        //   data,
        // }),
        body: data,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log("Loading");
    result = await result.json();
    console.warn(result);
    console.log(result);
    console.log("DATA: ", data);

    handleLogin();
    // console.log(displaypicture);
  };

  //   const handleFileUpload = async (e) => {
  //     const file = e.target.files[0];
  //     if (file.size > 1000000) {
  //         // toast.warning("Photo upload size must not exceed 1MB");
  //         console.log(" too large")
  //         return;
  //     }
  //     setLoadingImage(true);
  //     try {
  //         const data = new FormData();
  //         data.append("displaypicture", file);
  //         const res = await axios.post(
  //             "https://api.coverly.hng.tech/api/v1/auth/dashboard/update-icon",
  //             data,
  //             { headers: { Authorization: `Bearer ${user.token}` } }
  //         );
  //         const userObj = {
  //             ...user,
  //             ...(res?.data?.data ? res.data.data : {}),
  //         };
  //         setUser(userObj);
  //         addUserToLocalStorage(userObj);
  //     } catch (error) {
  //         toast.error("Server error. please try again later");
  //     }
  //     setTimeout(() => {
  //         setLoadingImage(false)
  //     }, 1000);
  //     // setLoadingImage(false)
  // };

  return (
    <div className="profilebody">
      <div className="sub-profilebody">
        <div className="top">
          <div className="alert">
            {/* <span>Your Application is pending as of 10 September, 2022</span> */}
          </div>
          <div className="profileDetails">
            <div className="img-div">
              <img src={det.displayPicture ? det.displayPicture : img} alt="" />
              <span
                style={{ color: "#fff" }}
                onClick={() => setEditProfilePicture(true)}
              >
                <RiEditCircleFill />
              </span>
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
                    : "Enrolled Courses"}
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
            {(!det.displayPicture || editProfilePicture) && (
              <div className="upload">
                {!displaypicture ? (
                  <div className="alert">
                    <span>Set Your Profile Photo</span>
                  </div>
                ) : (
                  <div className="alert">
                    <span>Selected picture:</span>
                    <div className="alert__selectedImage">
                      <img src={displaypicture} alt="selected display" />
                    </div>
                  </div>
                )}

                {displaypicture ? (
                  <button
                    className="uploadPictureBtn"
                    onClick={(e) => profilePic(e)}
                  >
                    Upload picture
                  </button>
                ) : (
                  <button className="uploadPictureBtn">
                    Click Here
                    <input
                      type="file"
                      // onChange={(e) => displaypictureFunc(e.target.files[0])}
                      onChange={(e) => handleImageFile(e)}
                    />
                  </button>
                )}
              </div>
            )}
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
            {det.role === "user" && (
              <>
                <h4>In Progress Courses</h4>
                <div className="course-progress">
                  {carts && carts.length < 1
                    ? "No enrolled courses yet"
                    : carts}
                </div>
              </>
            )}
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
              <label>Course Cover image</label>
              <div className="content-upload-area">
                {coverImage ? (
                  // <p>Cover image uploaded!</p>
                  <>
                    <div className="selectedImg">
                      <img src={coverImage} alt="selected display" />
                    </div>
                    <button className="changeImg">
                      <input
                        type="file"
                        onChange={(e) => handleCoverImageUpload(e)}
                      />
                      Change image
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      <BsPlus fontSize={20} /> Tap to upload file
                    </p>
                    <input
                      type="file"
                      onChange={(e) => handleCoverImageUpload(e)}
                    />
                  </>
                )}
              </div>

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
              {/* <input
                type="time"
                value={courseDuration}
                onChange={(e) => cdfunc(e.target.value)}
              /> */}
              <select
                value={courseDuration}
                onChange={(e) => cdfunc(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="4 hours">4 hours</option>
                <option value="8 hours">8 hours</option>
                <option value="12 hours">12 hours</option>
                <option value="1 day">1 day</option>
              </select>

              {/*
                value={displaypicture}
                onChange={(e) => displaypictureFunc(e.target.value)} */}

              <label>Category</label>
              {/* <input
                type="text"
                value={category}
                onChange={(e) => cafunc(e.target.value)}
              /> */}

              <select value={category} onChange={(e) => cafunc(e.target.value)}>
                <option value="">Select an option</option>
                <option value="Personal Development">
                  Personal Development
                </option>
                <option value="Forex">Forex</option>
                <option value="Affiliate Marketing">Affiliate Marketing</option>
                <option value="Financial Trading">Financial Trading</option>
                <option value="Marketing">Marketing</option>
                <option value="Design and IT">Design and IT</option>
                <option value="Business and management">
                  Business and Management
                </option>
              </select>

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

              <div className="double-array-input">
                <div className="each">
                  {/* to upload the course content */}
                  <label>Course Content</label>
                  <div className="array-input-course-content">
                    {courseContentValuesInput.map((eachContent, index) => (
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
                </div>

                <div className="each">
                  {/* to upload the course videos (send to the API as "coursecontent") */}
                  <label>Upload Videos / links</label>
                  {/* <div className="array-input"> */}
                  <div>
                    {courseContentValuesInput.map((eachContent, index) => (
                      <>
                        {courseContentValuesInput[index].visibility && (
                          <div key={index} className="content-upload-area">
                            {eachContent.visibility &&
                            courseContentValues[index] ? (
                              <>
                                <p>
                                  {courseContentValues[index].name} uploaded{" "}
                                </p>
                              </>
                            ) : (
                              // <p>uploaded!</p>
                              <>
                                {isVideoCourseContentUploadType ? (
                                  <>
                                    <p className="tapArea">
                                      <BsPlus fontSize={20} /> Tap to upload
                                      file
                                      <input
                                        type="file"
                                        value={courseContentValues[index]}
                                        onChange={(e) =>
                                          handleCourseContentUpload(e)
                                        }
                                      />
                                    </p>
                                    <p
                                      className="uploadOptions"
                                      onClick={() =>
                                        setIsVideoCourseContentUploadType(false)
                                      }
                                    >
                                      Upload link instead
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <input
                                      type="text"
                                      // value={courseContentValues[index]}
                                      onChange={(e) =>
                                        handleCourseContentUpload(e)
                                      }
                                    />
                                    <p
                                      className="uploadOptions"
                                      onClick={() =>
                                        setIsVideoCourseContentUploadType(true)
                                      }
                                    >
                                      Upload video instead
                                    </p>
                                  </>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                  {/* {courseContentValuesInput[0].visibility && (
                      <span
                        onClick={() =>
                          addInputField(
                            courseContentValuesInput,
                            setCourseContentInput
                          )
                        }
                      >
                        Add
                      </span>
                    )} */}
                  {/* </div> */}
                </div>
                {courseContentValuesInput[0].visibility && (
                  <span
                    onClick={addNewCourseContent}
                    className="addCourseContent"
                  >
                    Add
                  </span>
                )}
              </div>

              <span id="message">{responseMessage}</span>
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
            {det.role === "user" && carts && carts.length < 1
              ? "No enrolled courses yet"
              : carts}
            <h4
              style={{
                textAlign: "center",
                marginBlockEnd: 0,
                height: "fit-content",
              }}
            >
              {instructCourseAvailability &&
                !instructorError.error &&
                "Loading courses..."}
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
                <button onClick={deleteCourse}>Confirm</button>
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
