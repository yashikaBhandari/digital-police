import React, { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    accountType: null,
  });

  // Load auth state from localStorage on initial render
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  // Update localStorage whenever auth state changes
  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("auth", JSON.stringify(auth));
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);

  // Function to log in
  const login = (token, accountType) => {
    setAuth({ token, accountType });
  };

  // Function to log out
  const logout = () => {
    setAuth({ token: null, accountType: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
