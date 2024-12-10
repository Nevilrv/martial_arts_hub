import React, { useEffect, useState } from "react";
import Instructor4 from "../../../../assets/images/Instructor-4.png";
import PieChart from "./PieChart";
import OutlineBtn from "../../common/OutlineBtn";
import { MdCalendarToday } from "react-icons/md";
import BarChart from "./BarChart";
// import StudentsPieChart from "./StudentsPieChart";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import {
  Admin_Dashboard_data,
  Admin_Notification,
  Admin_Progress,
  Instructor_Request,
} from "../../../services/Admin/DashboardAPI";
import User from "../../../../assets/images/userProfile.jpg";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import Socket from "../../common/Socket";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { FaUser, FaUserTie } from "react-icons/fa6";

const Dashboard = () => {
  const [DashboardCard, setDashboardCard] = useState({});
  const [Admin_Progress_data, setAdmin_Progress_data] = useState([]);
  const [admin_Notification, setadmin_Notification] = useState([]);
  const [Instructor_Request_List, setInstructor_Request_List] = useState([]);
  const [Loading, setLoading] = useState(false);
  const currentMonthIndex = new Date().getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex + 1);
  const navigate = useNavigate();
  dayjs.extend(utc);
  const currentTime = dayjs.utc();

  const data = [
    {
      Titile: "Total Classes",
      number: DashboardCard.total_classes,
      color: "text-black",
    },
    {
      Titile: "Active Classes",
      number: DashboardCard.active_classes,
      color: "text-green",
    },
    {
      Titile: "Total Instructors",
      number: DashboardCard.total_instructor,
      color: "text-black",
    },
    {
      Titile: "Total Students",
      number: DashboardCard.total_student,
      color: "text-black",
    },
    {
      Titile: "Blocked Students",
      number: DashboardCard.block_student,
      color: "text-red-200",
    },
    {
      Titile: "Total Instructor Requests",
      number: DashboardCard.total_instructor_request,
      color: "text-black",
    },
    {
      Titile: "Accepted Inst. Requests",
      number: DashboardCard.accept_instructor_request,
      color: "text-green",
    },
    {
      Titile: "Rejected Inst. Requests",
      number: DashboardCard.reject_instructor_request,
      color: "text-red-200",
    },
    {
      Titile: "Total Earning",
      number: DashboardCard.total_earning,
      color: "text-black",
    },
    {
      Titile: "Total Refunds",
      number: DashboardCard.total_refunds,
      color: "text-black",
    },
    {
      Titile: "Total Released Funds",
      number: DashboardCard.total_released_funds,
      color: "text-black",
    },
  ];
  // months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Dashboard card API
  const Get_Admin_Dashboard = async () => {
    setLoading(true);
    const result = await Admin_Dashboard_data();
    if (result?.success === true) {
      setDashboardCard(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        toast.info("Token is Expired");
        navigate(Routing.AdminLogin);
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    }
  };

  // pie chart data
  const Get_Progress = async () => {
    setLoading(true);
    const result = await Admin_Progress(selectedMonth);
    if (result?.success === true) {
      const processedData = result.data.map((item) =>
        item === null ? 0 : item
      );
      setAdmin_Progress_data(processedData);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    }
  };
  const Get_Instructor_Requests = async () => {
    setLoading(true);
    const result = await Instructor_Request();
    if (result?.success === true) {
      setInstructor_Request_List(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    }
  };

  const get_Notifications = async () => {
    const result = await Admin_Notification();
    if (result?.success === true) {
      setadmin_Notification(result.data);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    }
  };

  useEffect(() => {
    Socket.on("getNotification", (data) => {
      console.log("🚀 ~ Socket.on ~ data:", data);
      setadmin_Notification((prev) => [...prev, data]);
    });
    return () => {
      Socket.off("getNotification");
    };
  }, []);

  useEffect(() => {
    Get_Admin_Dashboard();
    Get_Instructor_Requests();
    get_Notifications();
  }, []);
  useEffect(() => {
    Get_Progress();
  }, [selectedMonth]);

  return (
    <>
      {Loading && <Spinner />}
      <div className="pt-9">
        <div className="sm:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 flex flex-col gap-4">
          {data.map((items) => (
            <>
              <div className="w-full bg-primary rounded-xl p-6 shadow-BoxShadow">
                <h2 className="text-gay-300 font-medium">{items.Titile}</h2>
                <h3 className={`${items.color} font-semibold text-4xl mt-2`}>
                  {items.number}
                </h3>
              </div>
            </>
          ))}
          <div className="row-span-2 bg-primary rounded-xl p-6 shadow-BoxShadow">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-gay-300">Notifications</p>
              <p className="text-red-200 underline font-medium">View All</p>
            </div>
            <div className="flex flex-col gap-5 max-h-[380px] overflow-y-auto">
              {admin_Notification.map((item) => (
                <div className="flex items-center gap-2 mt-5">
                  <div className="h-[32px] w-[34px] bg-gay-300 rounded-md flex items-center justify-center">
                    {item.notificationType === "New_student" ? (
                      <FaUser className="text-primary text-base" />
                    ) : item.notificationType === "New_dispute" ? (
                      <MdCalendarToday className="text-primary text-base" />
                    ) : item.notificationType === "Instructor_request" ? (
                      <FaUserTie className="text-primary text-base" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-black text-sm font-medium">
                      {item.title}
                    </p>
                    <p className="text-black/70 text-sm font-medium">
                      {currentTime.diff(dayjs.utc(item.createdAt), "minute")}{" "}
                      Minutes ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid xl:grid-cols-5 grid-cols-2 xl:col-span-3 col-span-2 gap-4">
            <div className="col-span-2 px-6 py-7 bg-primary rounded-xl">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gay-300">Progress</p>
                <select
                  id="Monthly"
                  name="Monthly"
                  value={selectedMonth}
                  onChange={handleChange}
                  className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
                >
                  {months.map((monthList, index) => (
                    <option key={index} value={index + 1}>
                      {monthList}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-center">
                {Admin_Progress_data?.length >= 0 && (
                  <PieChart data={Admin_Progress_data} />
                )}
              </div>
            </div>
            <div className="xl:col-span-3 col-span-2 bg-primary rounded-xl p-6 shadow-BoxShadow">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gay-300">
                  Instructor Requests
                </p>
                <p className="text-red-200 underline font-medium">View All</p>
              </div>
              {Instructor_Request_List.map((Request_List) => (
                <div className="flex flex-col gap-4 mt-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                        <img
                          src={Request_List.profile_picture || User}
                          alt=""
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm text-black font-semibold">
                          {Request_List.name}
                        </h2>
                        <div className="flex items-center mt-1">
                          <p className="text-xs text-black/70">
                            <span className="font-semibold">Date:</span>{" "}
                            {Request_List.joinDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <OutlineBtn
                      text={"View Profile"}
                      className={"h-[40px] bo"}
                      onClick={() =>
                        navigate(
                          Routing.Admin_Instructor_Managementnew_Requests
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
          <div className="bg-primary rounded-xl p-6 shadow-BoxShadow  mt-4 lg:col-span-5">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-gay-300">
                Weekly Transactions
              </p>
            </div>
            <BarChart />
          </div>
          {/* <div className="bg-primary rounded-xl p-6 shadow-BoxShadow  mt-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-gay-300">
                Students & Instructors by Country
              </p>
            </div>
            <div className="grid 2xl:grid-cols-2 items-center gap-[10px] mt-4">
              <div className="border border-gay-300/15 rounded-2xl">
                <h2 className="text-center text-base font-semibold text-Dark_black mt-6 mb-2">
                  No. of Students
                </h2>
                <StudentsPieChart />
              </div>
              <div className="border border-gay-300/15 rounded-2xl">
                <BarChart />
                <h2 className="text-center text-base font-semibold text-Dark_black mt-6 mb-2">
                  No. of Instructors
                </h2>
                <StudentsPieChart />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
