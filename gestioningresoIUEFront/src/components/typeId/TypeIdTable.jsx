import React from "react";

const TypeIdTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>ID BD</th>
        <th>TypeId</th>
      </tr>
    </thead>
    <tbody>
    {undefined !== props.typeid && props.typeid.length > 0 ? (
        props.typeid.map((typeid) => (
          <tr key={typeid.id.toString()}>
            <td>{typeid.id}</td>
            <td>{typeid.description}</td>

            <td>
              <button
                onClick={() => {
                  props.editRow(typeid);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteTypeId(typeid.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No typeid</td>
        </tr>
      )}

     {/*  <tr>
        <td>ID BD</td>
        <td>TypeId</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr> */}
    </tbody>
  </table>
);

export default TypeIdTable;
