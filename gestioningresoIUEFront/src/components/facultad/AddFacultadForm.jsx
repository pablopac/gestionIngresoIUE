import React, { useState } from "react";

const AddFacultadForm = (props) => {

const initialFormState = { id: null, facultyname: ""};
const [facultad, setFacultad] = useState(initialFormState);

const handleInputChange = (event) => {
  const { name, value } = event.target;
        //console.log(event);
  setFacultad({ ...facultad, [name]: value });
};

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!facultad.facultyname)
          return;

        props.addFacultad(facultad);
        setFacultad(initialFormState);
      }}
    >
      <label>Facultad Name</label>
      <input
        type="text"
        name="facultyname"
        value={facultad.facultyname}
        onChange={handleInputChange}
      />

      <button>Add new Facultad</button>
    </form>
  );
};
export default AddFacultadForm;
