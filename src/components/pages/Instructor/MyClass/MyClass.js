import React from "react";
import Tab from "../../common/Tab/Index";
import { Routing } from "../../../shared/Routing";
import OutlineBtn from "../../common/OutlineBtn";
import UpcomingClass from "./UpcomingClass";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OngoingClasses from "./OngoingClasses";
import CompletedClasses from "./CompletedClasses";

const MyClass = () => {
  const navigate = useNavigate();

  const tabs = [
    { name: "Dashboard", href: Routing.InstructorDashboard },
    { name: "My Classes", href: Routing.InstructorMyClass },
    { name: "Message Requests", href: "" },
    { name: "Chat", href: "" },
    { name: "Earnings Report", href: "" },
    { name: "Reviews", href: "" },
    { name: "Create Class", href: Routing.InstructorCreateClass },
  ];

  const [calssType, setcalssType] = useState("Upcoming Classes");

  return (
    <>
      <Tab tabs={tabs} />
      <div className="mt-11 px-3 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-3xl font-semibold">My Classes</h1>
          <OutlineBtn
            text={"Create New"}
            icon={<FaPlus className="mr-1" />}
            className={"bg-black text-white"}
            onClick={() => navigate(Routing.InstructorCreateClass)}
          />
        </div>
        <div className="flex items-center mt-6 gap-2">
          <OutlineBtn
            text={"Upcoming Classes"}
            className={`${calssType === "Upcoming Classes"?"bg-gay-300 text-white font-semibold":null}`}
            onClick={() => setcalssType("Upcoming Classes")}
          />
          <OutlineBtn
            text={"Ongoing Classes"}
            className={`${calssType === "Ongoing Classes"?"bg-gay-300 text-white font-semibold":null}`}
            onClick={() => setcalssType("Ongoing Classes")}
          />
          <OutlineBtn
            text={"Completed Classes"}
            className={`${calssType === "Completed Classes"?"bg-gay-300 text-white font-semibold":null}`}
            onClick={() => setcalssType("Completed Classes")}
          />
        </div>
      </div>
      <div className="mt-6">
        {calssType === "Upcoming Classes" ? (
          <UpcomingClass />
        ) : calssType === "Ongoing Classes" ? (
          <OngoingClasses />
        ) : calssType === "Completed Classes" ? (
          <CompletedClasses />
        ) : null}
      </div>
    </>
  );
};

export default MyClass;
