import React from "react";
import Head from "./Head/Head";
import Details from "./Details/Details";
import PupCourse from "./PupCourse/PupCourse";
import Olubori from "./Olubori/Olubori";
import Education from "./Education/Education";
import OnlineBlog from "./OnlineBlog/OnlineBlog";
import FreeAccess from "./FreeAccess/FreeAccess";
import GoAlumni from "./GoAlumni/GoAlumni";
import DistanceLearn from "./DistanceLearn/DistanceLearn";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
// import { useState } from "react";
// import { useEffect } from "react";

function LandingPage() {
//   const API = "https://golearn.up.railway.app/api/v1/auth/";

//   const [landingCourses, setLandingCourses] = useState();
  let landingCourses;

  async function fetchCourses() {
    let result = await fetch("https://golearn.up.railway.app/api/v1/course", {
      method: "get",
      credencials: "include",
    });
    result = await result.json();

    const data = result.data;

    console.log("RESULT: ", data);

    localStorage.setItem("courses", JSON.stringify(data));

  };
  
  const courses = window.localStorage.getItem("courses");

  landingCourses = JSON.parse(courses);
  
  console.log('Courses: ', courses);
  console.log('landingCourses: ', landingCourses);

  // fetchCourses();

  useEffect(() => {
    !courses && fetchCourses();
  }, [courses])


  return (
    <div>
      <Head landingCourses={courses} />
      <Details />
      <PupCourse landingCourses={landingCourses} />
      <Olubori />
      <Education />
      <OnlineBlog />
      <FreeAccess />
      <GoAlumni />
      <DistanceLearn />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default LandingPage;
