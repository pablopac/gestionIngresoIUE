import React from "react";

const UsersysTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>username</th>
        <th>password</th>
      </tr>
    </thead>
    <tbody>
    {undefined !== props.usersyss && props.usersyss.length > 0 ? (
        props.usersyss.map((usersys) => (
          <tr key={usersys.id.toString()}>
            <td>{usersys.id}</td>
            <td>{usersys.username}</td>
            <td>{usersys.password}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(usersys);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUsersys(usersys.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Usersys</td>
        </tr>
      )}

    </tbody>
  </table>
);

export default UsersysTable;
