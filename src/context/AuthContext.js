import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Import useAuth hook

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { login } = useAuth(); // Access the login function from the authentication context

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the login function from the authentication context
      await login(email, password);
      // If login is successful, redirect to the home page
      history.push("/home");
    } catch (error) {
      console.error("Authentication error:", error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
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
