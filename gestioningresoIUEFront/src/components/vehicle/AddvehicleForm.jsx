/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const AddvehicleForm = (props) => {

  const initialFormState = { id: null, tipo: '', license: '' };
  const [vehicle, setVehicle] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log(event);
    setVehicle({ ...vehicle, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!vehicle.tipo || !vehicle.license) return;

        props.addVehicle(vehicle);
        setVehicle(initialFormState);
      }}
    >
      <label>Tipo</label>
      <input
        type='text'
        name='tipo'
        value={vehicle.tipo}
        onChange={handleInputChange}
      />

      <label>placa</label>
      <input
        type='text'
        name='license'
        value={vehicle.license}
        onChange={handleInputChange}
      />
      <button>Add new vehicle</button>
    </form>
  );
};
export default AddvehicleForm;
