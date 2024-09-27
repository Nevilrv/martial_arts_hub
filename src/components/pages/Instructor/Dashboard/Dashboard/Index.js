import React from 'react'
import { Routing } from '../../../../shared/Routing';
import { FaPaperPlane } from 'react-icons/fa6';
import { Thunderstorm, WorkOut } from '../../../../../assets/icon';
import Tab from "../../../common/Tab/Index";
import ProfileCard from '../../../common/Dashboard/ProfileCard';
import DashboardCard from '../../../common/Dashboard/DashboardCard';


const Index = () => {

    const tabs = [
        { name: "Dashboard", href: Routing.InstructorDashboard },
        { name: "My Classes", href: Routing.InstructorMyClass },
        { name: "Message Requests", href:"" },
        { name: "Chat", href: "" },
        { name: "Earnings Report", href:""},
        { name: "Reviews", href:""},
        { name: "Create Class", href: Routing.InstructorCreateClass },
      ];
      const ProfileDetals = [
        {
          title: "Joined as:",
          details: "Instructor",
        },
        {
          title: "Joined on:",
          details: " 28 July, 2024",
        },
        {
          title: "Profile Completion:",
          details: "5%",
        },
        {
            title: "Your Ratings:",
            details: "3",
          },
      ];
      const ClassCard = {
        CardTitle: "My Classes",
        CardIcon:  <WorkOut />,
        CardHeadding:"Your Class list is empty!",
        CardDetails :"You haven't created any courses yet! after creating class it’s details wil be shown here.",
        Plus:true
      };
      const EarningsCard = {
        CardTitle: "Earnings",
        CardIcon:  <Thunderstorm />,
        CardHeadding:"Nothing to Show!",
        CardDetails :"No students have joined your class yet! Once someone joins, your earnings will be shown here.",
        Plus:false
      };
      const MessagesCard = {
        CardTitle: "Messages Requests",
        CardIcon:  <FaPaperPlane className="text-[#BDBBB5] text-4xl" />,
        CardHeadding:"Your Requests list is empty!",
        CardDetails :"You haven't received any requests yet! When student send inquiry message It’s details will be shown here.",
        CardDetailsclassName:"max-w-full",
        Plus:false
      };


  return (
    <>
     <Tab tabs={tabs} />
      <div className="mt-10 px-3 lg:px-8 grid lg:grid-cols-3 gap-5">
        <ProfileCard ProfileDetals={ProfileDetals} />
        <div className="lg:col-span-2 grid lg:grid-cols-2 gap-5">
          <DashboardCard cardDetails={ClassCard} />
          <DashboardCard cardDetails={EarningsCard} />
          <div className="lg:col-span-2 bg-gay-600 rounded-3xl">
          <DashboardCard cardDetails={MessagesCard} />
          </div>
          </div>
        </div> 
    </>
  )
}

export default Index
