import React, { useState } from "react";

const AddAreaForm = (props) => {

const initialFormState = { id: null, areaname: ""};
const [area, setArea] = useState(initialFormState);

const handleInputChange = (event) => {
  const { name, value } = event.target;
        //console.log(event);
  setArea({ ...area, [name]: value });
};

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!area.areaname)
          return;

        props.addArea(area);
        setArea(initialFormState);
      }}
    >
      <label>Area Name</label>
      <input
        type="text"
        name="areaname"
        value={area.areaname}
        onChange={handleInputChange}
      />

      <button>Add new Area</button>
    </form>
  );
};
export default AddAreaForm;
