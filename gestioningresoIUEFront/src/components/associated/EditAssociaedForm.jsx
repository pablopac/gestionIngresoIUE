import React, { useState, useEffect } from 'react';

const EditAssociatedForm = (props) => {
    const [associated, setAssociated] = useState(props.currentAssociated);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAssociated({ ...associated, [name]: value });
    };

    useEffect(() => {
        setAssociated(props.currentAssociated);
    }, [props]);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.updateAssociated(associated.id, associated);
            }}
            >
                <label>Id Associated</label>
                <input
                    type="text"
                    name="idAssociated"
                    value={associated.id_associated}
                    onChange={handleInputChange}
                />
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={associated.firstName}
                    onChange={handleInputChange}
                    />
                <button>Update Associated</button>
                <button
                    onClick={() => props.setEditing(false)}
                    className="button muted-button"
                    >
                        Cancel
                    </button>
            </form>
    );
};

export default EditAssociatedForm;