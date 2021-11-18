import React from "react";
import { useState } from "react";
export const AuthContext = React.createContext();

export default function AuthProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async () => {
    setLoggedIn(true);
  };

  const handleLoginState = (loggedIn) => {
    setLoggedIn(loggedIn);
  };

  const logout = () => {
    handleLoginState(false);
  };

  const state = {
    loggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
