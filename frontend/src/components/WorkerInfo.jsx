import axios from 'axios';
import GenericModal from './modal';
import React, { useState  } from 'react'
import EditUserModal from './EditUserModal';
// import { useContext } from 'react';


const WorkerInfo = ({ users }) => {

    const toggleModal = () => setShown(prev => !prev)
    const [shown, setShown] = useState(false)
    // const [managerName, setName] = useState('')

    const handleDeleteUser = async (userId) => {
        try {
          const response = await axios.delete(`http://localhost:3000/users/${userId}`);
          console.log('User deleted:', response.data);
        //   dispatch({ type: 'DELETE_USER', payload: userId }); 
        } catch (error) {
          console.error('Error deleting user:', error);
        } finally {

        }
      };



  return (
    // <div>WorkerInfo</div>
    <div className='table'>
    <table>
      <thead key='2'>
        <tr key='1'>
          <th key='First Name'>First Name</th>
          <th key='Last Name'>Last Name</th>
          <th key='Email'>Email</th>
          <th key='Start Date'>Start Date</th>
          <th key='Role'>Role</th>
          <th key='Salary'>Salary</th>
          <th key='Manager'>Manager</th>
          <th key='Actions'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.dateStarted}</td>
            <td>{user.role}</td>
            <td>{user.salary}</td>
            <td>{user.manager ? user.manager : 'N/A'}</td>
            <td >
              <div className='action'>
              <button className='button ' onClick={toggleModal}>Edit</button>
              <GenericModal displayModal={shown} closeModal={toggleModal}>
                <div><EditUserModal userId={user._id}/></div>
                </GenericModal>
              <button className='button'
                  onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default WorkerInfo;