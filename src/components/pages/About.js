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
          <p className="about-para">
            Amazon Employee Details app is designed to add new hired employees,
            <br />
            to delete employee records who have quit job. To update name ,
            email,
            <br /> phone and other details of employees. Amazon Employee Details
            app
            <br />
            was created for Flatiron School Amazon software developement Course.
          </p>

          <br />
          <br />
          <h2>App Created By:</h2>

          <p className="about-para">
            Name: Ishwor Prajapati
            <br />
            Job Title: Flatiron School student
          </p>

          <br />
          <br />
          <h2>App Created For:</h2>

          <p className="about-para">
            Flatiron School Amazon Software Development Program
            <br />
            Phase 2 React Project
          </p>

          <br />
          <br />
          <h2>App version</h2>

          <p className="about-para">version: 0.0.01</p>
        </div>
      </div>
    </>
  );
}

export default About;
