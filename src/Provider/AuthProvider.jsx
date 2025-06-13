import React from "react";
import { AuthContext } from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "kalu",
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
