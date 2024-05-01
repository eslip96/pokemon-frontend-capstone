import React, { useState } from "react";
import { useAuthInfo } from "../../context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddType() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const history = useHistory();
  const { userInfo } = useAuthInfo();

  const handleFieldUpdate = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = fetch("http://localhost:8086/type", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth: String(userInfo.auth_token),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Type added successfully");
        history.push("/pokemons");
      } else {
        console.error("Unable to add type");
      }
    } catch (error) {
      console.error("Error adding type:", error.message);
    }
  };

  return (
    <div className="main-body-container">
      <div className="main-body-wrapper">
        <div className="form-container">
          <h2>Add Type</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Type Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFieldUpdate}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleFieldUpdate}
                required
              />
            </div>
            <button type="submit">Add Type</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddType;
