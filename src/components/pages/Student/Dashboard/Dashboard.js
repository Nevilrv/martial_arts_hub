import React from "react";
import { Routing } from "../../../shared/Routing";
import ProfileCard from "../../common/Dashboard/ProfileCard";
import DashboardCard from "../../common/Dashboard/DashboardCard";
import { FaPaperPlane } from "react-icons/fa6";
import { Thunderstorm, WorkOut } from "../../../../assets/icon";
import Tabs from "../Tabs";
const Dashboard = () => {
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
    CardHeadding: "Requests list is empty!",
    CardDetails:
      "You haven't send any course inquiry requests yet! when you send It’s details will be shown here.",
  };
  const PaymentsCard = {
    CardTitle: "PaymentsCard",
    CardIcon: <Thunderstorm />,
    CardHeadding: "Nothing to Show!",
    CardDetails:
      "You haven't joined any courses yet! after joining it’s details wil be shown here.",
  };
  const RecentClasseCard = {
    CardTitle: "Recent Classes",
    CardIcon: <WorkOut />,
    CardHeadding: "Your Class list is empty!",
    CardDetails:
      "You haven't bought any courses yet! when you join any course it’s details will be shown here.",
    CardDetailsclassName: "max-w-full",
  };

  return (
    <>
      <Tabs>
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
      </Tabs>
      {/* <DashboardPage/>  */}
    </>
  );
};

export default Dashboard;
