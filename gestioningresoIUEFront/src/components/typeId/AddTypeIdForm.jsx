import React, { useState } from "react";

const AddTypeIdForm = (props) => {

const initialFormState = { id: null, description: ""};
const [typeid, setTypeId] = useState(initialFormState);

const handleInputChange = (event) => {
  const { name, value } = event.target;
        //console.log(event);
  setTypeId({ ...typeid, [name]: value });
};

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!typeid.description )
          return;

        props.addTypeId(typeid);
        setTypeId(initialFormState);
      }}
    >
      <label>Type id</label>
      <input
        type="text"
        name="description"
        value={typeid.description}
        onChange={handleInputChange}
      />
     
      <button>Add new typeid</button>
    </form>
  );
};
export default AddTypeIdForm;
