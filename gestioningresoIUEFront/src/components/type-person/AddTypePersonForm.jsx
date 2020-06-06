/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const AddEmployeeForm = (props) => {

  const initialFormState = { id: null, tp_id: '', name: '' };
  const [typePerson, setTypePerson] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log(event);
    setTypePerson({ ...typePerson, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!typePerson.id || !typePerson.tp_id || !typePerson.name) return;
        props.addTypePerson(typePerson);
        setTypePerson(initialFormState);
      }}
    >
      {/* <label>Id</label>
      <input
        type='text'
        name='firstName'
        value={typePerson.id}
        onChange={handleInputChange}
      /> */}
      <label>tp_id</label>
      <input
        type='text'
        name='lastName'
        value={typePerson.tp_id}
        onChange={handleInputChange}
      />

      <label>name</label>
      <input
        type='text'
        name='email'
        value={typePerson.name}
        onChange={handleInputChange}
      />
      <button type='button'>Add new Type Person</button>
    </form>
  );
};
export default AddEmployeeForm;
