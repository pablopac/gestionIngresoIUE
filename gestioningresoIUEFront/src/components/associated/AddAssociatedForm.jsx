import React, {useState} from 'react';

const AddAssociatedForm = (props) => {

  const initialFormState = { id: null, idAssociated:"", firstName:""};

  const [associated, setAssociated] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssociated({ ...associated, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!associated.idAssociated || !associated.firstName) { return; }
        props.addAssociated(associated);
        setAssociated(initialFormState);
      }}
    >
      <label>Id Associated</label>
      <input
        type='text'
        name='idAssociated'
        value={associated.idAssociated}
        onChange={handleInputChange}
      />
      <label>Associated Name</label>
      <input
        type='text'
        name='firstName'
        value={associated.firstName}
        onChange={handleInputChange}
      />
      <button>Add new Associated</button>
    </form>
  );
};

export default AddAssociatedForm;
