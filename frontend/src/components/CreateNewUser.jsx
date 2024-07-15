import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUserForm = () => {
    const tempData = {
        "firstName": "Johana",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "dateStarted": "2024-07-16T",
        "salary": 100000,
        "role": "worker" 
      }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateStarted: '',
    salary: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users', formData);
      console.log('User created successfully:', response.data);
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
    <form className="newUserModal" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="dateStarted">Start Date:</label>
      <input
        type="date"
        id="dateStarted"
        name="dateStarted"
        value={formData.dateStarted}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="salary">Salary:</label>
      <input
        type="number"
        id="salary"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
