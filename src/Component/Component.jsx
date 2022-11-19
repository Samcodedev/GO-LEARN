import React from "react";
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

function Component({ setIsLoggedIn, isLoggedIn }) {
  const API = "https://mysterious-waters-58153.herokuapp.com/api/v1/auth/";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout isLoggedIn={isLoggedIn} />}>
            {/* <Route path="NavBar" element={<NavBar />} /> */}
            <Route index path="/" element={<LandingPage />} />
            <Route path="About" element={<About />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="DecFinance" element={<DecFinance />} />
            <Route path="Contact-Us" element={<Contact />} />
            <Route path="instructor" element={<InstructorProfile />} />
            <Route path="construction" element={<Construction />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
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
