import React from "react";
import Tab from "../common/Tab/Index";
import { Routing } from "../../shared/Routing";

const Tabs = ({ children }) => {
  const tabs = [
    { name: "Dashboard", href: Routing.InstructorDashboard },
    { name: "My Classes", href: Routing.InstructorMyClass },
    { name: "Message Requests", href: Routing.InstructorMessageRequest },
    { name: "Chat", href: Routing.InstructorChat },
    { name: "Booking Overview", href: Routing.InstructorBooking },
    { name: "Earnings Report", href: Routing.InstructorEarnings },
    { name: "Reviews", href: Routing.InstructorReviews },
    // { name: "Create Class", href: Routing.InstructorCreateClass},
    { name: "Create Slot", href: Routing.InstructorCreateSlot },
    { name: "My Slot", href: Routing.InstructorMy_slot },
    { name: "Bank Account Details", href: Routing.InstructorAccountDetails },
  ];
  return (
    <>
      <Tab tabs={tabs}>{children}</Tab>
    </>
  );
};

export default Tabs;
