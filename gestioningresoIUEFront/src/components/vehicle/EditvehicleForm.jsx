/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

const EditvehicleForm = (props) => {
  const [vehicle, setVehicle] = useState(props.currentvehicle);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicle({ ...employee, [name]: value });
  };

  useEffect(() => {
    setVehicle(props.currentVehicle);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updatevehicle(vehicle.id, vehicle);
      }}
    >
      <label>Tipo</label>
      <input
        type='text'
        name='tipo'
        value={vehicle.tipo}
        onChange={handleInputChange}
      />

      <label>Placa</label>
      <input
        type='text'
        name='license'
        value={vehicle.license}
        onChange={handleInputChange}
      />

      <button>Update vehicle</button>
      <button
        onClick={() => props.setEditing(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
};

export default EditvehicleForm;
