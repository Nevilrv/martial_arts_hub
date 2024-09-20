import React from "react";
import OutlineBtn from "../../common/OutlineBtn";
import { HiMiniSignal } from "react-icons/hi2";
import { Camera, Fullscreen } from "../../../../assets/icon";
import { MdOutlineTranslate } from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";
import Wrestling from "../../../../assets/images/Rectangle 10.png"

const AttendTraining = () => {
  return (
    <>
      <section className="px-3 lg:px-8">
        <div className="md:px-8">
          <div className="grid md:grid-cols-2 gap-11">
            <div className="w-full">
              <h2 className="text-[34px] font-semibold text-black">
                Online Class: Wrestling
              </h2>
              <div className="px-4 py-3 bg-red-100 text-red-200 text-xl font-semibold max-w-[230px] rounded-[5px] mt-2">
                Instructor: Kia John
              </div>
              <div className="mt-14">
                <h2 className="text-[22px] font-semibold text-black">
                  About the Class
                </h2>
                <div className="flex items-center gap-3 mt-4 flex-wrap">
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
                      <div className="mr-2">
                        <Fullscreen className="text-gay-300 text-2xl" />
                      </div>
                    }
                  />
                  <OutlineBtn
                    text={"English"}
                    className={"font-medium"}
                    icon={
                      <MdOutlineTranslate className="text-gay-300 text-2xl mr-2" />
                    }
                  />
                </div>
                <p className="text-black/70 text-[17px] mt-4 text-justify">
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
            </div>
            <div className="w-full rounded-[20px] overflow-hidden relative">
              <img src={Wrestling} alt="" srcset="" className="w-full backdrop-blur-[3px]" />
              <button className="bg-[#E1D2D1]/70  text-red-200 w-[245px] justify-center h-[65px] rounded-full text-[22px] font-semibold flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Camera color={"#cb3530"} />
              Join Live Class
              </button>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-[22px] font-semibold text-black">
              About Instructor
            </h2>
            <p className="text-black/70 text-[17px] mt-4 text-justify">
              Hi, I'm Kia John! I started my martial arts journey 5 years ago
              and have been dedicated to improving my skills ever since. <br />
              Training in Karate, Taekwondo, Brazilian Jiu-Jitsu has boosted my
              confidence, discipline, and physical fitness. I enjoy the
              challenges and continuous learning that come with martial arts.
              Outside of training, I love [hobbies/interests], which help keep
              me balanced and active. I'm grateful to be part of such a
              supportive martial arts community!
            </p>
          </div>
          <div className="flex items-end justify-between flex-wrap mt-14 mb-5">
            <div>
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
            <button className="h-[65px] w-[245px] bg-black text-white flex items-center justify-center gap-3 text-xl rounded-full">
              <Camera />
              Join Live Class
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AttendTraining;
