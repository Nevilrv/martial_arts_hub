import React from "react";
import OutlineBtn from "../../common/OutlineBtn";
import { HiMiniSignal } from "react-icons/hi2";
import { BsPatchCheckFill, BsQuote } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import Instructors from "../../common/Instructors";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import user from "../../../../assets/images/user.png";
import GetInTouch from "../../common/Get_In_Touch";
import Instructor4 from "../../../../assets/images/Instructor-4.png";
import { BiHeart } from "react-icons/bi";

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
  return (
    <>
      <div className="pt-space">
        <div className="px-3 lg:px-8">
          <div className="grid md:grid-cols-3 grid-cols-1 md:px-8 gap-[71px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <OutlineBtn text={"Martial Arts"} />
                <OutlineBtn text={"Karate"} />
                <OutlineBtn text={"Taekwondo"} />
                <OutlineBtn text={"Jiu-Jitsu"} />
              </div>
              <div className="mt-8">
                <h2 className="text-[40px] font-semibold md:w-[80%]">
                  I’m here to support your fitness ambitions, cut fat, and
                  develop strong, flexible muscles.
                </h2>
              </div>
              <div className="mt-8 bg-gay-200 rounded-[20px] px-9 py-7">
                <h2 className="text-[26px] font-semibold">Instructor</h2>
                <p className="text-black/70 text-lg">
                  Top-rated instructor. Highly skilled, extensive experience,
                  certified qualifications, and prompt responses. Alex is eager
                  to schedule your first Pilates session.
                </p>
              </div>
              <div className="mt-20">
                <h2 className="text-[22px] font-semibold text-black">
                  About Me
                </h2>
                <p className="text-black/70 text-lg text-justify my-4">
                  Hi, I'm Kia John! I started my martial arts journey 5 years
                  ago and have been dedicated to improving my skills ever since.
                </p>
                <p className="text-black/70 text-lg text-justify">
                  Training in Karate, Taekwondo, Brazilian Jiu-Jitsu has boosted
                  my confidence, discipline, and physical fitness. I enjoy the
                  challenges and continuous learning that come with martial
                  arts. Outside of training, I love [hobbies/interests], which
                  help keep me balanced and active. I'm grateful to be part of
                  such a supportive martial arts community!
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
                    Over 20 years of martial arts experience
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
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
                  </p>
                </div>
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  Certifications
                </h2>
                <div className="grid grid-cols-2 gap-2 my-5 justify-between">
                  <p className="flex items-center gap-2 text-black/70 text-lg">
                    <BsPatchCheckFill className="text-gay-400" />
                    5th Degree Black Belt in Karate
                  </p>
                  <p className="flex items-center gap-2 text-black/70 text-lg">
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
                  </p>
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
                      First Free Session
                    </p>
                    <p className="text-black text-lg pl-5">
                      Book your first introductory session for free!
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-red text-base">
                      <BsPatchCheckFill className="" />
                      Private Lesson (1-on-1)
                    </p>
                    <p className="text-black text-lg pl-5">$75 per hour</p>
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
                <img src={Instructor4} alt={Instructor4} className="w-full" />
                <div className="h-[34px] w-[34px] bg-white rounded-full absolute top-4 right-3 flex items-center justify-center">
                  <BiHeart  className="text-2xl"/>
                </div>
                <div className="instructor_profile_shape"></div>
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
