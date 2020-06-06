import React, { useState } from "react";

const AddUsersysForm = (props) => {

const initialFormState = { id: null, username: "", password: ""};
const [usersys, setUsersys] = useState(initialFormState);

const handleInputChange = (event) => {
  const { name, value } = event.target;
        //console.log(event);
  setUsersys({ ...usersys, [name]: value });
};

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!usersys.username || !usersys.password)
          return;

        props.addUsersys(usersys);
        setUsersys(initialFormState);
      }}
    >
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={usersys.username}
        onChange={handleInputChange}
      />
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={usersys.password}
        onChange={handleInputChange}
      />

      <button>Add new Usersys</button>
    </form>
  );
};
export default AddUsersysForm;
