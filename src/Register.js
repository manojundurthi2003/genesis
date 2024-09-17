import React, { useState } from 'react';
import './UserRegistrationForm.css'; // Import the CSS file

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Define the formData object with all required fields
      const dataToSend = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        address: formData.address
      };
  
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend), // Send form data
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log(result.message); // Show success message
        alert('Registration successful!');
      } else {
        console.error('Error:', result.error);
        alert('Failed to register user.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="registration-form-container">
      <h1 className="registration-form-title">User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="registration-form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="registration-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="registration-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="registration-form-group">
          <label htmlFor="phoneNumber">Phone Number (Optional)</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="registration-form-group">
          <label htmlFor="address">Address (Optional)</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="registration-form-button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
