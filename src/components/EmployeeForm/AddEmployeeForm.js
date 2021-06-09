import React, { useState } from "react";

function AddEmployeeForm() {
  //seeting useState to hold data from form//
  //setting initial value to empty string

  const [employee, setEmployee] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  return (
    <div className="div-container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="add-hire">Add New Hire</h2>

        <form>
          <div>
            <input
              className="my-2"
              type="text"
              placeholder="Enter Name"
              name="name"
            />
          </div>

          <div>
            <input
              className="my-2"
              type="text"
              placeholder="Enter UserName"
              name="username"
            />
          </div>

          <div>
            <input
              className="my-2"
              type="email"
              placeholder="Enter E-mail Address"
              name="email"
            />
          </div>

          <div>
            <input
              className="my-2"
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
            />
          </div>

          <button className="my-2 btn-primary">Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeeForm;
