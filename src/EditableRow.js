import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelBtn,
}) => {
  return (
    <tr>
      <td>
        <input disabled />
      </td>
      <td>
        <input
          type='text'
          required
          placeholder='Enter a name...'
          onChange={handleEditFormChange}
          name='name'
          value={editFormData.name}
        />
      </td>
      <td>
        <input
          type='text'
          required
          placeholder='Enter a status...'
          onChange={handleEditFormChange}
          name='status'
          value={editFormData.status}
        />
      </td>
      <td>
        <input
          type='number'
          required
          placeholder='Enter a age...'
          onChange={handleEditFormChange}
          name='age'
          value={editFormData.age}
        />
      </td>
      <td>
        <input
          type='number'
          required
          placeholder='Enter a salary...'
          onChange={handleEditFormChange}
          name='salary'
          value={editFormData.salary}
        />
      </td>
      <td>
        <button type='submit'>Save</button>
        <button onClick={handleCancelBtn}> Cancel </button>
      </td>
    </tr>
  );
};

export default EditableRow;
