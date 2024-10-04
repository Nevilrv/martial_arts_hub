import React, { useEffect } from "react";
import Tabs from "../index";
import { Routing } from "../../../shared/Routing";
import OutlineBtn from "../../common/OutlineBtn";
import UpcomingClass from "./UpcomingClass";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OngoingClasses from "./OngoingClasses";
import CompletedClasses from "./CompletedClasses";
import { Instructor_get_Upcoming_Classes } from "../../../services/Instructor/createClass/Index";
import { toast } from "react-toastify";

const MyClass = () => {
  const navigate = useNavigate();

  const [calssType, setcalssType] = useState("Upcoming Classes");
  const [upcomingClass, setUpcomingClass] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  const id = JSON.parse(localStorage.getItem("_id"));

  const Get_Upcoming_Classes = async () => {
    const result = await Instructor_get_Upcoming_Classes(id);
    if (result?.success === true) {
      setLoading(false);
      if (calssType==="Upcoming Classes") {
        setUpcomingClass(result.data.upcoming);
      }
      else if(calssType==="Ongoing Classes"){
        setUpcomingClass(result.data.ongoing);
      }
      else if(calssType==="Completed Classes"){
        setUpcomingClass(result.data.complete);
      }
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Upcoming_Classes();
    // eslint-disable-next-line
  }, [calssType]);

  return (
    <>
      <Tabs>
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
          <UpcomingClass data={upcomingClass} />
        ) : calssType === "Ongoing Classes" ? (
          <OngoingClasses data={upcomingClass} />
        ) : calssType === "Completed Classes" ? (
          <CompletedClasses data={upcomingClass} />
        ) : null}
      </div>
      </Tabs>
    </>
  );
};

export default MyClass;
