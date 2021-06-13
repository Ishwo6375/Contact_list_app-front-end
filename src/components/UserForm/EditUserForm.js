// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditUserForm() {
  const { id } = useParams();

  //seeting useState to hold data from form//
  //setting initial value to empty string//
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

 
  //Array desturcting name, username, email and phone to formData//
  const { name, username, email, phone } = formData;

  function onHandleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmitEditUser = async (e) => {
    e.preventDefault();
    await axios.patch(`https://contact-list-phase2-app.herokuapp.com/users/${id}`, formData);
  };

  return (
    <div className="div-container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="add-hire">Edit Employee</h2>

        <form onSubmit={onSubmitEditUser}>
          <div>
            <input
              className="my-2"
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="my-2"
              type="text"
              placeholder="Enter UserName"
              name="username"
              value={username}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="my-2"
              type="email"
              placeholder="Enter E-mail Address"
              name="email"
              value={email}
              onChange={onHandleChange}
            />
          </div>

          <div>
            <input
              className="my-2"
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
              value={phone}
              onChange={onHandleChange}
            />
          </div>

          <button className="my-2 btn-primary">Update Employee</button>
        </form>
      </div>
    </div>
  );
}

export default EditUserForm;
