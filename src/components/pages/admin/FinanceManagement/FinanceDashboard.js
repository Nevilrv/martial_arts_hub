import React, { useEffect, useState } from "react";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";
import OutlineBtn from "../../common/OutlineBtn";
import { FaRegArrowAltCircleDown, FaSortDown, FaSortUp } from "react-icons/fa";
import FinanceDashboardChart from "./FinanceDashboardChart";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
import Instructor2 from "../../../../assets/images/Instructor-1.png";
import Instructor3 from "../../../../assets/images/Instructor-2.png";
import Instructor4 from "../../../../assets/images/Instructor-3.png";
import Inputfild from "../../common/Inputfild";
import { TbArrowDownToArc, TbArrowUpToArc } from "react-icons/tb";
import { Routing } from "../../../shared/Routing";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Finance_lastcalculated,
  Finance_transactions,
  funds,
} from "../../../services/Admin/FinanceSection/Finance";
import Spinner from "../../../layouts/Spinner";
import dayjs from "dayjs";
import User from "../../../../assets/images/userProfile.jpg";

const FinanceDashboard = () => {
  const data = [
    {
      title: "Total Funds",
      amount: "$ 24520",
      trend: "positive",
      change_in_Percentage: "3.52%",
      pastEarning: "$9500",
    },
    {
      title: "Released Funds",
      amount: "$ 15570",
      trend: "positive",
      change_in_Percentage: "3.52%",
      pastEarning: "$9500",
    },
    {
      title: "Refunded Funds",
      amount: "$ 3725",
      trend: "negative",
      change_in_Percentage: "2.54%",
      pastEarning: "$4500",
    },
    {
      title: "Admin Earnings",
      amount: "$ 1525",
      trend: "positive",
      change_in_Percentage: "3.54%",
      pastEarning: "$3500",
    },
  ];
  const [InstructorsList, setInstructorsList] = useState([
    {
      image: Instructor1,
      name: "Keyn Mojho",
      id: "#23352",
      ClassName: "Brazilian Jiu Jitsu",
      JoinedDate: "12/07/2024",
    },
  ]);

  const [Earningdata, setEarningdata] = useState({});
  const [Lastcalculated, setLastcalculated] = useState({});
  const [Finance_transaction, setFinance_transactions] = useState([]);
  const [isOpen, SetisOpen] = useState(false);
  const [Showall, SetShowall] = useState(false);

  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Get_funds = async () => {
    setLoading(true);
    const result = await funds();
    if (result?.success === true) {
      setEarningdata(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };

  const Get_Finance_transactions = async () => {
    setLoading(true);
    const result = await Finance_transactions("month");
    if (result?.success === true) {
      setFinance_transactions(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };

  const Get_Finance_lastcalculated = async () => {
    setLoading(true);
    const result = await Finance_lastcalculated();
    if (result?.success === true) {
      setLastcalculated(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    Get_funds();
    Get_Finance_transactions();
    Get_Finance_lastcalculated();
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <div className="pt-9 pb-6">
        <div className="sm:grid xl:grid-cols-4 md:grid-cols-2 flex flex-col gap-4">
          <div className="bg-[#E1DFD7] rounded-xl p-6">
            <p className="text-gay-300 text-base ">Total Funds</p>
            <h2 className="text-Dark_black text-[32px] font-semibold pb-3 border-b border-gay-300/25">
              $
              {Earningdata?.total_Funds?.total_Funds === null || ""
                ? 0
                : Earningdata?.total_Funds?.total_Funds}
            </h2>
            <div className="flex items-center mt-4">
              {Earningdata?.total_Funds?.total_Funds_Growth > 0 ? (
                <HiMiniArrowTrendingUp className="text-green text-lg" />
              ) : (
                <HiMiniArrowTrendingDown className="text-red-200 text-lg" />
              )}
              <h4
                className={`${
                  Earningdata?.total_Funds?.total_Funds_Growth > 0
                    ? "text-green"
                    : "text-red-200"
                } font-semibold ml-2`}
              >
                {Earningdata?.total_Funds?.total_Funds_Growth} %
              </h4>
              <p className="text-gay-300 text-base ml-3">
                Last month {Earningdata?.total_Funds?.total_Funds_LastMonth}
              </p>
            </div>
          </div>
          <div className="bg-[#E1DFD7] rounded-xl p-6">
            <p className="text-gay-300 text-base ">Released Funds</p>
            <h2 className="text-Dark_black text-[32px] font-semibold pb-3 border-b border-gay-300/25">
              $
              {Earningdata?.Release_Funds?.Release_Funds === null || ""
                ? 0
                : Earningdata?.Release_Funds?.Release_Funds}
            </h2>
            <div className="flex items-center mt-4">
              {Earningdata?.Release_Funds?.Release_Funds_Growth > 0 ? (
                <HiMiniArrowTrendingUp className="text-green text-lg" />
              ) : (
                <HiMiniArrowTrendingDown className="text-red-200 text-lg" />
              )}
              <h4
                className={`${
                  Earningdata?.Release_Funds?.Release_Funds_Growth > 0
                    ? "text-green"
                    : "text-red-200"
                } font-semibold ml-2`}
              >
                {Earningdata?.Release_Funds?.Release_Funds_Growth} %
              </h4>
              <p className="text-gay-300 text-base ml-3">
                Last month {Earningdata?.Release_Funds?.Release_Funds_LastMonth}
              </p>
            </div>
          </div>
          <div className="bg-[#E1DFD7] rounded-xl p-6">
            <p className="text-gay-300 text-base ">Refunded Funds</p>
            <h2 className="text-Dark_black text-[32px] font-semibold pb-3 border-b border-gay-300/25">
              $
              {Earningdata?.refund_Funds?.refund_Funds === null || ""
                ? 0
                : Earningdata?.refund_Funds?.refund_Funds}
            </h2>
            <div className="flex items-center mt-4">
              {Earningdata?.refund_Funds?.refund_Funds_Growth > 0 ? (
                <HiMiniArrowTrendingUp className="text-green text-lg" />
              ) : (
                <HiMiniArrowTrendingDown className="text-red-200 text-lg" />
              )}
              <h4
                className={`${
                  Earningdata?.refund_Funds?.refund_Funds_Growth > 0
                    ? "text-green"
                    : "text-red-200"
                } font-semibold ml-2`}
              >
                {Earningdata?.refund_Funds?.refund_Funds_Growth} %
              </h4>
              <p className="text-gay-300 text-base ml-3">
                Last month {Earningdata?.refund_Funds?.refund_Funds_LastMonth}
              </p>
            </div>
          </div>
          <div className="bg-[#E1DFD7] rounded-xl p-6">
            <p className="text-gay-300 text-base "> Admin Earnings</p>
            <h2 className="text-Dark_black text-[32px] font-semibold pb-3 border-b border-gay-300/25">
              $
              {Earningdata?.Admin_Earnings?.Admin_Earnings === null || ""
                ? 0
                : Earningdata?.Admin_Earnings?.Admin_Earnings}
            </h2>
            <div className="flex items-center mt-4">
              {Earningdata?.Admin_Earnings?.Admin_Earnings_Growth > 0 ? (
                <HiMiniArrowTrendingUp className="text-green text-lg" />
              ) : (
                <HiMiniArrowTrendingDown className="text-red-200 text-lg" />
              )}
              <h4
                className={`${
                  Earningdata?.Admin_Earnings?.Admin_Earnings_Growth > 0
                    ? "text-green"
                    : "text-red-200"
                } font-semibold ml-2`}
              >
                {Earningdata?.Admin_Earnings?.Admin_Earnings_Growth} %
              </h4>
              <p className="text-gay-300 text-base ml-3">
                Last month{" "}
                {Earningdata?.Admin_Earnings?.Admin_Earnings_LastMonth}
              </p>
            </div>
          </div>
        </div>
        <div className="sm:grid xl:grid-cols-6 grid-cols-1 flex flex-col gap-4 mt-4">
          <div className="lg:col-span-4 bg-primary p-7 rounded-xl">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl text-gay-300 font-semibold">
                Funds Overview
              </h2>
              <button className="text-primary font-medium text-xs bg-gay-300 p-2.5 px-3 rounded-full flex items-center gap-1">
                <FaRegArrowAltCircleDown className="text-base" /> Download
                Report
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <OutlineBtn
                text={"All"}
                className={
                  "text-white bg-black border-none text-xs sm:w-auto w-full"
                }
              />
              <OutlineBtn
                text={"Total Funds"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
              <OutlineBtn
                text={"Released Funds"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
              <OutlineBtn
                text={"Refunded Funds"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
              <OutlineBtn
                text={"Admin Earnings"}
                className={"bg-transparent border text-xs sm:w-auto w-full"}
              />
            </div>
            <FinanceDashboardChart />
          </div>
          <div className="lg:col-span-2 bg-primary p-7 rounded-xl">
            <h2 className="text-xl text-gay-300 font-semibold">
              Quick Transfer
            </h2>
            <div className="mt-3 w-full bg-blue-50 h-[70px] rounded-lg flex items-center p-3">
              <div className="flex items-center gap-3">
                <img
                  src={Instructor1 || User}
                  alt=""
                  className="w-[44px] h-[44px] rounded-full"
                />
                <div>
                  <h3 className="text-black font-semibold text-base">
                    Kiya John
                  </h3>
                  <p className="text-gay-300 text-[12px]">Instructor</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gay-300 text-sm font-semibold">
                Recently Released Instructors
              </p>
              <div className="flex items-center mt-2">
                <img
                  src={Instructor1 || User}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full"
                />
                <img
                  src={Instructor2 || User}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full -ml-2.5"
                />
                <img
                  src={Instructor3 || User}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full -ml-2.5"
                />
                <img
                  src={Instructor4 || User}
                  alt=""
                  className="w-[42px] h-[42px] border-2 border-primary rounded-full -ml-2.5"
                />
              </div>
            </div>
            <div className="mt-10">
              <Inputfild
                Label={"Insert Amount"}
                Labelclass={"customradiusBlack font-bold"}
                className={"rounded-lg h-[50px] md:w-full"}
                placeholder={"eg $5.99"}
                type={"number"}
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <h2 className="text-gay-300 text-base font-medium">
                Your Balance:
              </h2>
              <h2 className="text-green text-base font-medium">$124242</h2>
            </div>
            <div className="mt-9">
              <OutlineBtn
                text={"Release Fund Now"}
                className={"bg-black text-white border-none w-full"}
              />
            </div>
          </div>
        </div>
        <div className="bg-primary p-7 rounded-xl mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gay-300 font-semibold">
              Previous Transactions
            </h2>
          </div>
          <div
            className={`mt-6 w-full overflow-x-auto h-96 ${
              Showall === true ? "overflow-y-auto" : "overflow-y-hidden"
            } `}
          >
            {Finance_transaction?.map((transaction) => (
              <div className="h-[90px] grid grid-cols-4 items-center justify-between min-w-[916px]">
                <div className="flex items-center gap-4 col-span-2">
                  {transaction?.transactionType === "received" ? (
                    <div className="bg-Green-150 h-12 w-12 rounded-xl flex justify-center items-center">
                      <TbArrowDownToArc className="text-green text-3xl" />
                    </div>
                  ) : transaction?.transactionType === "sent" ? (
                    <div className="bg-purple-100 h-12 w-12 rounded-xl flex justify-center items-center">
                      <TbArrowUpToArc className="text-purple-500 text-3xl" />
                    </div>
                  ) : transaction?.transactionType === "refunded" ? (
                    <div className="bg-red-100 h-12 w-12 rounded-xl flex justify-center items-center">
                      <TbArrowUpToArc className="text-red-200 text-3xl" />
                    </div>
                  ) : null}
                  <div>
                    <h2 className="text-xl text-Dark_black font-medium">
                      {transaction?.studentName || transaction?.instructorName}
                    </h2>
                    <p className="text-xs text-black/70">
                      <span className="font-semibold">
                        Student • Class Name:
                      </span>{" "}
                      {transaction?.className?.slice(0, 20) || "-"} •{" "}
                      <span className="font-semibold">Class Date:</span>{" "}
                      {dayjs(transaction?.classdate || "-").format(
                        "DD MMM, YYYY"
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-black font-semibold text-base">
                    {dayjs(transaction?.paymentsDate).format("DD MMM, YYYY")}
                  </h2>
                  <h2 className="text-black/70 text-xs">
                    {dayjs(transaction?.paymentsDate).format("h:MM A")} IST
                  </h2>
                </div>
                <div>
                  <h3 className="text-lg text-Dark_black font-semibold text-right">
                    ${transaction?.paidAmount}
                  </h3>
                  <p
                    className={`${
                      transaction?.transactionType === "received"
                        ? "text-green"
                        : transaction?.transactionType === "refunded"
                        ? "text-red-200"
                        : "text-purple-500"
                    } text-sm font-medium text-right`}
                  >
                    {transaction?.transactionType === "received"
                      ? "+"
                      : transaction?.transactionType === "refunded"
                      ? "-"
                      : null}

                    {transaction?.transactionType === "received"
                      ? "Received from Student"
                      : transaction?.transactionType === "refunded"
                      ? "Refunded to Student"
                      : "Sent to Instructor (Released)"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-8">
            <OutlineBtn
              className={"bg-black text-white"}
              text={"View All"}
              onClick={() => SetShowall(true)}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">
                Total Transactions
              </p>
              <div className="flex items-center gap-7 mt-3">
                <h2 className="text-black font-semibold text-[34px]">
                  {Lastcalculated?.total_transction?.currentMonthTransaction}
                </h2>
                <h2 className="text-green text-sm font-medium text-right">
                  {Lastcalculated?.total_transction?.TransactionsGrowth >= 0 ? (
                    <FaSortUp className="text-green text-base mx-auto" />
                  ) : (
                    <FaSortDown className="text-red-200 text-base mx-auto" />
                  )}
                  <span>
                    {Lastcalculated?.total_transction?.TransactionsGrowth}%
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[35%] w-3 bg-green rounded-full"></div>
              </div>
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[80%] w-3 bg-green rounded-full"></div>
              </div>
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[50%] w-3 bg-green rounded-full"></div>
              </div>
              <div className="h-24 w-3 bg-[#D9D7CF] rounded-full relative">
                <div className="absolute bottom-0 left-0 h-[30%] w-3 bg-green rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">Total Funds</p>
              <div className="flex items-center gap-7 mt-3">
                <h2 className="text-black font-semibold text-[34px]">
                  {Lastcalculated?.total_funds?.funds}
                </h2>
                <div
                  className={`${
                    Lastcalculated?.total_funds?.TotalFundsGrowth >= 0
                      ? "bg-green"
                      : "bg-red-200"
                  }  px-2 py-1 rounded-full text-white flex items-center justify-center  text-sm font-medium`}
                >
                  {Lastcalculated?.total_funds?.TotalFundsGrowth}%
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">
                Total Released Funds
              </p>
              <div className="flex items-center gap-7 mt-3">
                <h2 className="text-black font-semibold text-[34px]">
                  {Lastcalculated?.total_releaseFund?.realseFund === null
                    ? 0
                    : Lastcalculated?.total_releaseFund?.realseFund}
                </h2>
                <div
                  className={`${
                    Lastcalculated?.total_releaseFund?.Release_Funds_Growth > !0
                      ? "bg-green"
                      : "bg-red-200"
                  }  px-2 py-1 rounded-full text-white flex items-center justify-center  text-sm font-medium`}
                >
                  {Lastcalculated?.total_releaseFund?.Release_Funds_Growth}%
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-xl p-7 flex items-center justify-between">
            <div>
              <p className="text-gay-300 text-base font-medium">
                Funds Pending to Release
              </p>
              <div className="w-[200px] h-3 bg-[#D9D7CF] rounded-full mt-5 relative">
                <div
                  className={`w-[${parseInt(
                    Lastcalculated?.pending_Funds?.pendingPaymentPercentage
                  )}%] h-3 bg-green rounded-full`}
                ></div>
              </div>
              <p className="text-sm font-medium text-gay-300 mt-5">
                <span
                  className={`${
                    Lastcalculated?.pending_Funds
                      ?.pendingPaymentLastPercentage > !0
                      ? "text-green"
                      : "text-red-200"
                  } `}
                >
                  {Lastcalculated?.pending_Funds?.pendingPaymentLastPercentage}%
                </span>{" "}
                from last month
              </p>
            </div>
            <h2 className="text-Dark_black font-semibold text-[34px]">
              {Lastcalculated?.pending_Funds?.pendingPaymentsCount}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceDashboard;
