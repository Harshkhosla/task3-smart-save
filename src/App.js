  import React, { useState } from "react";
  import { Link , useNavigate} from "react-router-dom";

  import DashBoard from './DashBoard';
  import Smart from "./smartserv-logo.png";
  import "./App.css";

  function App() {
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: "",
      password: ""
    });

    function changeHandler(event) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value
        };
      });
    }

    function submitHandler(event) {
      event.preventDefault();
      console.log(formData);
      if(formData.password==="SmartServTest@123"){
          // navigate("/dashboard");
      }else{
        
        const emailAddress = "support@smartserv.io";
        const subject = "Feedback";
        const body = " resetting the password";
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        <a href={mailtoLink}>Send Email</a>
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
              <div>
                {/* <Link to="#" id="forgot-password">
                  Forgot your password?
                </Link> */}
              </div>
            </form>
          </div>
        </div>
        {/* <DashBoard /> */}
      </div>
    );
  }

  export default App;
