// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const { name, username, email, phone, image } = formData;

  function onHandleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    showUserInEditForm();
    // eslint-disable-next-line
  }, []);

  function showUserInEditForm() {
    fetch(`https://contact-list-phase2-app.herokuapp.com/users/${id}`)
      .then((res) => res.json())
      .then((userData) => setFormData(userData));
  }

  //Implementing PATCH method to edit data//
  function onSubmitEditUser(e) {
    e.preventDefault();
    fetch(`https://contact-list-phase2-app.herokuapp.com/users/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((userData) => {
        setFormData(userData);
      });
  }

  return (
    <>
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
            <div>
              <input
                className="my-2"
                type="text"
                placeholder="Enter Image URL"
                name="image"
                value={image}
                onChange={onHandleChange}
              />
            </div>

            <button className="my-2 btn-primary">Update Employee</button>
          </form>
        </div>
      </div>

      <br />

      <Link className="btn btn-danger mx-3" to="/employee">
        Back to Records
      </Link>
    </>
  );
}

export default EditUserForm;
