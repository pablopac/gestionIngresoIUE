/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

const VehicleTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>ID BD</th>
        <th>Tipo</th>
        <th>Placa</th>
      </tr>
    </thead>
    <tbody>
      {undefined !== props.vehicles && props.vehicles.length > 0 ? (
        props.vehicles.map((vehicle) => (
          <tr key={vehicle.id.toString()}>
            <td>{vehicle.id}</td>
            <td>{vehicle.tipo}</td>
            <td>{vehicle.license}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(vehicle);
                }}
                className='button muted-button'
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteVehicle(vehicle.id)}
                className='button muted-button'
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No vehicle</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default VehicleTable;

