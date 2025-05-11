import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthStatus } from "../../utils/auth";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = getAuthStatus();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
