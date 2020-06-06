/* eslint-disable react/destructuring-assignment */
import React from 'react';

const TypePersonTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>tp_id</th>
        <th>lastName</th>
      </tr>
    </thead>
    <tbody>
      {undefined !== props.typePerson && props.typePerson.length > 0 ? (
        props.typePerson.map((employee) => (
          <tr key={employee.id.toString()}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>
              <button
                type='button'
                onClick={() => {
                  props.editRow(employee);
                }}
                className='button muted-button'
              >
                Edit
              </button>
              <button
                type='button'
                onClick={() => props.deleteEmployee(typePerson.id)}
                className='button muted-button'
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No employee</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TypePersonTable;
