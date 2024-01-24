// authContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    // Logic to handle sign-in (e.g., API calls, setting user in state)
    setUser(userData);
  };

  const signOut = () => {
    // Logic to handle sign-out (e.g., API calls, clearing user from state)
    setUser(null);
  };

  const value = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
