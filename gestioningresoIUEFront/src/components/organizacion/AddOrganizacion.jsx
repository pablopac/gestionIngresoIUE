/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const AddorganizacionForm = (props) => {

  const initialFormState = { id: null, name: '', organization_id: '' };
  const [organizacion, setorganizacion] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log(event);
    setorganizacion({ ...organizacion, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!organizacion.name || !organizacion.organization_id) return;

        props.addorganizacion(organizacion);
        setorganizacion(initialFormState);
      }}
    >
      <label>name</label>
      <input
        type='text'
        name='name'
        value={organizacion.name}
        onChange={handleInputChange}
      />
      <label>organization_id</label>
      <input
        type='text'
        name='organization_id'
        value={organizacion.organization_id}
        onChange={handleInputChange}
      />

      <button>Add new organizacion</button>
    </form>
  );
};
export default AddorganizacionForm;
