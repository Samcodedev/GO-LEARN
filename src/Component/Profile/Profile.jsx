import React from "react";
import ProfileBody from "./ProfileBody/ProfileBody";
import ProfileTop from "./ProfileTop/ProfileTop";
import Login from "../Login/Login";
import { useState } from "react";
import { useEffect } from "react";

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
  const [loginStatus, setLoginStatus] = useState(isLoggedIn);
  useEffect(() => {
    if(isLoggedIn) {
        setLoginStatus(true);
    }
  }, [isLoggedIn])
  return (
    <>
    {/* Conditionally render profile page depending on login status  */}
      {loginStatus ? (
        <>
          <ProfileTop />
          <ProfileBody setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default Profile;
