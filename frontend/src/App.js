import React, { useState, useEffect  } from 'react'
import './App.css';
import GenericModal from './components/modal';
import Header from './components/header';
import axios from 'axios';
import WorkerInfo from './components/WorkerInfo';
import CreateNewUser from './components/CreateNewUser';

function App() {

  const [shown, setShown] = useState(false)

  const toggleModal = () => setShown(prev => !prev)

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []); 





  return (
    <div className="App">
      <Header />
      <div id="content">
      <button className='button' onClick={toggleModal}>Add User</button>
        <GenericModal displayModal={shown} closeModal={toggleModal}>
          <CreateNewUser />
        </GenericModal>

        <WorkerInfo users={users} />
      </div>
    </div>
  );
}

export default App;
