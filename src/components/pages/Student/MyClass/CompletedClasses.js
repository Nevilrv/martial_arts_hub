import React, { useEffect, useState } from "react";
import { WorkOut } from "../../../../assets/icon";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { RiEditBoxFill } from "react-icons/ri";
import OutlineBtn from "../../common/OutlineBtn";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Student_get_Upcoming_Classes } from "../../../services/student/class";
import Spinner from "../../../layouts/Spinner";

const CompletedClasses = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [upcomingClass, setUpcomingClass] = useState([]);

  const Get_Upcoming_Classes = async () => {
    setLoading(true);
    const result = await Student_get_Upcoming_Classes();
    if (result?.success === true) {
      setUpcomingClass(result.data.complete);
      toast.success(result?.message);
      setLoading(false);
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
      {loading && <Spinner />}
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
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium">Class Date:</span>{" "}
                    {upcoming_class?.classdate}
                  </p>
                  <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                  <p className="text-[13px] text-black/70  mt-0.5">
                    <span className="font-medium">Class type: </span>
                    {upcoming_class?.classType}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70 mt-0.5">
                    <span className="font-medium">Instructor Name:</span>
                    {upcoming_class?.instructorName}
                  </p>
                </div>
              </div>
            </div>
            <OutlineBtn
              text={"Completed"}
              className={"bg-black border-none text-white"}
            />
          </div>
        ))
      )}
    </>
  );
};

export default CompletedClasses;
