import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import Inputfild from "../../common/Inputfild";
import { TbCameraPlus } from "react-icons/tb";
import { IoCamera } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import NormalBtn from "../../common/NormalBtn";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-12 px-3 lg:px-20">
        <FaArrowLeft
          className="text-2xl cursor-pointer"
          onClick={() => navigate(Routing.InstructorLogin)}
        />
        <div className="flex items-center justify-between gap-6 md:flex-nowrap flex-wrap">
          <div className="w-full">
            <h1 className="text-4xl font-semibold mt-6">Add Information!</h1>
            <p className="text-[15px] text-black/70 mt-1">
              Please fill below details to create your profile in{" "}
              <span className="font-bold">martial arts hub</span> as an
              Instructor!
            </p>
            <div className="mt-10">
              <Inputfild
                type={"text"}
                placeholder={"Name"}
                Label={"Name"}
                name={"name"}
                Labelclass={"text-[#000] font-medium"}
                className={"rounded-xl md:w-full h-[70px]"}
              />
            </div>
          </div>
          <div className="md:w-[245px] w-full h-[202px] rounded-xl bg-[#DAD8D0] flex items-center justify-center relative">
            <div className="flex items-center justify-center flex-col">
              <IoCamera className="text-black/20 text-4xl" />
              <p className="text-black/20 text-[13px] font-medium">
                Add Profile Picture
              </p>
            </div>
            <input
              type="file"
              name=""
              id=""
              className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-9 mt-9">
          <div>
            <Inputfild
              type={"Email"}
              placeholder={"Email"}
              Label={"Email"}
              name={"email"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"number"}
              placeholder={"Mobile No."}
              Label={"Mobile No."}
              name={"mobile_number"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Inputfild
              type={"text"}
              placeholder={"Add Availability"}
              Label={"Add Availability"}
              name={"availability"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className={`text-sm text-black block font-medium`}>
              Add Bio
            </label>
            <textarea
              name={"bio"}
              placeholder={"Write about you"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Inputfild
              type={"text"}
              placeholder={"Add tagline"}
              Label={"Add tagline"}
              name={"tagline"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className={`text-sm text-black block font-medium`}>
              Add your Experience
            </label>
            <textarea
              name={"experience"}
              placeholder={"Add experience here"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div>
            <label className={`text-sm text-black block font-medium`}>
              Add Training History
            </label>
            <textarea
              name={"traininghistory"}
              placeholder={"Add Training History"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div>
            <label className={`text-sm text-black block font-medium`}>
              Add your Certifications
            </label>
            <textarea
              name={"certifications"}
              placeholder={"Add your Certifications"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Inputfild
              type={"text"}
              placeholder={"Add Keywords"}
              Label={"Add Keywords"}
              name={"keywords"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Inputfild
              type={"text"}
              placeholder={"Add Keywords"}
              Label={"Add Keywords"}
              name={"keywords"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className={`text-sm text-black block font-medium`}>
              Upload ID Proof (Aadhar Card/Driving License/Instructor
              Certificate)
            </label>
            <div className="h-[200px] rounded-xl bg-[#DAD8D0] flex items-center justify-center relative mt-1">
              <div className="flex items-center justify-center flex-col">
                <MdCloudUpload className="text-black/20 text-4xl" />
                <p className="text-black/20 text-[13px] font-medium text-center">
                  Upload ID Proof (Aadhar Card/Driving License/Instructor
                  Certificate) here
                </p>
              </div>
              <input
                type="file"
                name=""
                id=""
                className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-9 mt-[75px]">
          <h2 className="md:col-span-2 col-span-1 text-2xl text-black font-semibold">
            Hourly Rates
          </h2>
          <div>
            <Inputfild
              type={"text"}
              placeholder={"Add hourly rates here"}
              Label={"Do you want to give first free session?"}
              name={"rate"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"text"}
              placeholder={"eg. Online"}
              Label={"Class Type for first free session (Online/Face-to-Face/Both)"}
              name={"type"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"text"}
              placeholder={"eg. Online"}
              Label={"Class Type for Private Lesson (1-on-1) (Online/Face-to-Face/Both)"}
              name={"rate"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"text"}
              placeholder={"Add hourly rates here"}
              Label={"Do you want to give first free session?"}
              name={"rate"}
              Labelclass={"text-[#000] font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
        </div>
        <div className="mt-16 flex justify-end">
          <NormalBtn text={"Save Info & Create Profile"}   />
        </div>
      </div>
    </>
  );
};

export default Profile;
