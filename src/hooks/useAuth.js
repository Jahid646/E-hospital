import { useContext } from "react";
import { Authcontext } from "../context/AuthProvider";

const useAuth = () => {
  return useContext(Authcontext);
};

export default useAuth;