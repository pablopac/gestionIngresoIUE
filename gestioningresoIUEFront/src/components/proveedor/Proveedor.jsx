import React, { useState, useEffect } from "react";
import "./Proveedor.scss";
import ProveedorTable from "./ProveedorTable";
import AddProveedorForm from "./AddProveedorForm";
import EditProveedorForm from "./EditProveedorForm";
import axios from "axios";

const Proveedor = () => {
  const ProveedoresData = [
    { id: 100, provNit: "12312", provNom: "Tania", provDescrip: "Tania" },
    { id: 200, provNit: "14784", provNom: "Prov", provDescrip: "Tania" },
    { id: 300, provNit: "46865", provNom: "Data", provDescrip: "Tania" }
  ];
  const [proveedores, setProveedor] = useState(ProveedoresData);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:8282/proveedorAPI/";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl + "proveedorgetall");
      setProveedor(result.data.proveedorList);
    };
    fetchData();
  }, []);

  const addProveedor = proveedor => {
    setShowLoading(true);
    const data = {
      id: proveedor.id,
      provNit: proveedor.provNit,
      provNom: proveedor.provNom,
      provDescrip: proveedor.provDescrip
    };
    axios
      .post(apiUrl + "addproveedor", data)
      .then(result => {
        setProveedor([...proveedor, result.data]);
      })
      .catch(error => setShowLoading(false));

    /*
      employee.id = employees.length + 1;
      setEmployees([...employees, employee]);
  
      const data = {
        id: parseInt(employee.id),
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
      };
  
      axios
        .post(apiUrl, data)
        .then((result) => {
          //props.history.push('/show/' + result.data._id)
          console.log("Consumo del Servicio 2");
          console.log(result);
        })
        .catch((error) => setShowLoading(false));
  */
  };

  const deleteProveedor = id => {
    setProveedor(proveedores.filter(proveedor => proveedor.id !== id));
    const data = {
      id: proveedor.id,
      provNit: proveedor.provNit,
      provNom: proveedor.provNom,
      provDescrip: proveedor.provDescrip
    };
    axios
      .post(apiUrl + "proveedorremove", data)
      .then(result => {
        //console.log(result);
      })
      .catch(error => setShowLoading(false));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    provNit: "",
    provNom: "",
    provDescrip: ""
  };

  const [currentProveedor, setCurrentProveedor] = useState(initialFormState);

  const editRow = proveedor => {
    setEditing(true);
    setCurrentProveedor({
      id: proveedor.id,
      provNit: proveedor.provNit,
      provNom: proveedor.provNom,
      provDescrip: proveedor.provDescrip
    });
  };

  const updateProveedor = (id, updatedProveedor) => {
    setEditing(false);
    setProveedor(
      proveedores.map(proveedor =>
        proveedor.id === id ? updatedProveedor : proveedor
      )
    );
    const data = {
      id: updatedProveedor.id,
      provNit: updatedProveedor.provNit,
      provNom: updatedProveedor.provNom,
      provDescrip: updatedProveedor.provDescrip
    };
    axios
      .post(apiUrl + "updateproveedor", data)
      .then(result => {
        //console.log("Updated");
      })
      .catch(error => setShowLoading(false));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Proveedor</h2>
              <EditProveedorForm
                setEditing={setEditing}
                currentProveedor={currentProveedor}
                updateProveedor={updateProveedor}
              />
            </div>
          ) : (
            <div>
              <h2>Add Proveedor</h2>
              <AddProveedorForm addProveedor={addProveedor} />
            </div>
          )}
        </div>

        <div className="flex-large">
          <h2>View Proveedor</h2>
          <ProveedorTable
            proveedores={proveedores}
            deleteProveedor={deleteProveedor}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default Proveedor;
