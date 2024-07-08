import React, { useState } from 'react'

import './App.css';
import GenericModal from './components/modal';
import Header from './components/header';

function App() {

  const [shown, setShown] = useState(false)

  const toggleModal = () => setShown(prev => !prev)

  return (
    <div className="App">
      <Header />
      <div id="content">
      <button onClick={toggleModal}>Add User</button>
        <GenericModal displayModal={shown} closeModal={toggleModal}>
          <h1>Add New User</h1>
        </GenericModal>
      </div>
    </div>
  );
}

export default App;
