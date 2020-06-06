/* eslint-disable handle-callback-err */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './vehicle.scss';
import axios from 'axios';
import VehicleTable from './VehicleTable';
import AddvehicleForm from './AddvehicleForm';
import EditvehicleForm from './EditvehicleForm';

const Vehicle = () => {
  const VehicleData = [
    { id: 1, tipo: 'Carro', license: 'EKN575' },
    { id: 2, tipo: 'Moto', license: 'MQI27B' },
    { id: 3, tipo: 'Cicla', license: 'SPECIALIZED' },
  ];
  const [vehicles, setVehicle] = useState(VehicleData);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = 'http://localhost:8282/vehicleAPI/';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${apiUrl}vehiclegetall`);
      setVehicle(result.data.vehicleList);
    };
    fetchData();
  }, []);

  const addVehicle = (vehicle) => {
    setShowLoading(true);
    const data = {
      id: vehicle.id,
      tipo: vehicle.tipo,
      license: vehicle.license,
    };
    axios
      .post(`${apiUrl}addvehicle`, data)
      .then((result) => {
        setVehicle([...vehicle, result.data]);
      })
      .catch((error) => setShowLoading(false));

    /*
    vehicle.id = vehicle.length + 1;
    setvehicle([...vehicle, vehicle]);

    const data = {
      id: parseInt(vehicle.id),
      : vehicle.,
      tipo: vehicle.tipo,
      license: vehicle.license,
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

  const deleteVehicle = (id) => {
    setVehicle(vehicle.filter((vehicle) => vehicle.id !== id));
    const data = {
      id,
      tipo: '',
      license: '',
    };
    axios
      .post(`${apiUrl}vehicleremove`, data)
      .then((result) => {
        //console.log(result);
      })
      .catch((error) => setShowLoading(false));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,

    tipo: '',
    license: '',
  };

  const [currentvehicle, setCurrentvehicle] = useState(initialFormState);

  const editRow = (vehicle) => {
    setEditing(true);
    setCurrentVehicle({
      id: vehicle.id,
      tipo: vehicle.tipo,
      license: vehicle.license,
    });
  };

  const updateVehicle = (id, updatedVehicle) => {
    setEditing(false);
    setVehicle(
      vehicle.map((vehicle) => (vehicle.id === id ? updatedVehicle : vehicle)),
    );
    const data = {
      id: updatedVehicle.id,
      tipo: updatedVehicle.tipo,
      license: updatedVehicle.license,
    };
    axios
      .post(`${apiUrl}updatevehicle`, data)
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
              <h2>Edit vehicle</h2>
              <EditvehicleForm
                setEditing={setEditing}
                currentVehicle={currentVehicle}
                updateVehicle={updateVehicle}
              />
            </div>
          ) : (
            <div>
              <h2>Add vehicle</h2>
              <AddvehicleForm addVehicle={addVehicle} />
            </div>
          )}
        </div>

        <div className='flex-large'>
          <h2>View vehicle</h2>
          <VehicleTable
            vehicles={vehicles}
            deleteVehicle={deleteVehicle}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
