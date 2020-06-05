import React from "react";

const AreaTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Area Name</th>
      </tr>
    </thead>
    <tbody>
    {undefined !== props.areas && props.areas.length > 0 ? (
        props.areas.map((area) => (
          <tr key={area.id.toString()}>
            <td>{area.id}</td>
            <td>{area.areaname}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(area);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteArea(area.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Area</td>
        </tr>
      )}

    </tbody>
  </table>
);

export default AreaTable;
