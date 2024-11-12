import React, { useEffect, useState } from "react";
import { Routing } from "../../../shared/Routing";
import ProfileCard from "../../common/Dashboard/ProfileCard";
import DashboardCard from "../../common/Dashboard/DashboardCard";
import { FaPaperPlane } from "react-icons/fa6";
import { Thunderstorm, WorkOut } from "../../../../assets/icon";
import Tabs from "../Tabs";
import { StudentDashboard } from "../../../services/student/Profile/Profile";
import ClassRequestcard from "./ClassRequestcard";
import RecentClasses from "./RecentClasses";
import Spinner from "../../../layouts/Spinner";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const ProfileDetals = [
    {
      title: "Joined as:",
      details: "Student",
    },
    {
      title: "Joined on:",
      details: " 28 July, 2024",
    },
    {
      title: "Profile Completion:",
      details: "5%",
    },
  ];
  const ClassCard = {
    CardTitle: "Class Requests",
    CardIcon: <FaPaperPlane className="text-[#BDBBB5] text-4xl" />,
    CardHeadding: "Requests list is empty!",
    CardDetails:
      "You haven't send any course inquiry requests yet! when you send It’s details will be shown here.",
  };
  const PaymentsCard = {
    CardTitle: "Payments",
    CardIcon: <Thunderstorm />,
    CardHeadding: "Nothing to Show!",
    CardDetails:
      "You haven't joined any courses yet! after joining it’s details wil be shown here.",
  };
  const RecentClasseCard = {
    CardTitle: "Recent Classes",
    CardIcon: <WorkOut />,
    CardHeadding: "Your Class list is empty!",
    CardDetails:
      "You haven't bought any courses yet! when you join any course it’s details will be shown here.",
    CardDetailsclassName: "max-w-full",
  };
  const [studentData, setStudentData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Getdata = async () => {
    setLoading(true);
    const result = await StudentDashboard();
    if (result?.success === true) {
      setLoading(false);
      setStudentData(result.data);
    } else {  
      if (result?.message === "Invalid token, Please Log-Out and Log-In again") {
        localStorage.clear();
        navigate(Routing.StudentLogin);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    Getdata();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        <div className="mt-10 px-3 lg:px-8 grid lg:grid-cols-3 gap-5">
          <ProfileCard ProfileDetals={studentData.profile} />
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-5">
            <ClassRequestcard
              cardDetails={ClassCard}
              data={studentData.ClassRequests}
            />
            <DashboardCard cardDetails={PaymentsCard} />
            <div className="lg:col-span-2 bg-gay-600 rounded-3xl">
              <RecentClasses cardDetails={RecentClasseCard} data={studentData.recentClass} />
            </div>
          </div>
        </div>
      </Tabs>
      {/* <DashboardPage/>  */}
    </>
  );
};

export default Dashboard;
