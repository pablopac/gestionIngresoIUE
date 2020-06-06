/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

const OrganizacionTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>ID BD</th>
        <th>name</th>
        <th>organization_id</th>
      </tr>
    </thead>
    <tbody>
      {undefined !== props.organizaciones && props.organizaciones.length > 0 ? (
        props.organizaciones.map((organizacion) => (
          <tr key={organizacion.id.toString()}>
            <td>{organizacion.id}</td>
            <td>{organizacion.name}</td>
            <td>{organizacion.organization_id}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(organizacion);
                }}
                className='button muted-button'
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteorganizacion(organizacion.id)}
                className='button muted-button'
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No organizacion</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default OrganizacionTable;

