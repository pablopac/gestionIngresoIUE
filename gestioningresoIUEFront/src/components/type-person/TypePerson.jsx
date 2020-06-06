/* eslint-disable no-confusing-arrow */
/* eslint-disable handle-callback-err */
/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TypePerson.scss';
import EmployeeTable from './TypePersonTable';
import AddEmployeeForm from './AddTypePersonForm';
import EditEmployeeForm from './EditTypePersonForm';
import TypePersonTable from './TypePersonTable';

const TypePerson = () => {
  const TypePersonData = [
    { id: 1, tp_id: '1', name: 'Admin' },
    { id: 2, tp_id: '2', name: 'Student' },
    { id: 3, tp_id: '3', name: 'Teacher' },
  ];
  const [typePerson, setTypePerson] = useState(TypePersonData);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = 'http://localhost:3000/typePersonAPI/';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl + 'tipopersonagetall');
      setEmployees(result.data.employeeList);
    };
    fetchData();
  }, []);

  const addTypePerson = (typePerson) => {
    setShowLoading(true);
    const data = {
      id: typePerson.id,
      tp_id: typePerson.tp_id,
      name: typePerson.name,
    };
    axios
      .post(apiUrl + 'addtipopersona', data)
      .then((result) => {
        setEmployees([...employees, result.data]);
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

  const deleteEmployee = (id) => {
    setEmployees(typePersons.filter((typePerson) => typePerson.id !== id));
    const data = {
      id: id,
      tp_id: '',
      name: '',
    };
    axios
      .post(apiUrl + 'tipopersonaremove', data)
      .then((result) => {
        //console.log(result);
      })
      .catch((error) => setShowLoading(false));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    tp_id: '',
    name: '',
  };

  const [currentEmployee, setCurrentEmployee] = useState(initialFormState);

  const editRow = (employee) => {
    setEditing(true);
    setCurrentEmployee({
      id: employee.id,
      tp_id: employee.tp_id,
      name: employee.name,
    });
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEditing(false);
    setEmployees(
      employees.map((typePerson) => typePerson.id === id ? updatedEmployee : typePerson)
    );
    const data = {
      id: updatedEmployee.id,
      tp_id: updatedEmployee.tp_id,
      name: updatedEmployee.name,
    };
    axios
      .post(apiUrl + 'updatetipopersona', data)
      .then((result) => {
        //console.log("Updated");
      })
      .catch((error) => setShowLoading(false));
  };

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit Employee</h2>
              <EditEmployeeForm
                setEditing={setEditing}
                currentEmployee={currentEmployee}
                updateEmployee={updateEmployee}
              />
            </div>
          ) : (
            <div>
              <h2>Add employee</h2>
              <addTypePerson addEmployee={addEmployee} />
            </div>
          )}
        </div>

        <div className='flex-large'>
          <h2>View Employees</h2>
          <TypePersonTable
            employees={employees}
            deleteEmployee={deleteEmployee}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default TypePerson;
