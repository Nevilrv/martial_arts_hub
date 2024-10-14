import React, { useEffect, useState } from "react";
import OutlineBtn from "../../common/OutlineBtn";
import { HiMiniSignal } from "react-icons/hi2";
import { BsPatchCheckFill, BsQuote } from "react-icons/bs";
import { IoIosArrowRoundForward, IoMdShare } from "react-icons/io";
import Instructors from "../../common/Instructors";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import user from "../../../../assets/images/user.png";
import GetInTouch from "../../common/Get_In_Touch";
import Instructor4 from "../../../../assets/images/Instructor-4.png";
import { BiHeart } from "react-icons/bi";
import {
  GetInstructorDetails,
  GetLikesChek,
  InstructorLike,
} from "../../../services/student/Homepage/Homepage";
import Spinner from "../../../layouts/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { ShareIcon } from "../../../../assets/icon";
import { Routing } from "../../../shared/Routing";

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

  const [Instructor, setInstructor] = useState({});
  const [loading, setLoading] = useState(false);
  const [Like, setLike] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getInstructor = async () => {
    setLoading(true);
    const result = await GetInstructorDetails(id);
    if (result?.success === true) {
      setLoading(false);
      setInstructor(result.data);
    } else {
      setLoading(false);
    }
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
      if (result?.message === "Invalid token, Please Log-Out and Log-In again") {
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
      console.log(result.data, "=======>like api");
      result.data.forEach((data) => {
        if (data.instructorId === id) {
          setLike(true); // Set like to false if condition matches
        }
      });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstructor();
    CheckLikes();
  }, [id]);

  return (
    <>
      {loading && <Spinner />}
      <div className="pt-[80px]">
        <div className="px-3 lg:px-8">
          <div className="grid md:grid-cols-3 grid-cols-1 md:px-8 gap-[71px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <OutlineBtn text={Instructor.category} />
              </div>
              <div className="mt-8">
                <h2 className="text-[40px] font-semibold md:w-[80%]">
                  {Instructor.tagline}
                </h2>
              </div>
              <div className="mt-8 bg-gay-200 rounded-[20px] px-9 py-7">
                <h2 className="text-[26px] font-semibold">Instructor</h2>
                <p className="text-black/70 text-lg">{Instructor.bio}</p>
              </div>
              <div className="mt-20">
                <h2 className="text-[22px] font-semibold text-black">
                  About Me
                </h2>
                <p className="text-black/70 text-lg text-justify my-4">
                  Hi, I'm {Instructor.name}! I started my martial arts journey{" "}
                  {Instructor.experience}.
                </p>
                <p className="text-black/70 text-lg text-justify">
                  {Instructor.certifications}
                </p>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  About the Class
                </h2>
                <div className="flex items-center gap-3 my-5">
                  <OutlineBtn
                    text={"Online"}
                    className={"font-medium"}
                    icon={
                      <HiMiniSignal className="text-gay-300 text-2xl mr-2" />
                    }
                  />
                  <OutlineBtn
                    text={"All Levels"}
                    className={"font-medium"}
                    icon={
                      <HiMiniSignal className="text-gay-300 text-2xl mr-2" />
                    }
                  />
                </div>
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
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Over {Instructor.experience}
                  </p>
                  {/* <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Specialized in Karate, Taekwondo, and Brazilian Jiu-Jitsu
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Competed in national and international tournaments
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Trained under renowned martial arts masters globally
                  </p> */}
                </div>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  Certifications
                </h2>
                <div className="grid grid-cols-2 gap-2 my-5 justify-between">
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    {Instructor.certifications}
                  </p>
                  {/* <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Certified Personal Trainer (CPT)
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    4th Degree Black Belt in Taekwondo
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    First Aid and CPR Certified
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Certified Brazilian Jiu-Jitsu Instructor
                  </p> */}
                </div>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  Hourly Rates
                </h2>
                <div className="grid grid-cols-2 gap-2 my-5 justify-between">
                  <div>
                    <p className="flex items-center gap-2 text-red text-base">
                      <BsPatchCheckFill className="" />
                      Online Lesson
                    </p>
                    <p className="text-black text-lg pl-5">
                      {Instructor.privateSessionOnlineHourlyRate}
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-red text-base">
                      <BsPatchCheckFill className="" />
                      Private Lesson (1-on-1)
                    </p>
                    <p className="text-black text-lg pl-5">
                      ${Instructor.privateSessionFaceToFaceHourlyRate} per hour
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
                    <BsPatchCheckFill className="text-gay-400" />
                    Karate Fundamentals
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Advanced Techniques
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
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
                    <BsPatchCheckFill className="text-gay-400" />
                    Karate Fundamentals
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Advanced Techniques
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    Competition Analysis
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-[25px] overflow-hidden relative">
                <img
                  src={Instructor.profile_picture}
                  alt={Instructor4}
                  className="w-full h-[613px] grayscale hover:grayscale-0 object-cover"
                />

                {/* <img src={Instructor4} alt={Instructor4} className="w-full" /> */}
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
                Kiya Jhon
              </h2>
              <div className="mt-3 flex items-center gap-x-1">
                <div className="flex items-center gap-0.5">
                  <FaStar className="text-yellow-100 text-lg" />
                  <FaStar className="text-yellow-100 text-lg" />
                  <FaStar className="text-yellow-100 text-lg" />
                  <FaStar className="text-yellow-100 text-lg" />
                  <FaStar className="text-gay-500 text-lg" />
                </div>
                <p className="text-black/50 text-sm">
                  4.3 <span className="underline">(25 Reviews)</span>
                </p>
              </div>
              <div className="grid grid-cols-2 mt-10 gap-4">
                <h2 className="text-lg text-Dark_black font-semibold">
                  Hourly Fee
                </h2>
                <h2 className="text-lg text-Dark_black font-semibold text-right">
                  $5
                </h2>
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
                  45+
                </h2>
              </div>

              <div className="mt-10 flex flex-col justify-center items-center gap-4">
                <OutlineBtn
                  onClick={() => navigate(Routing.StudentBookClass)}
                  text={"Book Now"}
                  className={
                    "sm:w-[375px] w-full h-[60px] bg-black text-white font-medium border-none"
                  }
                />
                <OutlineBtn
                  text={"Send a message"}
                  icon={
                    <AiOutlineMessage className="text-black text-2xl mr-3" />
                  }
                  className={
                    "sm:w-[375px] w-full h-[60px] bg-transparent text-black font-medium"
                  }
                />
                <OutlineBtn
                  text={"Share Instructor’s Profile"}
                  icon={<IoMdShare className="text-black text-xl mr-3" />}
                  className={
                    "sm:w-[375px] w-full h-[60px] bg-transparent text-black font-medium"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
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
        </div>
        <section className="px-3 lg:px-8 mt-20">
          <div className="md:px-8">
            <h2 className="font-medium text-[32px] flex items-center">
              Reviews{" "}
              <span className="text-base flex items-center gap-1">
                <FaStar className="text-yellow-100" /> 4.3 (25 Reviews)
              </span>
            </h2>
            <Slider {...settings} className="mt-5 slider-2 relative">
              <div className="px-2">
                <div className="p-7 border border-[#848484]/30 rounded-3xl">
                  <BsQuote className="text-7xl text-gay-400/25" />
                  <p className="text-black/70 text-justify">
                    Training here has been a transformative experience. I've
                    gained confidence, discipline, and strength, thanks to the
                    supportive and skilled instructors.
                  </p>
                  <div className="flex items-start mt-3 gap-3">
                    <img src={user} alt="" />
                    <div>
                      <h3 className="text-black text-lg font-semibold">
                        Sarah Kim
                      </h3>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-gay-500" />
                        <p className="text-black/50 text-[11px]">4.3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="p-7 border border-[#848484]/30 rounded-3xl">
                  <BsQuote className="text-7xl text-gay-400/25" />
                  <p className="text-black/70 text-justify">
                    The instructors are amazing and supportive. I've learned so
                    much and made great friends. The positive atmosphere and
                    challenging classes have made a huge difference in my
                    fitness and focus.
                  </p>
                  <div className="flex items-start mt-3 gap-3">
                    <img src={user} alt="" />
                    <div>
                      <h3 className="text-black text-lg font-semibold">
                        Sarah Kim
                      </h3>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-gay-500" />
                        <p className="text-black/50 text-[11px]">4.3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="p-7 border border-[#848484]/30 rounded-3xl">
                  <BsQuote className="text-7xl text-gay-400/25" />
                  <p className="text-black/70 text-justify">
                    Training here has been a transformative experience. I've
                    gained confidence, discipline, and strength, thanks to the
                    supportive and skilled instructors.
                  </p>
                  <div className="flex items-start mt-3 gap-3">
                    <img src={user} alt="" />
                    <div>
                      <h3 className="text-black text-lg font-semibold">
                        Sarah Kim
                      </h3>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-gay-500" />
                        <p className="text-black/50 text-[11px]">4.3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="p-7 border border-[#848484]/30 rounded-3xl">
                  <BsQuote className="text-7xl text-gay-400/25" />
                  <p className="text-black/70 text-justify">
                    Training here has been a transformative experience. I've
                    gained confidence, discipline, and strength, thanks to the
                    supportive and skilled instructors.
                  </p>
                  <div className="flex items-start mt-3 gap-3">
                    <img src={user} alt="" />
                    <div>
                      <h3 className="text-black text-lg font-semibold">
                        Sarah Kim
                      </h3>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-yellow-100" />
                        <FaStar className="text-gay-500" />
                        <p className="text-black/50 text-[11px]">4.3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="px-3 lg:px-8 mt-20">
          <div className="md:px-8">
            <Instructors />
          </div>
        </section>
        <GetInTouch />
      </div>
    </>
  );
};

export default InstructorProfile;
