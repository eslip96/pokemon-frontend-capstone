import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  function login(email, password) {
    const body = {
      email: email,
      password: password,
    };
    fetch("http://localhost:8086/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("login failed");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUserInfo(data.result);
        console.log(data);
      })
      .catch((error) => {
        console.error("login error:", error);
      });
  }
  function logout() {
    console.log(userInfo);
    fetch(`http://localhost:8086/user/logout/${userInfo.auth_token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("logout failed");
        } else {
          setUserInfo(null);
          console.log("Logout successful");
        }
      })
      .catch((error) => {
        console.error("logout error:", error);
      });
  }

  const values = {
    userInfo,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthInfo = () => {
  return useContext(AuthContext);
};
