import React from "react";
import Tabs from "../index";
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
  const [calssType, setcalssType] = useState("Upcoming Classes");
  return (
    <>
      <Tabs>
      <div className="mt-11 px-3 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <h1 className="text-black sm:text-3xl text-2xl font-semibold">My Classes</h1>
          <OutlineBtn
            text={"Create Slot"}
            icon={<FaPlus className="mr-1" />}
            className={"bg-black text-white"}
            onClick={() => navigate(Routing.InstructorCreateSlot)}
          />
        </div>
        <div className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center mt-6 gap-2">
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
      <div className="mt-6 w-full overflow-x-auto">
        {calssType === "Upcoming Classes" ? (
          <UpcomingClass />
        ) : calssType === "Ongoing Classes" ? (
          <OngoingClasses />
        ) : calssType === "Completed Classes" ? (
          <CompletedClasses />
        ) : null}
      </div>
      </Tabs>
    </>
  );
};

export default MyClass;
