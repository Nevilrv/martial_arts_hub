import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Tabs from "../";
import OutlineBtn from "../../common/OutlineBtn";
import { TbFilterSearch } from "react-icons/tb";
import { LiaAngleDownSolid } from "react-icons/lia";
import User from "../../../../assets/images/userImage.png";
import { getEarnings } from "../../../services/Instructor/Earnings/Earnings";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import { MdKeyboardArrowDown } from "react-icons/md";

const EarningsReport = () => {
  const [loading, setLoading] = useState(false);
  const [Earnings, setEarnings] = useState({});
  const [filterOrder, setFilterOrder] = useState("Low to high");
  const id = JSON.parse(localStorage.getItem("_id"));
  const [duration, setduration] = useState("");

  const Get_Earnings = async () => {
    setLoading(true);
    const result = await getEarnings(id, duration);
    if (result?.success === true) {
      setEarnings(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    Get_Earnings();
  }, [duration]);

  const sortedData = Earnings?.formattedData?.slice().sort((a, b) => {
    if (filterOrder === "Low to high") {
      return a.paidAmount - b.paidAmount;
    } else if (filterOrder === "High to Low") {
      return b.paidAmount - a.paidAmount;
    }
    return 0;
  });
  const handleChange = (event) => {
    setduration(event.target.value);
  };

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <div className="flex gap-5 items-center justify-between">
            <div>
              <h1 className="text-black text-3xl font-semibold">
                Earnings Report
              </h1>
              <p className="text-black/70 text-base">
                Your earning history will be shown here
              </p>
            </div>
            <div>
              <p className="text-black/70 text-base">Total earnings</p>
              <h1 className="text-red-200 text-3xl font-semibold">
                ${Earnings?.totalEarnings}
              </h1>
            </div>
          </div>
          <div className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center mt-5 gap-2">
            <OutlineBtn
              text={"All"}
              className={`${duration === ""?"bg-gay-300 text-white font-semibold":"bg-transparent"}  min-w-[75px]`}
              onClick={() => setduration("")}
            />
            <div className="relative z-[1]">
              <select
                value={filterOrder}
                onChange={(e) => setFilterOrder(e.target.value)}
                className="bg-transparent focus:outline-none px-3 pr-6 border border-black/25 py-3 rounded-full remove-icon"
              >
                <option value="Low to high">Low to high</option>
                <option value="High to Low">High to Low</option>
              </select>
              <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-2 -z-10" />
            </div>
            <div className="relative z-[1]">
              <select
                value={duration}
                onChange={handleChange}
                className="bg-transparent focus:outline-none px-3 pr-6 border border-black/25 py-3 rounded-full remove-icon"
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="year">Year</option>
              </select>
              <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-2 -z-10" />
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          {sortedData?.map((Earning) => (
            <div
              className="px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400 min-w-[675px]"
              key={Earning.id}
            >
              <div className="flex items-center">
                <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
                  <img
                    src={Earning.profile || User}
                    alt="Wrestling"
                    className="w-full h-full object-cover object-top grayscale scale-x-[-1]"
                  />
                </div>
                <div className="ml-5">
                  <h2 className="text-black texrt-[20px] font-semibold">
                    {Earning.studentName}
                  </h2>
                  <div className="flex items-center">
                    <p className="text-[13px] text-black/70  mt-0.5">
                      <span className="font-medium">Class Name: </span>{" "}
                      {Earning.className}
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] text-black/70  mt-0.5">
                      <span className="font-medium">Class Date: </span>
                      {Earning.classDate}
                    </p>
                    <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1"></span>
                    <p className="text-[13px] text-black/70  mt-0.5">
                      <span className="font-medium">Payment Date:</span>
                      {Earning.paymentDate}
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="text-red-200 text-xl font-semibold">
                $ {Earning.paidAmount}
              </h1>
            </div>
          ))}
        </div>
      </Tabs>
    </>
  );
};

export default EarningsReport;
