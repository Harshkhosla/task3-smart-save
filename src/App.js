import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import DashBoard from './DashBoard';
import Smart from './smartserv-logo.png';
import './App.css';

function App() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    // Email format validation for username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.username)) {
      alert('Invalid email format');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
    if (!passwordRegex.test(formData.password)) {
      alert('Invalid password format');
      return;
    }

    // Check if the password is "SmartServTest@123"
    if (formData.password === 'SmartServTest@123') {
      navigate('/dashboard');
    } else {
      // Trigger email sending action
      const emailAddress = 'support@smartserv.io';
      const subject = 'Feedback';
      const body = 'Resetting the password';
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  }

  return (
    <div>
      <div className="wrapper">
        <div className="login-container">
          <div>
            <img className="smartserv_logo" src={Smart} alt="SmartServ Logo" />
          </div>
          <form id="login-form" onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={changeHandler}
                required
              />
            </div>
            <button type="submit" className="login">
              Login
            </button>
            <div></div>
          </form>
        </div>
      </div>
      {/* <DashBoard /> */}
    </div>
  );
}

export default App;
