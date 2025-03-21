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
import BookingRequestcard from "./BookingRequestcard";

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
  const [BookingRequest,setBookingRequest] = useState([])
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
      setBookingRequest(result.data.bookingRequest)
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
        <div className="mt-10 px-3 lg:px-8 grid lg:grid-cols-4 gap-5">
          <ProfileCard ProfileDetals={Profile || ProfileDetals} />
          <div className="lg:col-span-3 grid lg:grid-cols-2 gap-5">
            <div className="xl:col-span-1 lg:col-span-2 col-span-1 max-h-[375px] overflow-y-auto">
              <ClassRequestcard cardDetails={ClassCard} data={Class} />
            </div>
            <div className="xl:col-span-1 lg:col-span-2 col-span-1 max-h-[375px] overflow-y-auto">
              <DashboardCard cardDetails={EarningsCard} earnings={earning} />
            </div>
            <div className="xl:col-span-1 lg:col-span-2 col-span-1 max-h-[375px] overflow-y-auto">
              <BookingRequestcard cardDetails={BookingRequest} />
            </div>
            <div className="xl:col-span-1 lg:col-span-2 col-span-1 max-h-[375px] bg-gay-600 rounded-3xl overflow-x-auto" >
              <div className=" bg-gay-600 rounded-3xl px-8 py-7 max-h-[375px] overflow-auto w-full" id="hideScoll">
                <div className="flex items-center justify-between">
                  <h3 className="text-gay-300 text-lg font-medium">
                    Message Requests
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
                    <div className="sm:flex justify-between py-3" onClick={() => Navigate(Routing.InstructorMessageRequest)}>
                      <div className="sm:flex gap-3">
                        <div className="sm:w-[82px] w-1/2 sm:mx-0 mx-auto sm:h-[82px] overflow-hidden rounded-full aspect-square">
                          <img
                            src={Request.profile_picture || User}
                            alt="Wrestling"
                            className="w-full h-full object-cover object-top grayscale"
                          />
                        </div>
                        <div className="">
                          <h2 className="text-black texrt-[20px] font-medium">
                            {Request.name}
                          </h2>
                          <div>
                            <p className="text-[13px] text-black/70  mt-0.5">
                              <span className="font-medium">
                                Request received on:
                              </span>{" "}
                              {Request.recived}
                            </p>
                          <p className="text-[13px] text-black/70  mt-0.5">
                              <span className="font-medium">
                                Inquiry:
                              </span>
                              {Request.title}
                            </p>
                          </div>
                          <p className="text-black/70 text-[13px]">
                          <span className="font-medium">
                                Message:
                              </span>
                            {Request.body.slice(0,50)}...
                          </p>
                        </div>
                      </div>
                      <div>
                        <OutlineBtn
                          text={"View Request"}
                          className={
                            "bg-green text-nowrap border-none text-white font-medium sm:w-auto w-full"
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
