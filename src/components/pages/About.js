import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <h1 className="heading">About</h1>
      <div className="div-about">
        <br />
        <br />
        <div>
          <h2>App Name: Amazon Employee Details</h2>
          <p>
            Amazon Employee Details app is designed to add new hired employees,
            <br />
            to delete employee records who have quit job. To update name ,
            email,
            <br /> phone and other details of employees. Amazon Employee Details
            app
            <br />
            was created for Flatiron School Amazon software developement Course.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
