/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

const EditOrganizacionForm = (props) => {
  const [organizacion, setOrganizacion] = useState(props.currentorganizacion);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrganizacion({ ...organizacion, [name]: value });
  };

  useEffect(() => {
    setOrganizacion(props.currentorganizacion);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateOrganizacion(organizacion.id, organizacion);
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

      <button>Update organizacion</button>
      <button
        onClick={() => props.setEditing(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
};

export default EditOrganizacionForm;
