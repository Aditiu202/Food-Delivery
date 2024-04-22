import React from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import {useState} from 'react'
const LoginPopUp = ({setshowlogin}) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="loginPopUp">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt="error"
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" />
          )}

          <input type="text" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </div>
        <button className="login-popup-button">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , I agree to the term of use & privacy policy</p>
        </div>
        {currState === "Login" ? 
          <p className="login-popup-para">
            Create a new Account
            <span onClick={() => setCurrState("Sign Up")}> Click here</span>
          </p>
        : 
          <p className="login-popup-para">
            Already have a account?
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        }
      </div>
    </div>
  );
};

export default LoginPopUp