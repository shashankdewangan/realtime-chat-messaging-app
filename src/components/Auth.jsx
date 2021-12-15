import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import signinImage from "../assets/signup.jpg";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = () => {};
  const switchMode = () => {
      setIsSignup((prevIsSignup) => ! prevIsSignup);
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={() => {}}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  placeholder="Full Name"
                  name="fullName"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                placeholder="username"
                name="username"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  placeholder="Phone Number"
                  name="phoneNumber"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL"> Avatar URL</label>
                <input
                  placeholder="Phone Number"
                  name="avatarURL"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password"> Password</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword"> Confirm Password</label>
                <input
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>{isSignup ? "Sign in " : "Sign up"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
