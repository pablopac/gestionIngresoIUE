import React from 'react';

const AssociatedTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>ID BD</th>
                <th>idAssociated</th>
                <th>firstName</th>
            </tr>
        </thead>
        <tbody>
            {undefined !== props.associateds && props.associateds.length > 0 ? (
                props.associateds.map((associated) => (
                    <tr key={associated.id.toString()}>
                        <td>{associated.id}</td>
                        <td>{associated.idAssociated}</td>
                        <td>{associated.firstName}</td>
                        <td>
                            <button onClick={() => {
                                props.editRow(associated);
                            }} 
                            className="button muted-button">
                                Edit
                            </button>
                            <button onClick={() => 
                                props-deleteAssociated(associated.id)} 
                                className="button muted-button">
                                    Delete
                                </button>
                        </td>
                    </tr>
                ))
            ) : (
            <tr>
                <td colSpan={3}> No Associated </td>
            </tr>
            )}
        </tbody>
    </table>
);

export default AssociatedTable;