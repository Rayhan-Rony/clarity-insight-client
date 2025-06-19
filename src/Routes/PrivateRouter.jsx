import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Pages/LoadingPage";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (!user) {
    return <Navigate to="/SignIn" state={location?.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRouter;
