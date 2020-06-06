import React from "react";

const ProveedorTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>provNit</th>
        <th>provNom</th>
        <th>provDescrip</th>
      </tr>
    </thead>
    <tbody>
      {undefined !== props.proveedores && props.proveedores.length > 0 ? (
        props.proveedores.map((proveedor) => (
          <tr key={proveedor.id.toString()}>
            <td>{proveedor.id}</td>
            <td>{proveedor.provNit}</td>
            <td>{proveedor.provNom}</td>
            <td>{proveedor.provDescrip}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(proveedor);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteProveedor(proveedor.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Proveedor</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ProveedorTable;
