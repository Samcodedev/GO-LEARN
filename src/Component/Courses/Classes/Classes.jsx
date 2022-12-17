export default Classes;
import React from "react";
import "./Classes.css";
import { useEffect } from "react";
import ClassCard from "./ClassCard";
import { useNavigate } from "react-router-dom";

const Classes = ({loginStatus}) => {

    const navigate = useNavigate();

  let [va, vaFunc] = React.useState(false);
  let [courses, courseFunction] = React.useState([]);

  const handleLogin = async () => {
    let result = await fetch("https://golearn.onrender.com/api/v1/course", {
      method: "get",
      credencials: "include",
    });
    result = await result.json();
    console.warn(result);
    console.log(result);
    courseFunction(result.data);

    vaFunc(true);
  };

  useEffect(() => {
    // If va value is not true, run handleLogin function
    !va && handleLogin();
  });

  let datas = courses.map((items) => {
    return (
      <ClassCard
        title={items.courseTitle}
        time={items.courseDuration}
        audience={items.audience}
        category={items.category}
        author={items.publisherName}
        data={items}
      />
    );
  });

  return (
    <div className="classes">
      <div className="sub-classes">
        {loginStatus && <>{va === true ? datas : <h1>LOADING...</h1>}</>}
        {
            !loginStatus && (
                <>
                {navigate('/register')}
                </>
            )
        }
      </div>
    </div>
  );
};

export default Classes;
