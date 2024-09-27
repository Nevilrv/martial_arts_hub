import React from "react";
import Tab from "../../common/Tab/Index";
import { Routing } from "../../../shared/Routing";
import ProfileCard from "../../common/Dashboard/ProfileCard";
import DashboardCard from "../../common/Dashboard/DashboardCard";
import { FaPaperPlane } from "react-icons/fa6";
import { Thunderstorm, WorkOut } from "../../../../assets/icon";
const Dashboard = () => {
  const tabs = [
    { name: "Dashboard", href: Routing.StudentDashboard },
    { name: "My Messages", href: Routing.StudentMessages },
    { name: "My Classes", href: Routing.StudentClasses },
    { name: "My Invoices", href: Routing.StudentInvoices },
    { name: "Raise Dispute", href: Routing.StudentDispute },
  ];
  const ProfileDetals = [
    {
      title: "Joined as:",
      details: "Student",
    },
    {
      title: "Joined on:",
      details: " 28 July, 2024",
    },
    {
      title: "Profile Completion:",
      details: "5%",
    },
  ];

  const ClassCard = {
    CardTitle: "Class Requests",
    CardIcon: <FaPaperPlane className="text-[#BDBBB5] text-4xl" />,
    CardHeadding:"Requests list is empty!",
    CardDetails :"You haven't send any course inquiry requests yet! when you send It’s details will be shown here."
  };
  const PaymentsCard = {
    CardTitle: "PaymentsCard",
    CardIcon:  <Thunderstorm />,
    CardHeadding:"Nothing to Show!",
    CardDetails :"You haven't joined any courses yet! after joining it’s details wil be shown here."
  };
  const RecentClasseCard = {
    CardTitle: "Recent Classes",
    CardIcon:  <WorkOut />,
    CardHeadding:"Your Class list is empty!",
    CardDetails :"You haven't bought any courses yet! when you join any course it’s details will be shown here.",
    CardDetailsclassName:"max-w-full"
  };

  return (
    <>
      <Tab tabs={tabs} />
      <div className="mt-10 px-3 lg:px-8 grid lg:grid-cols-3 gap-5">
        <ProfileCard ProfileDetals={ProfileDetals} />
        <div className="lg:col-span-2 grid lg:grid-cols-2 gap-5">
          <DashboardCard cardDetails={ClassCard} />
          <DashboardCard cardDetails={PaymentsCard} />
          <div className="lg:col-span-2 bg-gay-600 rounded-3xl">
          <DashboardCard cardDetails={RecentClasseCard} />
          </div>
          </div>
        </div>
      {/* <DashboardPage/>  */}
    </>
  );
};

export default Dashboard;
