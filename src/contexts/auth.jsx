import React, { useState, createContext } from "react";

import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthPtovider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (email, senha) => {
    console.log("login auth", { email, senha });

    if (senha === "ingrid") {
      setUser({ id: "123", email });
      navigate("/");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
