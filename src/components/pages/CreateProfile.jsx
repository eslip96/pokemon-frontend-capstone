import React, { useState } from "react";

import { useHistory } from "react-router-dom";

function CreateProfile({ first_name, last_name, email, password, role }) {
  const [formData, setFormData] = useState({
    first_name: first_name || "",
    last_name: last_name || "",
    email: email || "",
    password: password || "",
    role: role || "user",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleFieldUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = fetch("http://localhost:8086/pokemon/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      history.push("/login");
    } catch (error) {
      console.error("Error creating profile:", error.message);
      setSuccessMessage("");
      setErrorMessage("An error occurred while adding user");
    }
  };

  return (
    <div className="box-container">
      <div className="main-body-wrapper">
        <div className="page-title-wrapper">
          <h2>Create profile</h2>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first_name">First Name:</label>
              <input
                id="first_name"
                name="first_name"
                value={formData.first_name}
                type="text"
                onChange={handleFieldUpdate}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name:</label>
              <input
                id="last_name"
                name="last_name"
                value={formData.last_name}
                type="text"
                onChange={handleFieldUpdate}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                type="email"
                onChange={handleFieldUpdate}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                value={formData.password}
                type="password"
                onChange={handleFieldUpdate}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleFieldUpdate}
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit">Create Profile</button>
          </form>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
