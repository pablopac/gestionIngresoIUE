import React from "react";

const FacultadTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
    {undefined !== props.facultades && props.facultades.length > 0 ? (
        props.facultades.map((facultad) => (
          <tr key={facultad.id.toString()}>
            <td>{facultad.id}</td>
            <td>{facultad.facultyname}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(facultad);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteFacultad(facultad.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Facultad</td>
        </tr>
      )}

    </tbody>
  </table>
);

export default FacultadTable;
