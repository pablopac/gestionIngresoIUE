import React, { useState, useEffect } from "react";
import './Area.scss';
import AreaTable from './AreaTable';
import AddAreaForm from './AddAreaForm';
import EditAreaForm from './EditAreaForm';
import axios from 'axios';


const Area = () => {
    const AreaData = [
      { id: 1, areaname: "Juan"},
      { id: 2, areaname: "Perez"},
      { id: 3, areaname: "guerra"},
    ];
    const [areas, setArea] = useState(AreaData);
    const [showLoading, setShowLoading] = useState(true);
    const apiUrl = "http://localhost:8282/areaAPI/";
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(apiUrl + "areagetall");
        setArea(result.data.areaList);
      };
      fetchData();
    }, []);
  
  
  
    const addArea = (area) => {
      setShowLoading(true);
      const data = {
        id: area.id,
        areaname: area.areaname
      };
      axios
        .post(apiUrl + "addarea", data)
        .then((result) => {
          setArea([...area, result.data]);
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
  
    const deleteArea = (id) => {
      setArea(areas.filter((area) => area.id !== id));
      const data = {
        id: id,
        areaname: ""
      };
      axios
        .post(apiUrl + "arearemove", data)
        .then((result) => {
          //console.log(result);
        })
        .catch((error) => setShowLoading(false));
    };
  
    const [editing, setEditing] = useState(false);
  
    const initialFormState = {
      id: null,
      areaname: ""
    };
  
    const [currentArea, setCurrentArea] = useState(initialFormState);
  
    const editRow = (area) => {
      setEditing(true);
      setCurrentArea({
        id: area.id,
        areaname: area.areaname
      });
    };
  
    const updateArea = (id, updatedArea) => {
      setEditing(false);
      setArea(
        areas.map((area) =>
        area.id === id ? updatedArea : area
        )
      );
      const data = {
        id: updatedArea.id,
        areaname: updatedArea.areaname
      };
      axios
        .post(apiUrl + "updatearea", data)
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
                <h2>Edit Area</h2>
                <EditAreaForm
                  setEditing={setEditing}
                  currentArea={currentArea}
                  updateArea={updateArea}
                />
              </div>
            ) : (
              <div>
                <h2>Add Area</h2>
                <AddAreaForm addArea={addArea} />
              </div>
            )}
          </div>
  
          <div className="flex-large">
            <h2>View Area</h2>
            <AreaTable
              areas={areas}
              deleteArea={deleteArea}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Area;
  