// AuthContext.js (or useAuth.js)

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // Add token state

  const signIn = (userData, authToken) => {
    setUser(userData);
    setToken(authToken); // Set the token when signing in
  };

  const signOut = () => {
    setUser(null);
    setToken(null); // Clear the token when signing out
  };

  const value = {
    user,
    token, // Provide the token in the context value
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
