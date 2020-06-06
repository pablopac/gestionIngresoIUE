import React, { useState, useEffect } from 'react';
import './Associated.scss';
import axios from 'axios';
import AssociatedTable from './AssociatedTable';
import AddAssociatedForm from './AddAssociatedForm';
import EditAssociatedForm from './EditAssociaedForm';

const Associated = () => {
  const AssociatedData = [
    { id: 1, idAssociated: 111, firstName: 'Luis Felipe Ferrer' },
    { id: 2, idAssociated: 222, firstName: 'Estefania Muñoz Marin' },
    { id: 3, idAssociated: 333, firstName: 'Carolina Calle' },
  ];

  const [associateds, setAssociateds] = useState(AssociatedData);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = 'http://localhost:8282/associatedAPI/';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${apiUrl}associatedgetall`);
      setAssociateds(result.data.associatedList);
    };
    fetchData();
  }, []);

  const addAssociated = (associated) => {
    setShowLoading(true);
    const data = {
      id: associated.id,
      idAssociated: associated.idAssociated,
      firstName: associated.firstName,
    };
    axios.post(`${apiUrl}addassociated`, data)
      .then((result) => {
        setAssociateds([...associateds, result.data]);
      })
      .catch((_error) => setShowLoading(false));
  };

  const deleteAssociated = (id) => {
    setAssociateds(associateds.filter((associated) => associated.id !== id));
    const data = {
      id: id,
      idAssociated: '',
      firstName: '',
    };
    axios.post(`${apiUrl}associatedremove`, data)
      .then((result) => {
        //console.log(result)
      })
      .catch((_error) => setShowLoading(false));
  };

  const [editting, setEditting] = useState(false);

  const initialFormState = {
    id: null,
    idAssociated: '',
    firstName: '',
  };

  const [currentAssociated, setCurrentAssociated] = useState(initialFormState);

  const editRow = (associated) => {
    setEditting(true);
    setCurrentAssociated({
      id: associated.id,
      idAssociated: associated.idAssociated,
      firstName: associated.firstName,
    });
  };

  const updateAssociated = (id, updateAssociated) => {
    setEditting(false);
    setAssociateds(
      // eslint-disable-next-line array-callback-return
      associateds.map((associated) => {
        associated.id === id ? updateAssociated : associated;
      }),
    );
    const data = {
      id: updateAssociated.id,
      idAssociated: updateAssociated.idAssociated,
      firstName: updateAssociated.firstName,
    };
    axios.post(apiUrl + 'updateAssociated', data)
      .then((result) => {
        //console.log("Updated");
      })
      .catch((_error) => setShowLoading(false));
  };

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editting ? (
            <div>
              <h2>Edit Associated</h2>
              <EditAssociatedForm
                setEditting={setEditting}
                currentAssociated={currentAssociated}
                updateAssociated={updateAssociated}
              />
            </div>
          ) : (
            <div>
              <h2>Add Associated</h2>
              <AddAssociatedForm addAssociated={addAssociated} />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View Associateds</h2>
          <AssociatedTable
            associated={associateds}
            deleteAssociated={deleteAssociated}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};
export default Associated;
