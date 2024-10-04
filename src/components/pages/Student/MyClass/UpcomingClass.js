import React, { useEffect, useState } from "react";
import { WorkOut } from "../../../../assets/icon";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { RiEditBoxFill } from "react-icons/ri";
import OutlineBtn from "../../common/OutlineBtn";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Student_get_Upcoming_Classes } from "../../../services/student/class";

const UpcomingClass = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [upcomingClass, setUpcomingClass] = useState([]);

  const Get_Upcoming_Classes = async () => {
    const result = await Student_get_Upcoming_Classes();
    if (result?.success === true) {
      setLoading(false);
      setUpcomingClass(result.data.upcoming);
      console.log(result, "=======>");
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    Get_Upcoming_Classes();
  }, []);

  return (
    <>
      {upcomingClass.length <= 0 ? (
        <div className="flex items-center justify-center flex-col h-[calc(100vh-409px)]">
          <WorkOut height={"110"} width={"110"} />
          <h2 className="text-[26px] font-medium text-center mt-7">
            Your Class list is empty!
          </h2>
          <p className="text-lg text-gay-300 max-w-[490px] mx-auto text-center">
            You haven't bought any courses yet! when you join any course it’s
            details will be shown here.
          </p>
        </div>
      ) : (
        upcomingClass?.map((upcoming_class) => (
          <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400">
            <div className="flex items-center">
              <div className="w-[125px] h-[85px] overflow-hidden rounded-lg">
                <img src={Wrestling} alt="Wrestling" />
              </div>
              <div className="ml-5">
                <div className="flex items-center">
                  <h3 className="text-xl font-medium">
                    {upcoming_class?.className}
                  </h3>
                  <RiEditBoxFill className="text-lg mt-0.5 text-red-200 ml-2" />
                  <p className="text-red-200 text-sm font-medium ml-1">
                    Edit Class
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70 font-light mt-0.5">
                    <span className="font-medium">Class Date:</span>{" "}
                    {upcoming_class?.date}
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70 font-light mt-0.5">
                    <span className="font-medium"> Created on:</span>
                    {upcoming_class?.date}
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70 font-light mt-0.5">
                    <span className="font-medium">Class type: </span>
                    {upcoming_class?.classType}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70 font-light mt-0.5">
                    <span className="font-medium">Class Time:</span>
                    {upcoming_class?.localTimeSlot} {upcoming_class?.shift}
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70 font-light mt-0.5">
                    <span className="font-medium">Class Duration:</span>
                    {parseInt(upcoming_class?.duration) / 60}hr
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] mt-0.5 text-red-200 font-medium">
                    <span className="font-medium text-black/70 ">
                      Class Rate:
                    </span>
                    ${upcoming_class?.rate}
                  </p>
                </div>
              </div>
            </div>
            <OutlineBtn
              text={"Starts on 29 July at 12:30 PM"}
              className={"bg-gay-300/50 border-none text-white"}
            />
          </div>
        ))
      )}
    </>
  );
};

export default UpcomingClass;
