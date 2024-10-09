import React, { useState } from "react";
import { Routing } from "../../../shared/Routing";
import OutlineBtn from "../../common/OutlineBtn";
import { FaPlus } from "react-icons/fa6";
import UpcomingClass from "./UpcomingClass";
import { useNavigate } from "react-router-dom";
import OngoingClasses from "./OngoingClasses";
import CompletedClasses from "./CompletedClasses";
import Tabs from "../Tabs";

const MyClass = () => {
  const navigate = useNavigate();

  const [calssType, setcalssType] = useState("Upcoming Classes");
  return (
    <>
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-black text-3xl font-semibold">My Classes</h1>
          </div>
          <div className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center mt-6 gap-2">
            <OutlineBtn
              text={"Upcoming Classes"}
              className={`${
                calssType === "Upcoming Classes"
                  ? "bg-gay-300 text-white font-semibold"
                  : null
              }`}
              onClick={() => setcalssType("Upcoming Classes")}
            />
            <OutlineBtn
              text={"Ongoing Classes"}
              className={`${
                calssType === "Ongoing Classes"
                  ? "bg-gay-300 text-white font-semibold"
                  : null
              }`}
              onClick={() => setcalssType("Ongoing Classes")}
            />
            <OutlineBtn
              text={"Completed Classes"}
              className={`${
                calssType === "Completed Classes"
                  ? "bg-gay-300 text-white font-semibold"
                  : null
              }`}
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
      </Tabs>
    </>
  );
};

export default MyClass;
