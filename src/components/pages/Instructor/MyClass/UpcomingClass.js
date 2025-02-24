import React, { useEffect, useState } from "react";
import { WorkOut } from "../../../../assets/icon";
import Wrestling from "../../../../assets/images/Wrestling.png";
import OutlineBtn from "../../common/OutlineBtn";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Instructor_change_class_status, Instructor_get_Upcoming_Classes } from "../../../services/Instructor/createClass/Index";
import Spinner from "../../../layouts/Spinner";

const UpcomingClass = () => {
  const [loading, setLoading] = useState(false);
  const [upcomingClass, setUpcomingClass] = useState([]);
  const id = JSON.parse(localStorage.getItem("_id"));

  const Get_Upcoming_Classes = async () => {
    setLoading(true);
    const result = await Instructor_get_Upcoming_Classes(id);
    if (result?.success === true) {
      setUpcomingClass(result.data.upcoming);
      setLoading(false);
    } else {
      // toast.error(result?.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    Get_Upcoming_Classes();
    // eslint-disable-next-line
  }, []);

    const Change_Status_Classes = async (upcoming_class) => {
      setLoading(true);
      const result = await Instructor_change_class_status(
        upcoming_class?.classId
      );
      if (result?.success === true) {
        localStorage.setItem("classId", upcoming_class?.classId);
        localStorage.setItem("studentId", upcoming_class?.studentId);
  
        window.location.replace(upcoming_class?.instructor_url);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

  return (
    <>
      {loading && <Spinner />}
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
            <div className="px-3 lg:px-8 md:h-[143px] md:py-0 gap-y-5 py-3 flex flex-wrap items-center sm:justify-between border-b border-gay-400">
              <div className="flex items-center flex-wrap gap-y-5">
                <div className="sm:w-[125px] sm:h-[85px] w-full overflow-hidden rounded-lg">
                  <img src={upcoming_class?.profile || Wrestling} alt="Wrestling" className="w-full h-full object-cover object-top grayscale" />
                </div>
                <div className="sm:ml-5">
                  <div className="flex items-center cursor-pointer">
                    <h3 className="text-xl font-medium">
                      {upcoming_class?.className}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Class Date: </span>{" "}
                      {upcoming_class?.classdate}
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Created on: </span>
                      {upcoming_class?.createdOn}
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Class type: </span>
                      {upcoming_class?.classType}
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Class Time: </span>
                      {upcoming_class?.classTime}
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Class Duration: </span>
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

              {upcoming_class.payment !== "success" ? (
                <OutlineBtn
                  text={`Payment is Pending`}
                  className={"bg-black border-none text-white sm:w-auto w-full"}
                />
              ) : (
                <OutlineBtn
                  text={`Join at ${upcoming_class.classTime}`}
                  onClick={() => {
                    Change_Status_Classes(upcoming_class);
                  }}
                  className={"bg-Green-100 border-green text-green sm:w-auto w-full"}
                />
              )}
            </div>
          );
        })
      )}
    </>
  );
};

export default UpcomingClass;
