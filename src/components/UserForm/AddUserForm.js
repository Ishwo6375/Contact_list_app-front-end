// import React from "react";
import React, { useState, useEffect } from "react";


function AddUserForm({onHandleChange, user, onSubmitUser}) {
  //Array desturcting name, username, email and phone to user//

  //  const [user, setUsers] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  // });
  const {  name, username, email, phone } = user;

  // function onHandleChange(e) {
  //   setUsers({...user, [e.target.name]: e.target.value });
  // }
  

  // //Implementing POST method to add Employee
  // function onSubmitUser(e) {
  //   e.preventDefault();
  //   const config = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: user.name,
  //       username: user.username,
  //       email: user.email,
  //       phone: user.phone,
  //     }),
  //   };

  //   fetch("http://localhost:3000/users", config)
  //     .then((res) => res.json())
  //     .then((newUser) => {
  //       const newUsers = [user, newUser];
  //       setUsers(newUsers);
  //     });
  // }


  return (
    <div className="div-container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="add-hire">Add New Hire</h2>

        <form onSubmit={onSubmitUser}>
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

          <button className="my-2 btn-primary">Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;