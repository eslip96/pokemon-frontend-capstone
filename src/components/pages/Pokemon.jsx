import React, { useState, useEffect } from "react";

import { useAuthInfo } from "../../context/AuthContext";

function AddType() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

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
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Type added successfully");
      } else {
        console.error("Unable to add type");
      }
    } catch (error) {
      console.error("Error adding type:", error.message);
    }
  };
  return null;
}

export default AddType;

// function Pokemon() {
//   return (
//     <div className="main-body-wrapper">
//       <div className="page-title-wrapper">
//         <h2>Pokemon Creator</h2>
//       </div>
//     </div>
//   );
// }

// export default Pokemon;
