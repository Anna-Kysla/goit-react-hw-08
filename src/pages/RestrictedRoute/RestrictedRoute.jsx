import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthStatus } from "../../utils/auth";

const RestrictedRoute = ({ children }) => {
  const isAuthenticated = getAuthStatus();

  if (isAuthenticated) {
    return <Navigate to="/contacts" />;
  }

  return children;
};

export default RestrictedRoute;
