import React from 'react';

const ReadOnly = ({ item, index, onDelete, handleEditClick }) => {
  return (
    <tr key={item.id}>
      <td> {index} </td>
      <td> {item.name} </td>
      <td> {item.status} </td>
      <td> {item.age} </td>
      <td> {item.salary}$</td>
      <td>
        <button
          className='btn edit'
          onClick={(event) => handleEditClick(event, item)}
        >
          edit
        </button>
        <button onClick={() => onDelete(item.id)} className='btn del'>
          delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;
