import React  from "react";


function AddUserForm({onHandleChange, formData, onSubmitAddUser}) {
  //Array desturcting name, username, email and phone to formData//
  const {  name, username, email, phone } = formData;


  return (
    <div className="div-container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="add-hire">Add New Hire</h2>

        <form onSubmit={onSubmitAddUser}>
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