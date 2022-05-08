import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const authProvider = createContext();
const AuthContext = ({ children }) => {
  const auth = useFirebase();
  return <authProvider.Provider value={auth}>{children}</authProvider.Provider>;
};

export default AuthContext;
