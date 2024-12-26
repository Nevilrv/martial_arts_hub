import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { Thunderstorm, WorkOut } from "../../../../../assets/icon";
import ProfileCard from "../../../common/Dashboard/ProfileCard";
import DashboardCard from "../../../common/Dashboard/DashboardCard";
import Tabs from "../..";
import { toast } from "react-toastify";
import { DashboardData } from "../../../../services/Instructor/Dashboard/DashboardApi";
import ClassRequestcard from "./ClassRequestcard";
import OutlineBtn from "../../../common/OutlineBtn";
import Spinner from "../../../../layouts/Spinner";
import { Routing } from "../../../../shared/Routing";
import { useNavigate } from "react-router-dom";
import User from "../../../../../assets/images/userProfile.jpg";

const Index = () => {
  const ProfileDetals = [
    {
      title: "Joined as:",
      details: "Instructor",
    },
    {
      title: "Joined on:",
      details: " 28 July, 2024",
    },
    {
      title: "Profile Completion:",
      details: "5%",
    },
    {
      title: "Your Ratings:",
      details: "3",
    },
  ];
  const ClassCard = {
    CardTitle: "My Classes",
    CardIcon: <WorkOut />,
    CardHeadding: "Your Class list is empty!",
    CardDetails:
      "You haven't created any courses yet! after creating class it’s details wil be shown here.",
    Plus: true,
  };
  const EarningsCard = {
    CardTitle: "Earnings",
    CardIcon: <Thunderstorm />,
    CardHeadding: "Nothing to Show!",
    CardDetails:
      "No students have joined your class yet! Once someone joins, your earnings will be shown here.",
    Plus: false,
  };

  const [loading, setLoading] = useState(false);
  const [Profile, SetProfile] = useState({});
  const [Class, setClass] = useState([]);
  const [MessagesRequest, setMessagesRequest] = useState([]);
  const [earning, setearning] = useState({});
  const Navigate = useNavigate();

  const getdata = async () => {
    setLoading(true);
    const result = await DashboardData();
    if (result?.success === true) {
      SetProfile(result.data.profile);
      localStorage.setItem(
        "profile_picture",
        result.data.profile.profile_picture
      );
      setClass(result.data.myClasses);
      setMessagesRequest(result.data.messageRequest);
      setearning(result.data.earnings);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        toast.info("Token is Expired");
        Navigate(Routing.InstructorLogin);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    getdata();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        <div className="mt-10 px-3 lg:px-8 grid lg:grid-cols-3 gap-5">
          <ProfileCard ProfileDetals={Profile || ProfileDetals} />
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-5">
            <div className="2xl:col-span-1 lg:col-span-2 col-span-1 max-h-[375px] overflow-y-auto">
              <ClassRequestcard cardDetails={ClassCard} data={Class} />
            </div>
            <div className="2xl:col-span-1 lg:col-span-2 col-span-1 max-h-[375px] overflow-y-auto">
              <DashboardCard cardDetails={EarningsCard} earnings={earning} />
            </div>
            <div className="lg:col-span-2 bg-gay-600 rounded-3xl w-full overflow-x-auto">
              <div className=" bg-gay-600 rounded-3xl px-8 py-7 max-h-[375px] overflow-auto w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-gay-300 text-lg font-medium">
                    Messages Requests
                  </h3>
                </div>
                {MessagesRequest?.length <= 0 ? (
                  <div className="flex items-center justify-center flex-col mt-24">
                    <FaPaperPlane className="text-[#BDBBB5] text-4xl" />
                    <h3 className="text-black font-semibold text-lg">
                      Your Requests list is empty!
                    </h3>
                    <p
                      className={`text-gay-300 text-[13px] text-center mx-auto`}
                    >
                      You haven't received any requests yet! When student send
                      inquiry message It’s details will be shown here.
                    </p>
                  </div>
                ) : (
                  MessagesRequest.map((Request) => (
                    <div
                      className="md:h-[115px] md:py-0 py-3 flex items-center justify-between border-b border-gay-400 flex-wrap "
                      onClick={() => Navigate(Routing.InstructorMessageRequest)}
                    >
                      <div className="flex items-center flex-wrap">
                        <div className="sm:w-[82px] w-1/2 sm:mx-0 mx-auto sm:h-[82px] overflow-hidden rounded-full aspect-square">
                          <img
                            src={Request.profile_picture || User}
                            alt="Wrestling"
                            className="w-full h-full object-cover object-top grayscale"
                          />
                        </div>
                        <div className="sm:ml-5 ml-0">
                          <h2 className="text-black texrt-[20px] font-medium">
                            {Request.name}
                          </h2>
                          <div className="flex items-center flex-wrap">
                            <p className="text-[13px] text-black/70  mt-0.5">
                              <span className="font-medium">
                                Request received on:
                              </span>{" "}
                              {Request.recived}
                            </p>
                            <span className="text-xl mt-1 text-black/70 h-[5px] w-[5px] rounded-full bg-black/70 mx-1 sm:block hidden"></span>
                            <p className="text-[13px] text-black/70  mt-0.5">
                              <span className="font-medium">
                                Inquiry class:
                              </span>
                              {Request.title}
                            </p>
                          </div>
                          <p className="text-black/70 text-base max-w-2xl">
                            {Request.body}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <OutlineBtn
                          text={"See Profile"}
                          className={
                            "bg-transparent border-black text-black text-sm sm:w-auto w-full sm:mt-0 mt-3"
                          }
                        />
                        <OutlineBtn
                          text={"View Request"}
                          className={
                            "bg-green border-none text-white font-medium sm:w-auto w-full"
                          }
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Index;
