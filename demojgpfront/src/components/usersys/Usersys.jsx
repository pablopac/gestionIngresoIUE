import React, { useState, useEffect } from "react";
import './Usersys.scss';
import UsersysTable from './UsersysTable';
import AddUsersysForm from './AddUsersysForm';
import EditUsersysForm from './EditUsersysForm';
import axios from 'axios';


const Usersys = () => {
    const UsersysData = [
      { id: 1, username: "Juan", password: "Tania"},
      { id: 2, username: "Perez", password: "Craig"},
      { id: 3, username: "guerra", password: "Ben"},
    ];
    const [usersyss, setUsersys] = useState(UsersysData);
    const [showLoading, setShowLoading] = useState(true);
    const apiUrl = "http://localhost:8282/usersysAPI/";
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(apiUrl + "usersysgetall");
        setUsersys(result.data.usersysList);
      };
      fetchData();
    }, []);
  
  
  
    const addUsersys = (usersys) => {
      setShowLoading(true);
      const data = {
        id: usersys.id,
        username: usersys.username,
        password: usersys.password,
      };
      axios
        .post(apiUrl + "addusersys", data)
        .then((result) => {
          setUsersys([...usersys, result.data]);
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
  
    const deleteUsersys = (id) => {
      setUsersys(usersyss.filter((usersys) => usersys.id !== id));
      const data = {
        id: id,
        username: "",
        password: ""
      };
      axios
        .post(apiUrl + "usersysremove", data)
        .then((result) => {
          //console.log(result);
        })
        .catch((error) => setShowLoading(false));
    };
  
    const [editing, setEditing] = useState(false);
  
    const initialFormState = {
      id: null,
      username: "",
      password: ""
    };
  
    const [currentUsersys, setCurrentUsersys] = useState(initialFormState);
  
    const editRow = (usersys) => {
      setEditing(true);
      setCurrentUsersys({
        id: usersys.id,
        username: usersys.username,
        password: usersys.password
      });
    };
  
    const updateUsersys = (id, updatedUsersys) => {
      setEditing(false);
      setUsersys(
        usersyss.map((usersys) =>
        usersys.id === id ? updatedUsersys : usersys
        )
      );
      const data = {
        id: updatedUsersys.id,
        username: updatedUsersys.username,
        password: updatedUsersys.password
      };
      axios
        .post(apiUrl + "updateusersys", data)
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
                <h2>Edit Usersys</h2>
                <EditUsersysForm
                  setEditing={setEditing}
                  currentUsersys={currentUsersys}
                  updateUsersys={updateUsersys}
                />
              </div>
            ) : (
              <div>
                <h2>Add Usersys</h2>
                <AddUsersysForm addUsersys={addUsersys} />
              </div>
            )}
          </div>
  
          <div className="flex-large">
            <h2>View Usersys</h2>
            <UsersysTable
              usersyss={usersyss}
              deleteUsersys={deleteUsersys}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Usersys;
  