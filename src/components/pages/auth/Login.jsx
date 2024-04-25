import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuthInfo } from "../../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo, login } = useAuthInfo();
  const history = useHistory();
  const isAuthenticated = userInfo;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
  }, [userInfo]);
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
