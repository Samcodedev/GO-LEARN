import React from "react";
import CourseCard from "./CourseCard/CourseCard";
import Footer from "../Landing Page/Footer/Footer";
import "./instructorProfile.css";
// import StarRating from "../StarRating/StarRating";

const InstructorProfile = () => {
  return (
    <div className="instructorProfile">
      <div className="instructorProfile__profileArea">
        <div className="coverArea">
          <div className="coverArea__instructorImg">
            <img
              src="https://go-learn.online/wp-content/uploads/2021/05/golearn-walter.jpg"
              alt="instructor"
            />
          </div>
          <div className="coverArea__instructorInfo">
            <div className="left">
              <h3>TraderHack</h3>
              <span className="instructorStats">
                <span>2 Courses</span>
                <span>•</span>
                <span>262 Students</span>
              </span>
            </div>
            <div className="right">
              ⭐⭐⭐⭐⭐
              {/* <StarRating /> */}
              <span className="rating">
                2.64
                <span>(11.00)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="bodyArea">
          <div className="bodyArea__biography">
            <h2>Biography</h2>
            <p>
              Walter Nwaugo, also known as traderhack is a stocks, currency and
              cryptocurrency trader, with years of vast experience in trading
              the financial markets. He is an authourity in economics, finance
              and technical analysis. He has a skill in protecting investors and
              taking advantage of the. Walter trades crytocurrencies using
              sophisticated methods and his skill to become a successful trader.
              Having worked with the who is who in the financial sector, which
              has in turn made him a professional much sought after.
            </p>
          </div>
          <div className="bodyArea__courses">
            <h2>Courses</h2>
            <div className="coursesList">
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorProfile;
