import React, { useState, useEffect } from "react";

const EditAreaForm = (props) => {
  const [area, setArea] = useState(props.currentArea);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArea({ ...area, [name]: value });
  };

  useEffect(() => {
    setArea(props.currentArea);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateArea(area.id, area);
      }}
    >
      <label>Area Name</label>
      <input
        type="text"
        name="areaname"
        value={area.areaname}
        onChange={handleInputChange}
      />

      <button>Update area</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditAreaForm;
