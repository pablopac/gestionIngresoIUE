import React, { useState, useEffect } from "react";

const EditUsersysForm = (props) => {
  const [usersys, setUsersys] = useState(props.currentUsersys);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsersys({ ...usersys, [name]: value });
  };

  useEffect(() => {
    setUsersys(props.currentUsersys);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUsersys(usersys.id, usersys);
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

      <button>Update usersys</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUsersysForm;
