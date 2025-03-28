import React, { useEffect, useState } from "react";
import OutlineBtn from "../../common/OutlineBtn";
import { HiMiniSignal } from "react-icons/hi2";
import { BsPatchCheckFill, BsQuote } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoMdShare } from "react-icons/io";
import Instructors from "../../common/Instructors";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import GetInTouch from "../../common/Get_In_Touch";
import Instructor4 from "../../../../assets/images/Instructor-4.png";
import { BiHeart } from "react-icons/bi";
import {
  GetInstructorDetails,
  GetLikesChek,
  GetReviews,
  InstructorLike,
} from "../../../services/student/Homepage/Homepage";
import Spinner from "../../../layouts/Spinner";
import { json, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft, FaHeart } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { Routing } from "../../../shared/Routing";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
// import User from "../../../../assets/images/userImage.png";
import Inputfild from "../../common/Inputfild";
import { Send_inqury_messages } from "../../../services/student/class";
import User from "../../../../assets/images/userProfile.jpg";

const InstructorProfile = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const [Instructor, setInstructor] = useState();
  const [Reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [MessageSend, setMessageSend] = useState(false);
  const [Like, setLike] = useState(false);
  const [rating, setRating] = useState(0);
  const [freeFrist, setfreeFrist] = useState({})
  const [freeFristType, setfreeFristType] = useState({})
  console.log(freeFrist, "===================", freeFristType)
  const [inqurymessage, setInqurymessage] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  let category = [];

  const heandalChange = (e) => {
    setInqurymessage({
      ...inqurymessage,
      [e.target.name]: e.target.value,
    });
  };

  const Send_Inqury_Message = async () => {
    setLoading(true);
    const body = {
      instructorId: id,
      title: inqurymessage.title,
      body: inqurymessage.body,
    };

    const result = await Send_inqury_messages(body);
    if (result?.success === true) {
      setLoading(false);
      setMessageSend(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        localStorage.clear();
        navigate(Routing.Initial);
      }
      toast.error(result?.message);
      setMessageSend(false);
      setLoading(false);
    }
  };

  const getInstructor = async () => {
    setLoading(true);
    const result = await GetInstructorDetails(id);
    setfreeFrist(JSON.parse(result.data.firstFreeSessionHourlyRate))
    setfreeFristType(JSON.parse(result.data.classTypeFirstFreeSession))
    if (result?.success === true) {
      setLoading(false);
      setInstructor(result.data);
      setRating(result.data.reviews);
    } else {
      setLoading(false);
    }
  };

  const getInstructorReviews = async () => {
    setLoading(true);
    const result = await GetReviews(id);
    if (result?.success === true) {
      setLoading(false);
      setReviews(result?.data?.studentFeedBack);
    } else {
      setLoading(false);
    }
  };

  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-100 text-lg" />
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt className="text-yellow-100 text-lg" key="half" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gay-500 text-lg" />
        ))}
      </div>
    );
  };

  const HeandleLike = async () => {
    setLoading(true);
    const result = await InstructorLike(
      id,
      JSON.parse(localStorage.getItem("_id"))
    );
    if (result?.success === true) {
      setLoading(false);
      setLike(!Like);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        toast.error("Please Login");
      }
      setLoading(false);
    }
  };

  const CheckLikes = async () => {
    setLoading(true);
    const result = await GetLikesChek(JSON.parse(localStorage.getItem("_id")));
    if (result?.success === true) {
      setLoading(false);
      result.data.forEach((data) => {
        if (data.instructorId === id) {
          setLike(true);
        }
      });
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        localStorage.clear();
        navigate(Routing.Initial);
        toast.error("Please Login");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstructor();
    CheckLikes();
    getInstructorReviews();
    // eslint-disable-next-line
  }, [id]);

  const HeandleBooking = () => {
    if (JSON.parse(localStorage.getItem("is_login")) && localStorage.getItem("StripeVerify") === 'true') {
      setMessageSend(true)
    } else {
      toast.error('Please complete your Stripe identity verification in the Profile section')
    }
  }

  if (Instructor?.category === undefined) {
    category = [];
  } else {
    if (typeof Instructor?.category === "object") {
      category = Instructor?.category;
    } else {
      category = JSON.parse(Instructor?.category);
    }
  }

  const handleCheck = () => {
    if (JSON.parse(localStorage.getItem("is_login")) && localStorage.getItem("StripeVerify") === 'true') {
      navigate(`/student/bookclass/${id}`);
    } else {
      toast.error('Please complete your Stripe identity verification in the Profile section')
    }
  }

  return (
    <>
      {loading && <Spinner />}
      <div className="pt-[80px]">
        <div className="px-3 lg:px-8">
          <div className="grid md:grid-cols-3 grid-cols-1 md:px-8 gap-[71px]">
            <div className="md:col-span-2 md:order-1 order-2">
              <div className="flex items-center gap-2 gap-y-4 flex-wrap">
                {category?.map((category) => (
                  <>
                    <OutlineBtn text={category.value} />
                  </>
                ))}
              </div>
              <div className="mt-8">
                <h2 className="text-[40px] font-semibold md:w-[80%]">
                  {Instructor?.tagline}
                </h2>
              </div>
              <div className="mt-8 bg-gay-200 rounded-[20px] px-9 py-7">
                <h2 className="text-[26px] font-semibold">Instructor</h2>
                <p className="text-black/70 text-lg">{Instructor?.bio}</p>
              </div>
              <div className="mt-20">
                <h2 className="text-[22px] font-semibold text-black">
                  About Me
                </h2>
                <p className="text-black/70 text-lg text-justify my-4">
                  Hi, I'm {Instructor?.name}! I started my martial arts journey{" "}
                </p>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  About the Class
                </h2>
                <p className="text-black/70 text-lg text-justify">
                  “This hour of martial arts training is a powerful gift to your
                  body and mind, fostering inner strength and outer resilience.
                  It’s not just about learning techniques; it’s about
                  cultivating discipline, confidence, and a sense of
                  empowerment. Beyond punches and kicks, it’s about achieving
                  overall well-being. Martial arts improve coordination and
                  mental clarity, bringing vitality and balance to both your
                  body and mind.”
                </p>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  Experience
                </h2>
                <div className="flex gap-2 my-5 flex-col">
                  <div className="text-black/70 text-lg flex gap-2">
                    <GoCheckCircleFill className="text-gay-400 text-2xl" />
                    <p id="exprince" className="lowercase">{Instructor?.experience}</p>
                  </div>
                </div>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  Hourly Rates
                </h2>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 my-5 justify-between">
                  <div>
                    <p className="flex items-center gap-2 text-red text-base text-red-200">
                      <GoCheckCircleFill className="" />
                      Online Lesson
                    </p>
                    <p className="text-black text-lg pl-5">
                      £{Instructor?.privateSessionOnlineHourlyRate} per hour
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-red text-base text-red-200">
                      <GoCheckCircleFill className="" />
                      Private Lesson (1-on-1)
                    </p>
                    <p className="text-black text-lg pl-5">
                      £{Instructor?.privateSessionFaceToFaceHourlyRate} per hour
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  I can help you with
                </h2>
                <div className="flex flex-col gap-2 my-5">
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <GoCheckCircleFill className="text-gay-400" />
                    Karate Fundamentals
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <GoCheckCircleFill className="text-gay-400" />
                    Advanced Techniques
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <GoCheckCircleFill className="text-gay-400" />
                    Competition Analysis
                  </p>
                </div>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  I can help you with
                </h2>
                <div className="flex flex-col gap-2 my-5">
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <GoCheckCircleFill className="text-gay-400" />
                    Karate Fundamentals
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <GoCheckCircleFill className="text-gay-400" />
                    Advanced Techniques
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <GoCheckCircleFill className="text-gay-400" />
                    Competition Analysis
                  </p>
                </div>
              </div>
            </div>
            <div className="md:order-2 order-1">
              <div className="rounded-[25px] overflow-hidden relative">
                <img
                  src={Instructor?.profile_picture || User}
                  alt={Instructor4}
                  className="w-full h-[613px] grayscale object-cover"
                />
                {freeFrist.value === 'Yes' && (
                  <div className="absolute top-10 left-0 bg-[#434343] text-white pl-2 text-xs w-[130px] h-[30px] flex items-center" style={{ clipPath: "polygon(75% 0%, 86% 52%, 75% 100%, 0% 100%, 0 50%, 0% 0%)" }}>
                    <span>1<sup>st</sup> Class is Free</span>
                  </div>
                )}
                {Like === false ? (
                  <div
                    className="h-[34px] w-[34px] bg-white rounded-full absolute top-4 right-3 flex items-center justify-center cursor-pointer"
                    onClick={HeandleLike}
                  >
                    <BiHeart className="text-2xl" />
                  </div>
                ) : (
                  <div
                    className="h-[34px] w-[34px] bg-red-150 rounded-full absolute top-4 right-3 flex items-center justify-center cursor-pointer"
                    onClick={HeandleLike}
                  >
                    <FaHeart className="text-xl text-red-200" />
                  </div>
                )}
                <div className="instructor_profile_shape"></div>
              </div>
              <h2 className="text-[26px] font-bold text-black mt-6">
                {Instructor?.name}
              </h2>
              <div className="mt-3 flex items-center gap-x-1">
                <div className="flex items-center gap-0.5">
                  {getStars(rating)}
                </div>
                <p className="text-black/50 text-sm">
                  {rating}{" "}
                  <span className="underline">
                    ({Instructor?.totalReviews} Reviews)
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-2 mt-10 gap-4">
                {/* <h2 className="text-lg text-Dark_black font-semibold">
                  Hourly Fee
                </h2>
                <h2 className="text-lg text-Dark_black font-semibold text-right">
                  $5
                </h2> */}
                <h2 className="text-lg text-Dark_black font-semibold">
                  Response Time
                </h2>
                <h2 className="text-lg text-Dark_black font-semibold text-right">
                  1 Hour
                </h2>
                <h2 className="text-lg text-Dark_black font-semibold">
                  Number of Students
                </h2>
                <h2 className="text-lg text-Dark_black font-semibold text-right">
                  {Instructor?.numberofstudent}+
                </h2>
              </div>

              <div className="mt-10 flex flex-col justify-center items-center gap-4">
                <OutlineBtn
                  onClick={handleCheck}
                  text={"Book Now"}
                  className={
                    "sm:w-[375px] w-full h-[60px] bg-black text-white font-medium border-none"
                  }
                />
                <OutlineBtn
                  text={"Send a message"}
                  onClick={() => HeandleBooking()}
                  icon={
                    <AiOutlineMessage className="text-black text-2xl mr-3" />
                  }
                  className={
                    "sm:w-[375px] w-full h-[60px] bg-transparent text-black font-medium"
                  }
                />
                {/* <OutlineBtn
                  text={"Share Instructor’s Profile"}
                  icon={<IoMdShare className="text-black text-xl mr-3" />}
                  className={
                    "sm:w-[375px] w-full h-[60px] bg-transparent text-black font-medium"
                  }
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-20">
          <section className="bg-[#646363] py-[107px] px-3 lg:px-8">
            <h2 className="text-[40px] text-white font-medium text-center">
              Download the App to Get more{" "}
              <span className="border-b border-white font-extrabold italic">
                Benefits
              </span>
            </h2>
            <p className="text-[22px] text-center text-white/50 mt-5 max-w-[820px] mx-auto">
              Join us and begin your journey towards ultimate fitness, where you
              will feel empowered, stronger, healthier, and more confident than
              ever before.
            </p>
            <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
              <button className="px-6 py-3 text-black flex items-center bg-white rounded-full text-lg font-medium">
                Get the App
                <IoIosArrowRoundForward className="text-black text-2xl group-hover:text-black  rotate-[-46deg]" />
              </button>
            </div>
          </section>
        </div> */}
        <section className="px-3 lg:px-8 mt-20">
          <div className="md:px-8">
            <h2 className="font-medium text-[32px] flex items-center">
              Reviews{" "}
              <span className="text-base flex items-center gap-1">
                <FaStar className="text-yellow-100" /> {rating} (
                {Instructor?.totalReviews} Reviews)
              </span>
            </h2>
            {Reviews?.length > 3 ? (
              <Slider {...settings} className="mt-5 slider-2 relative">
                {Reviews.map((Review) => (
                  <div className="px-2" key={Review.id}>
                    <div className="p-7 border border-[#848484]/30 rounded-3xl">
                      <BsQuote className="text-7xl text-gray-400/25" />
                      <p className="text-black/70 text-justify">
                        {Review.feedback}
                      </p>
                      <div className="flex items-start mt-3 gap-3">
                        <img
                          src={Review.studentProfile || User}
                          alt=""
                          className="w-[46px] h-[46px] rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-black text-lg font-semibold">
                            {Review.studentName}
                          </h3>
                          <div className="flex items-center gap-1">
                            {/* Replace hardcoded stars with dynamic stars */}
                            {getStars(Review.rating)}
                            <p className="text-black/50 text-[11px]">
                              {Review.rating}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-5 gap-3">
                {Reviews.map((Review) => (
                  <div className="px-2" key={Review.id}>
                    <div className="p-7 border border-[#848484]/30 rounded-3xl">
                      <BsQuote className="text-7xl text-gray-400/25" />
                      <p className="text-black/70 text-justify">
                        {Review.feedback}
                      </p>
                      <div className="flex items-start mt-3 gap-3">
                        <img
                          src={Review.studentProfile || User}
                          alt=""
                          className="w-[46px] h-[46px] rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-black text-lg font-semibold">
                            {Review.studentName}
                          </h3>
                          <div className="flex items-center gap-1">
                            {/* Replace hardcoded stars with dynamic stars */}
                            {getStars(Review.rating)}
                            <p className="text-black/50 text-[11px]">
                              {Review.rating}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="px-3 lg:px-8 mt-5">
          <div className="md:px-8">
            <Instructors />
          </div>
        </section>
        <GetInTouch />
      </div>

      <Dialog
        open={MessageSend}
        onClose={setMessageSend}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-[16.4px] transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary md:px-11 px-3 py-12 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-[95%] md:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 overflow-x-auto"
            >
              <div className="flex items-start">
                <FaArrowLeft
                  className="text-3xl text-black cursor-pointer"
                  onClick={() => setMessageSend(false)}
                />
                <div>
                  <h2 className="font-semibold text-3xl ml-4 mb-5">
                    Send a Message
                  </h2>
                  <p className="text-black/50 ml-4">
                    Please write your message here. Your message will be sent as
                    a request to the instructor. Once they accept your request,
                    you can chat with them. Write your query below:
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="mt-6 py-6 md:px-5 ">
                  <Inputfild
                    Label={"Title"}
                    name={"title"}
                    Labelclass={"customradiusBlack text-[22px]"}
                    className={"customradius md:w-full"}
                    placeholder={"Title"}
                    onChange={(e) => heandalChange(e)}
                  />
                </div>
                <div className="mt-1 py-6 md:px-5">
                  <label>Message</label>
                  <textarea
                    name="body"
                    onChange={(e) => heandalChange(e)}
                    className="p-7 h-[221px] bg-[#DAD8D0] w-full focus:outline-none rounded-xl"
                    placeholder="Write Your message here*"
                  />
                </div>
                <div className="flex items-center justify-end">
                  <OutlineBtn
                    text={"Send request"}
                    className={
                      "bg-black border-none text-white font-medium w-[175px] h-[55px]"
                    }
                    onClick={() => Send_Inqury_Message()}
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default InstructorProfile;
