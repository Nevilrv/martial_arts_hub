import Tab from "../common/Tab/Index";
import React from "react";
import { Routing } from "../../shared/Routing";

const Tabs = ({ children }) => {
  const tabs = [
    { name: "Dashboard", href: Routing.StudentDashboard },
    { name: "My Messages", href: Routing.StudentMessages },
    { name: "My Classes", href: Routing.StudentMyClass },
    { name: "My Invoices", href: Routing.StudentInvoices },
    { name: "Raise Dispute", href: Routing.StudentDispute },
    { name: "Instructor", href: Routing.InstructorsPage },
  ];
  return (
    <>
      <Tab tabs={tabs}>{children}</Tab>
    </>
  );
};

export default Tabs;
