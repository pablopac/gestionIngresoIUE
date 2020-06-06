import React, { useState, useEffect } from "react";

const EditProveedorForm = props => {
  const [proveedor, setProveedor] = useState(props.currentProveedor);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  useEffect(() => {
    setProveedor(props.currentProveedor);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateProveedor(proveedor.id, proveedor);
      }}
    >
      <label>provNit</label>
      <input
        type="text"
        name="provNit"
        value={proveedor.provNit}
        onChange={handleInputChange}
      />
      <label>provNom</label>
      <input
        type="text"
        name="provNom"
        value={proveedor.provNom}
        onChange={handleInputChange}
      />
      <label>provDescrip</label>
      <input
        type="text"
        name="provDescrip"
        value={proveedor.provDescrip}
        onChange={handleInputChange}
      />

      <button>Update proveedor</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditProveedorForm;
