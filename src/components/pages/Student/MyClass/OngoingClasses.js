import React, { useEffect, useState } from "react";
import { WorkOut } from "../../../../assets/icon";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { RiEditBoxFill } from "react-icons/ri";
import OutlineBtn from "../../common/OutlineBtn";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Student_get_Upcoming_Classes, Student_Payment } from "../../../services/student/class";
import Spinner from "../../../layouts/Spinner";

const OngoingClasses = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [upcomingClass, setUpcomingClass] = useState([]);

  const Get_Upcoming_Classes = async () => {
    setLoading(true);
    const result = await Student_get_Upcoming_Classes();
    if (result?.success === true) {
      setUpcomingClass(result.data.ongoing);
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

  const heandlePay = async (upcoming_class) => {
    setLoading(true);
    let detals = {
      studentId: JSON.parse(localStorage.getItem("_id")),
      classId: upcoming_class.classId,
      bookingId: upcoming_class.bookingId,
      instructorId: upcoming_class.instructorId,
    };
    const result = await Student_Payment(
      detals.studentId,
      detals.classId,
      detals.bookingId,
      detals.instructorId
    );
    if (result?.success === true) {
      localStorage.setItem("paymentDetails", JSON.stringify(result.data));
      toast.success(result?.message);
      window.open(result.data.PaymentUrl, "_blank", "noopener,noreferrer");
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

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
        <div className="w-full overflow-x-auto">
          {upcomingClass?.map((upcoming_class) => (
            <div className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400 min-w-[730px]">
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
              {upcoming_class.payment !== "success" ? (
                <OutlineBtn
                  text={`Pay Now`}
                  className={"bg-black border-none text-white"}
                  onClick={() => heandlePay(upcoming_class)}
                />
              ) : upcoming_class?.classType === "FaceToFace" ? (
                <OutlineBtn
                  text={"Face to Face"}
                  className={"bg-Green-100 border-green text-green"}
                />
              ) : (
                <OutlineBtn
                  text={"Join Class"}
                  className={"bg-Green-100 border-green text-green"}
                  onClick={() =>
                    window.open(
                      upcoming_class.student_url,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default OngoingClasses;
