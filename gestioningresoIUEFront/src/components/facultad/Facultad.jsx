import React, { useState, useEffect } from "react";
import './Facultad.scss';
import FacultadTable from './FacultadTable';
import AddFacultadForm from './AddFacultadForm';
import EditFacultadForm from './EditFacultadForm';
import axios from 'axios';


const Facultad = () => {
    const FacultadData = [
      { id: 1, facultyname: "Juan"},
      { id: 2, facultyname: "Perez"},
      { id: 3, facultyname: "guerra"},
    ];
    const [facultades, setFacultad] = useState(FacultadData);
    const [showLoading, setShowLoading] = useState(true);
    const apiUrl = "http://localhost:8282/facultadAPI/";
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(apiUrl + "facultadgetall");
        setFacultad(result.data.facultadList);
      };
      fetchData();
    }, []);
  
  
  
    const addFacultad = (facultad) => {
      setShowLoading(true);
      const data = {
        id: facultad.id,
        facultyname: facultad.facultyname
      };
      axios
        .post(apiUrl + "addfacultad", data)
        .then((result) => {
          setFacultad([...facultad, result.data]);
        })
        .catch((error) => setShowLoading(false));
  
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
  
    const deleteFacultad = (id) => {
      setFacultad(facultades.filter((facultad) => facultad.id !== id));
      const data = {
        id: id,
        facultyname: ""
      };
      axios
        .post(apiUrl + "facultadremove", data)
        .then((result) => {
          //console.log(result);
        })
        .catch((error) => setShowLoading(false));
    };
  
    const [editing, setEditing] = useState(false);
  
    const initialFormState = {
      id: null,
      facultyname: ""
    };
  
    const [currentFacultad, setCurrentFacultad] = useState(initialFormState);
  
    const editRow = (facultad) => {
      setEditing(true);
      setCurrentFacultad({
        id: facultad.id,
        facultyname: facultad.facultyname
      });
    };
  
    const updateFacultad = (id, updatedFacultad) => {
      setEditing(false);
      setFacultad(
        facultades.map((facultad) =>
        facultad.id === id ? updatedFacultad : facultad
        )
      );
      const data = {
        id: updatedFacultad.id,
        facultyname: updatedFacultad.facultyname
      };
      axios
        .post(apiUrl + "updatefacultad", data)
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
                <h2>Edit Facultad</h2>
                <EditFacultadForm
                  setEditing={setEditing}
                  currentFacultad={currentFacultad}
                  updateFacultad={updateFacultad}
                />
              </div>
            ) : (
              <div>
                <h2>Add Facultad</h2>
                <AddFacultadForm addFacultad={addFacultad} />
              </div>
            )}
          </div>
  
          <div className="flex-large">
            <h2>View Facultad</h2>
            <FacultadTable
              facultades={facultades}
              deleteFacultad={deleteFacultad}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Facultad;
  