import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ userId }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateStarted: '',
    role: '',
    salary: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []); 

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/users/${userId}`, formData);
      console.log('User update successfully:', response.data);
      // Clear the form after successful creation (optional)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        dateStarted: '',
        role: '',
        salary: '',
      });
      window.location.reload();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


  return (
    <form className='newUserModal' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder={user.firstName}
        />
      </div>
      <div>
        <label htmlFor="name">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder={user.lastName}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder={user.email}
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          placeholder={user.role}
        />
      </div>
      <div>
        <label htmlFor="role">Salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
          placeholder={user.salary}
        />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};

export default UserForm;