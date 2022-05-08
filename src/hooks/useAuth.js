import { useContext } from "react";
import { authProvider } from "../context/authContext";

const useAuth = () => {
  return useContext(authProvider);
};

export default useAuth;
