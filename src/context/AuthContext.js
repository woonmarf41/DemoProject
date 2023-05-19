import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setData(data);
      setIsLoggedIn(true);
    }
    return () => {
      console.log("AuthContext cleanup");
    };
  }, []);

  const login = async (username, password) => {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      console.log(json);
    } else {
      localStorage.setItem("user", JSON.stringify(json));
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ data, setData, isLoggedIn, setIsLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
