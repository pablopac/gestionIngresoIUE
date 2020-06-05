import React, { useState, useEffect } from "react";

const EditTypeIdForm = (props) => {
  const [typeid, setTypeId] = useState(props.currentTypeId);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTypeId({ ...typeid, [name]: value });
  };

  useEffect(() => {
    setTypeId(props.currentTypeId);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTypeId(typeid.id, typeid);
      }}
    >
      <label>Type Id</label>
      <input
        type="text"
        name="description"
        value={typeid.description}
        onChange={handleInputChange}
      />
   
      <button>Update typeid</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTypeIdForm;
