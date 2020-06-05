import React, { useState, useEffect } from "react";

const EditFacultadForm = (props) => {
  const [facultad, setFacultad] = useState(props.currentFacultad);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFacultad({ ...facultad, [name]: value });
  };

  useEffect(() => {
    setFacultad(props.currentFacultad);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateFacultad(facultad.id, facultad);
      }}
    >
      <label>Facultad Name</label>
      <input
        type="text"
        name="facultyname"
        value={facultad.facultyname}
        onChange={handleInputChange}
      />

      <button>Update facultad</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditFacultadForm;
