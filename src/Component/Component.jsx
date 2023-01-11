import React, { useEffect, useState } from "react";
import LandingPage from "./Landing Page/LandingPage";
import Layout from "./Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./About/About";
import Blog from "./Blog/Blog";
import Courses from "./Courses/Courses";
import DecFinance from "./DecFinance/DecFinance";
import Contact from "./Contact/Contact";
import Construction from "./Construction";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Forget from "./ForgetPassword/Forget";
import Reset from "./ResetPassword/Reset";
import Class from "./Class/Class";
import Error from "./ErrorPage/Error";
import InstructorProfile from "./InstructorProfile/InstructorProfile";

function Component() {
  const API = "https://golearn.up.railway.app/api/v1/auth/";

  // const [loginStatus, setLoginStatus] = useState(false);
  // const [savedCourses, setSavedCourses] = useState([]);

  // // fetch all courses and stored in LOCAL STORAGE
  // async function fetchCourses()  {
  //   console.log('Fetch courses now!');
  //   // console.log('Fetch courses now!');
  //   // return;

  //   let result = await fetch("https://golearn.up.railway.app/api/v1/course", {
  //     method: "get",
  //     credencials: "include",
  //   });
  //   result = await result.json();
  //   let data = result.data

  //   console.log("RESULT: ", data);
  //   setSavedCourses(data);
  //   localStorage.setItem("courses", JSON.stringify(data));

  // };

  // // fetchCourses();

  // let savedCoursesArray = savedCourses;
  // console.log("Saved courses: ", savedCoursesArray);

  // if (savedCoursesArray && savedCoursesArray !== []) {
  //   // localStorage.setItem("courses", JSON.stringify(savedCoursesArray));
  //   const courses = JSON.parse(localStorage.getItem("courses"));
  //   console.log("RETRIEVED COURSES: ", courses);
  // };
  // console.log("testing", savedCourses);

  // useEffect(() => {
  //   if (window.localStorage.getItem("token")) {
  //     setLoginStatus(true);
  //     console.log("TOKEN IS AVAILABLE");
  //     // Call function to fetch courses
  //     fetchCourses();
  //   } else {
  //     console.log("TOKEN IS NOT AVAILABLE");
  //     setLoginStatus(false);
  //   }
  // }, []);
  // const API = "https://golearn.onrender.com/api/v1/auth/";

  const [loginStatus, setLoginStatus] = useState(false);

  let [savedCourses, setSavedCourses] = useState();

  // const fetchCourses = async () => {
  //   let result = await fetch("https://golearn.onrender.com/api/v1/course", {
  //     method: "get",
  //     credencials: "include",
  //   });
  //   result = await result.json();

  //   const data = result.data;

  //   console.log("RESULT: ", data);

  //   setSavedCourses(data);

  //   localStorage.setItem("courses", JSON.stringify(data));

  //   const savedCoursesArray = savedCourses;

  //   console.log("Saved courses: ", savedCoursesArray);
  // };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log("Token gotten");
    if (token) {
      setLoginStatus(true);
      console.log("TOKEN IS AVAILABLE");
      // Call function to fetch courses
      const fetchCourses = async () => {
        let result = await fetch("https://golearn.onrender.com/api/v1/course", {
          method: "get",
          credencials: "include",
        });
        result = await result.json();
    
        const data = result.data;
    
        console.log("RESULT: ", data);
    
        setSavedCourses(data);
    
        localStorage.setItem("courses", JSON.stringify(data));
    
        const savedCoursesArray = savedCourses;
    
        console.log("Saved courses: ", savedCoursesArray);
      };

      !savedCourses && fetchCourses();
    } else {
      console.log("TOKEN IS NOT AVAILABLE");
      setLoginStatus(false);
    }

    return () => {
      console.log('cleanup');
    }
  }, [savedCourses]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout loginStatus={loginStatus} />}>
            {/* <Route path="NavBar" element={<NavBar />} /> */}
            <Route index path="/" element={<LandingPage />} />
            <Route path="About" element={<About />} />
            <Route path="Blog" element={<Blog />} />
            <Route
              path="Courses"
              element={<Courses loginStatus={loginStatus} />}
            />
            <Route path="DecFinance" element={loginStatus ? <DecFinance /> : <Register setLoginStatus={setLoginStatus} />}/>
            <Route path="Contact-Us" element={<Contact />} />
            <Route path="instructor" element={<InstructorProfile />} />
            <Route path="construction" element={<Construction />} />
            <Route
              path="register"
              element={<Register setLoginStatus={setLoginStatus} />}
            />
            <Route
              path="profile"
              element={<Profile setLoginStatus={setLoginStatus} />}
            />
            <Route
              path="/login"
              element={<Login setLoginStatus={setLoginStatus} />}
            />
            <Route path="/forget" element={<Forget />} />
            <Route path="/class" element={<Class />} />
            <Route path={`${API}resetpassword/:token`} element={<Reset />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Component;
