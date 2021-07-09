import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Amazonpic from "./amazon.jpg";

function Home() {
  return (
    <>
      <div className="div-container">
        <h1 className="home-heading">Welcome to Amazon Employee Details App</h1>
        <img className="home-img" alt="amz-pic" src={Amazonpic} />
      </div>
      <div className="div-container">
        <p className="home-para">
          Amazon Employee Details app is designed to add new hired employees,
          <br />
          to delete employee records who have quit job. To update name , email,
          <br /> phone and other details of employees. Amazon Employee Details
          app
          <br />
          was created for Flatiron School Amazon software developement Course.
        </p>
      </div>
    </>
  );
}

export default Home;
