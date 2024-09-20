import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Routing } from "../shared/Routing";

const MainLayout = ({ children }) => {
  const {pathname} = useLocation();
  
  return (
    <>
      <Header />
      {children}
      {pathname !== Routing.AttendTraining ? <Footer /> : null}
    </>
  );
};

export default MainLayout;
