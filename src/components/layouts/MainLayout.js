import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Routing } from "../shared/Routing";
import Adminlayout from "./Adminlayout";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.slice(0, 6) === "/admin" ? (
        <Adminlayout>{children}</Adminlayout>
      ) : (
        <>
          <Header />
          {children}
          {pathname !== Routing.AttendTraining ? <Footer /> : null}
        </>
      )}
    </>
  );
};

export default MainLayout;
