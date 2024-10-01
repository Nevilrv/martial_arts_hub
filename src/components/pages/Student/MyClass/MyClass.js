import React, { useState } from 'react'
import Tab from "../../common/Tab/Index";
import { Routing } from '../../../shared/Routing';
import OutlineBtn from '../../common/OutlineBtn';
import { FaPlus } from 'react-icons/fa6';
import UpcomingClass from './UpcomingClass';
import { useNavigate } from 'react-router-dom';


const MyClass = () => {
  const navigate = useNavigate();

    const tabs = [
        { name: "Dashboard", href: Routing.StudentDashboard },
        { name: "My Messages", href: Routing.StudentMessages },
        { name: "My Classes", href: Routing.StudentMyClass },
        { name: "My Invoices", href: Routing.StudentInvoices },
        { name: "Raise Dispute", href: Routing.StudentDispute },
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
          <UpcomingClass />):null}
         {/* ) : calssType === "Ongoing Classes" ? (
           <OngoingClasses />
         ) : calssType === "Completed Classes" ? (
           <CompletedClasses />
         ) : null} */}
      </div>
    </>
  )
}

export default MyClass
