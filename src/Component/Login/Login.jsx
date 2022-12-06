import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  // const [email, efunc] = React.useState('')
  const [userName, efunc] = React.useState("");
  const [password, pfunc] = React.useState("");
  let valid1 = document.getElementById("valid1");
  let valid2 = document.getElementById("valid2");
  let error = document.getElementById("error");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch(
      "https://golearn.onrender.com/api/v1/auth/login",
      {
        method: "post",
        credencials: "include",
        body: JSON.stringify({ userName, password }),
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    console.warn(result);
    console.log(result);

    if (result.success === true) {
      // Set login status to true
      setIsLoggedIn(true);
      valid1.style.border = "1px solid green";
      valid2.style.border = "1px solid green";
      error.innerHTML = "Welcome Back";
      error.style.color = "green";
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
      localStorage.setItem("token", result.token);
    } else if (result.success === false) {
      valid1.style.border = "1px solid red";
      valid2.style.border = "1px solid red";
      error.innerHTML = `${result.error}`;
      error.style.color = "red";
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} Navigate="/profile">
        <p>Hi, Welcome back!</p>
        <input
          type="text"
          placeholder="Username or Email Address"
          value={userName}
          id="valid1"
          onChange={(e) => efunc(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          id="valid2"
          onChange={(e) => pfunc(e.target.value)}
        />

        <div className="detail">
          <div className="signin">
            <input type="checkbox" />
            <p>keep me signin</p>
          </div>
          <Link to="/forget">
            <p>Forgot?</p>
          </Link>
        </div>

        <input type="submit" className="submit" value="Submit" />

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <span>Register Now</span>
          </Link>
        </p>
        <small id="error"> </small>
      </form>
    </div>
  );
};

export default Login;
