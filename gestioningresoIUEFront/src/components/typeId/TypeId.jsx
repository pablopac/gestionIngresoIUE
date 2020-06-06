import React, { useState, useEffect } from "react";
import "./TypeId.scss";
import TypeIdTable from "./TypeIdTable";
import AddTypeIdForm from "./AddTypeIdForm";
import EditTypeIdForm from "./EditTypeIdForm";
import axios from "axios";

const TypeId = () => {
  const TypeIdData = [
    { id: 1, description: "Juan" },
    { id: 2, description: "Perez" },
    { id: 3, description: "guerra" },
  ];
  const [typeid, setTypeId] = useState(TypeIdData);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:8282/pos/";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl + "getalltypeid");
      setTypeId(result.data.typeIdList);
      console.log(result.data.typeIdList)
    };
    fetchData();
  }, []);



  const addTypeId = (typeid) => {
    setShowLoading(true);
    const data = {
      id: typeid.id,
      description: typeid.description,

    };
    axios
      .post(apiUrl + "addtypeid", data)
      .then((result) => {
        setTypeId([...typeid, result.data]);
      })
      .catch((error) => setShowLoading(false));

    /*
    typeid.id = typeid.length + 1;
    setTypeId([...typeid, typeid]);

    const data = {
      id: parseInt(typeid.id),
      firstName: typeid.firstName,
      lastName: typeid.lastName,
      email: typeid.email,
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

  const deleteTypeId = (id) => {
    setTypeId(typeid.filter((typeid) => typeid.id !== id));
    const data = {
      id: id,
      description: ""
    };
    axios
      .post(apiUrl + "removetypeid", data)
      .then((result) => {
        //console.log(result);
      })
      .catch((error) => setShowLoading(false));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    description: "",

  };

  const [currentTypeId, setCurrentTypeId] = useState(initialFormState);

  const editRow = (typeid) => {
    setEditing(true);
    setCurrentTypeId({
      id: typeid.id,
      description: typeid.description,

    });
  };

  const updateTypeId = (id, updatedTypeId) => {
    setEditing(false);
    setTypeId(
      typeid.map((typeid) =>
        typeid.id === id ? updatedTypeId : typeid
      )
    );
    const data = {
      id: updatedTypeId.id,
      description: updatedTypeId.description,

    };
    axios
      .post(apiUrl + "updatetypeid", data)
      .then((result) => {
        //console.log("Updated");
      })
      .catch((error) => setShowLoading(false));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit TypeId</h2>
              <EditTypeIdForm
                setEditing={setEditing}
                currentTypeId={currentTypeId}
                updateTypeId={updateTypeId}
              />
            </div>
          ) : (
            <div>
              <h2>Add typeid</h2>
              <AddTypeIdForm addTypeId={addTypeId} />
            </div>
          )}
        </div>

        <div className="flex-large">
          <h2>View Type Id</h2>
          <TypeIdTable
            typeid={typeid}
            deleteTypeId={deleteTypeId}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default TypeId;


/* import React from "react";
import './TypeId.scss';
import TypeIdTable from "./TypeIdTable";

const TypeId = () => (
  <div className="container">
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        <h2>Add TypeId</h2>
        <form>
          <label>TypeId</label>
          <input type="text" name="description" value="" />
          <button>Add new description</button>
        </form>
      </div>
      <div className="flex-large">
        <h2>View TypeId</h2>
        <TypeIdTable />
      </div>
    </div>
  </div>
);
export default TypeId;

/* const TypeId = () => (
    <div className="SinEspecificar">
        HOLA EL COMPONENTE TYPEID
    </div>
)
export default TypeId; */
