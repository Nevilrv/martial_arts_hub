import React, { useEffect, useState } from "react";
import { WorkOut } from "../../../../assets/icon";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { RiEditBoxFill } from "react-icons/ri";
import OutlineBtn from "../../common/OutlineBtn";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Instructor_get_Upcoming_Classes } from "../../../services/Instructor/createClass/Index";
import Spinner from "../../../layouts/Spinner";

const UpcomingClass = (props) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line;
  const [upcomingClass, setUpcomingClass] = useState([]);
  const id = JSON.parse(localStorage.getItem("_id"));

  const Get_Upcoming_Classes = async () => {
    setLoading(true);
    const result = await Instructor_get_Upcoming_Classes(id);
    if (result?.success === true) {
      setUpcomingClass(result.data.upcoming);
      toast.success(result?.message);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Upcoming_Classes();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    {loading&&<Spinner/>}
      {upcomingClass?.length <= 0 ? (
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
        upcomingClass?.map((upcoming_class) => {
          return (
            <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400 min-w-[975px]">
              <div className="flex items-center">
                <div className="w-[125px] h-[85px] overflow-hidden rounded-lg">
                  <img src={Wrestling} alt="Wrestling" />
                </div>
                <div className="ml-5">
                  <div className="flex items-center cursor-pointer">
                    <h3 className="text-xl font-medium">
                      {upcoming_class?.className}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Class Date:</span>{" "}
                      {upcoming_class?.classdate}
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium"> Created on:</span>
                      {upcoming_class?.createdOn}
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
                      {upcoming_class?.classTime}
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Class Duration:</span>
                      {upcoming_class?.classduration}hr
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] mt-0.5 text-red-200 font-medium">
                      <span className="font-medium text-black/70 ">
                        Class Rate:
                      </span>
                      ${parseInt(upcoming_class?.classRate).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <OutlineBtn
                text={"Starts on 29 July at 12:30 PM"}
                className={"bg-gay-300/50 border-none text-white"}
              />
            </div>
          );
        })
      )}
    </>
  );
};

export default UpcomingClass;
