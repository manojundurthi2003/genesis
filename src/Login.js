import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirection

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result.message); // Show success message
        alert('Login successful!');
        
        // Store login state (you can use localStorage or state management)
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to AddResearchesPage
        navigate('/add-research');
      } else {
        console.error('Error:', result.error);
        alert('Failed to login: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>

        <div className="extra-links">
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <p>
            Don't have an account?{' '}
            <Link to="/Register" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
