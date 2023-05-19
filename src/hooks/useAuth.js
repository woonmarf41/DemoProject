import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuthContext must be used inside a AuthContext");
  return context;
};
