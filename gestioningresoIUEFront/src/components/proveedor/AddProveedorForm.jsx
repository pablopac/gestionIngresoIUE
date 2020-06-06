import React, { useState } from "react";

const AddProveedorForm = props => {
  const initialFormState = { id: null, provNit: "", provNom: "", provDescrip: "" };
  const [proveedor, setProveedor] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    //console.log(event);
    setProveedor({ ...proveedor, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!proveedor.provNit || !proveedor.provNom || !proveedor.provDescrip) return;

        props.addProveedor(proveedor);
        setProveedor(initialFormState);
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

      <button>Add new Proveedor</button>
    </form>
  );
};
export default AddProveedorForm;
