import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Routing } from "../components/shared/Routing";

const PrivateRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("token");
  const location = useLocation();
  if (!loggedIn) {
    if (location.pathname === "/admin/dashboard") {
      return (
        <Navigate to={Routing.AdminLogin} state={location.pathname} replace />
      );
    } else {
      return (
        <Navigate to={Routing.Initial} state={location.pathname} replace />
      );
    }
  }

  return children;
};

export default PrivateRoute;
