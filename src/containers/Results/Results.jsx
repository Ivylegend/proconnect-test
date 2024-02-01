import React from "react";
import "./Results.css";



const Results = ({ title, courses, level }) => {
  return (
    <div className="app_results">
      <div>
        <h2 className="result_title center">{title}</h2>
        <p className="result_page center">
          <span>{level}</span>/<span>2</span>
        </p>
        <p>Your Result</p>
        <div className="result-div">
          {courses.map((course, index) => {
            return (
              <span key={index}>
                <p className="course_title">{course.title}</p>
                <p>{course.grade}</p>
              </span>
            );
          })}
        </div>
        <button className="outline btn">Add a second result</button>
        <p className="underlined">
          NEED ORIGINAL WAEC RESULT SLIP - CLICK HERE
        </p>
      </div>
    </div>
  );
};

export default Results;
