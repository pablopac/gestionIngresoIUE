/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

const EditTypePersonForm = (props) => {
  const [typePerson, setTypePerson] = useState(props.currentTypePerson);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTypePerson({ ...employee, [name]: value });
  };

  useEffect(() => {
    setTypePerson(props.currentTypePerson);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTypePerson(typePerson.id, typePerson);
      }}
    >
      {/* <label>id</label>
      <input
        type='text'
        name='id'
        value={typeperson.id}
        onChange={handleInputChange}
      /> */}
      <label>tp_id</label>
      <input
        type='text'
        name='tp_id'
        value={typeperson.tp_id}
        onChange={handleInputChange}
      />

      <label>name</label>
      <input
        type='text'
        name='name'
        value={typeperson.name}
        onChange={handleInputChange}
      />

      <button type='button'>Update employee</button>
      <button
        type='button'
        onClick={() => props.setEditing(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTypePersonForm;
