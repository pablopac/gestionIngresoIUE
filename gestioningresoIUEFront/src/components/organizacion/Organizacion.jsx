import React, { useState, useEffect } from 'react';
import './Organizacion.scss';
import axios from 'axios';
import OrganizacionTable from './OrganizacionTable';
import AddOrganizacionForm from './AddOrganizacion';
import EditOrganizacionForm from './EditOrganizacion';

const Organizacion = () => {
  const OrganizacionData = [
    { id: 1, name: 'Juan', Organization_id: 'simple' },
    { id: 2, name: 'Perez', Organization_id: 'simple' },
    { id: 3, name: 'guerra', Organization_id: 'simple' },
  ];
  const [Organizacion, setOrganizacion] = useState(OrganizacionData);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = 'http://localhost:8282/organizacionAPI/';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${apiUrl}organizaciongetall`);
      setOrganizacion(result.data.organizacionlist);
    };
    fetchData();
  }, []);

  const addorganizacion = (Organizacion) => {
    setShowLoading(true);
    const data = {
      id: Organizacion.id,
      name: Organizacion.name,
      Organization_id: Organizacion.Organization_id,
    };
    axios
      .post(`${apiUrl}addorganizacion`, data)
      .then((result) => {
        setOrganizacion([...Organizacion, result.data]);
      })
      .catch((error) => setShowLoading(false));

    /*
    Organizacion.id = Organizacion.length + 1;
    setOrganizacion([...Organizacion, Organizacion]);

    const data = {
      id: parseInt(Organizacion.id),
      name: Organizacion.name,
      Organization_id: Organizacion.Organization_id,
      email: Organizacion.email,
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

  const deleteOrganizacion = (id) => {
    setOrganizacion(Organizacion.filter((Organizacion) => Organizacion.id !== id));
    const data = {
      id,
      name: '',
      Organization_id: '',
    };
    axios
      .post(`${apiUrl}organizacionremove`, data)
      .then((result) => {
        //console.log(result);
      })
      .catch((error) => setShowLoading(false));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    name: '',
    Organization_id: '',
  };

  const [currentOrganizacion, setCurrentOrganizacion] = useState(initialFormState);

  const editRow = (Organizacion) => {
    setEditing(true);
    setCurrentOrganizacion({
      id: Organizacion.id,
      name: Organizacion.name,
      Organization_id: Organizacion.Organization_id,
    });
  };

  const updateOrganizacion = (id, updateorganizacion) => {
    setEditing(false);
    setOrganizacion(
      Organizacion.map((Organizacion) => (Organizacion.id === id ? updateorganizacion : Organizacion)),
    );
    const data = {
      id: updateorganizacion.id,
      name: updateorganizacion.name,
      Organization_id: updateorganizacion.Organization_id,
    };
    axios
      .post(`${apiUrl}updateorganizacion`, data)
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
              <h2>Edit Organizacion</h2>
              <EditOrganizacionForm
                setEditing={setEditing}
                currentOrganizacion={currentOrganizacion}
                updateOrganizacion={updateOrganizacion}
              />
            </div>
          ) : (
            <div>
              <h2>Add Organizacion</h2>
              <AddOrganizacionForm addorganizacion={addorganizacion} />
            </div>
          )}
        </div>

        <div className='flex-large'>
          <h2>View Organizacion</h2>
          <OrganizacionTable
            Organizacion={Organizacion}
            deleteOrganizacion={deleteOrganizacion}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default Organizacion;

