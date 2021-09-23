import './App.css';
import data from './data';
import { Fragment, useState } from 'react';
import ReadOnly from './readOnly';
import EditableRow from './EditableRow';

function App() {
  const [info, setInfo] = useState(data);
  const [editInfoId, setEditInfoId] = useState(null);
  const [addFormData, setFormData] = useState({
    id: '',
    name: '',
    status: '',
    age: '',
    salary: '',
  });
  const [editFormData, setEditFormData] = useState({
    name: '',
    status: '',
    age: '',
    salary: '',
  });
  // delete item
  const onDelete = (id) => {
    setInfo(info.filter((element) => element.id !== id));
  };
  // edit item
  const handleEditClick = (event, info) => {
    event.preventDefault();
    setEditInfoId(info.id);

    const formValues = {
      name: info.name,
      status: info.status,
      age: info.age,
      salary: info.salary,
    };
    setEditFormData(formValues);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.nativeEvent.timeStamp);
    const newContact = {
      id: event.nativeEvent,
      name: addFormData.name,
      status: addFormData.status,
      age: addFormData.age,
      salary: addFormData.salary,
    };

    const newContacts = [...info, newContact];
    setInfo(newContacts);
  };
  // hanle edited info
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedInfo = {
      id: editInfoId,
      name: editFormData.name,
      status: editFormData.status,
      age: editFormData.age,
      salary: editFormData.salary,
    };
    const newInfo = [...info];
    const index = info.findIndex((item) => item.id === editInfoId);
    newInfo[index] = editedInfo;
    setInfo(newInfo);
    setEditInfoId(null);
  };
  const handleCancelBtn = () => {
    setEditInfoId(null);
  };

  return (
    <div className='App'>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
          required
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='status'
          id='status'
          placeholder='Enter your status'
          required
          onChange={handleAddFormChange}
        />
        <input
          type='number'
          name='age'
          id='age'
          placeholder='Enter your age'
          required
          onChange={handleAddFormChange}
        />
        <input
          type='number'
          name='salary'
          id='salary'
          placeholder='Enter your salary'
          required
          onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {info.map((item, index) => (
              <Fragment>
                {editInfoId === item.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelBtn={handleCancelBtn}
                  />
                ) : (
                  <ReadOnly
                    item={item}
                    index={index}
                    onDelete={onDelete}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
