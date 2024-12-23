import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import GetInTouch from "../../common/Get_In_Touch";
import { Link, useLocation } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { ShareIcon } from "../../../../assets/icon";
import OutlineBtn from "../../common/OutlineBtn";
import { Routing } from "../../../shared/Routing";
import {
  Student_Profile_Data,
  Student_Profile_Details,
  Student_Profile_Update_Data,
} from "../../../services/student/Profile/Profile";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import User from "../../../../assets/images/userProfile.jpg";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoCamera } from "react-icons/io5";
import Inputfild from "../../common/Inputfild";

const StudentProfile = ({ children }) => {
  const ProfileTeab = [
    {
      name: "My Profile",
      pathname: Routing.StudentProfile,
    },
    {
      name: "Log In Details",
      pathname: Routing.StudentLogInDetails,
    },
    {
      name: "Forgot Password",
      pathname: Routing.Student_Forgot_Password,
    },
    {
      name: "Reset Password",
      pathname: Routing.Student_Reset_Password,
    },
    {
      name: "Favorite Instructors",
      pathname: Routing.Student_Favorite_Instructors,
    },
    {
      name: "Booking History",
      pathname: Routing.Student_Booking_History,
    },
  ];
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [Profiledetails, setProfiledetails] = useState({});
  const [Update_Profiledetail, setUpdate_Profiledetail] = useState({
    name: "",
    profile: "",
    about: "",
    adetail: "",
  });
  console.log(
    "🚀 ~ StudentProfile ~ Update_Profiledetail:",
    Update_Profiledetail
  );
  const studentId = JSON.parse(localStorage.getItem("_id"));

  const GetProfiledetails = async () => {
    setLoading(true);
    const result = await Student_Profile_Details(studentId);
    if (result?.success === true) {
      setProfiledetails(result?.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const Get_Profile_Data = async () => {
    setLoading(true);
    const result = await Student_Profile_Data(studentId);
    if (result?.success === true) {
      setUpdate_Profiledetail(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    Get_Profile_Data();
    GetProfiledetails();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setUpdate_Profiledetail({
      ...Update_Profiledetail,
      [e.target.name]: e.target.value,
    });
  };

  const heandleImage = (e) => {
    setUpdate_Profiledetail({
      ...Update_Profiledetail,
      [e.target.name]: e.currentTarget.files[0],
    });
  };

  const heandleUpdate = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("studentId", studentId);
    formData.append("name", Update_Profiledetail.name);
    formData.append("aboutMe", Update_Profiledetail.about);
    formData.append("additionalDetail", Update_Profiledetail.adetail);
    formData.append("profile_picture", Update_Profiledetail.profile);

    const result = await Student_Profile_Update_Data(formData);
    if (result?.success === true) {
      setLoading(false);
      setOpen(false);
      setUpdate_Profiledetail({
        name: "",
        profile: "",
        about: "",
        adetail: "",
      });
      window.location.reload();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  // const tabs = [
  //   {
  //     name: "My Profile",
  //     href: Routing.StudentProfile,
  //   },
  //   {
  //     name: "Log In Details",
  //     href: Routing.StudentLogInDetails,
  //   },
  //   {
  //     name: "Forgot Password",
  //     href: Routing.Student_Forgot_Password,
  //   },
  //   {
  //     name: "Reset Password",
  //     href: Routing.Student_Reset_Password,
  //   },
  //   {
  //     name: "Favorite Instructors",
  //     href: Routing.Student_Favorite_Instructors,
  //   },
  //   {
  //     name: "Booking History",
  //     href: Routing.Student_Booking_History,
  //   },
  // ];

  return (
    <>
      {loading && <Spinner />}
      <div className="bg-black px-[52px] pb-[47px] ">
        <div className="flex items-center justify-end">
          <div>
            <p className="sm:text-right text-center mt-[73px]">
              <FaQuoteRight className="text-5xl ml-auto text-primary/20 text-right" />
            </p>
            <p className="text-[26px] text-white sm:text-right text-center max-w-[525px]">
              We are what we repeatedly do. Excellence then is not an act but a
              habit.
            </p>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-11 ">
        <div className="w-full pl-10 pt-10 xl:block hidden sm:px-[52px] px-3">
          <img
            src={Profiledetails?.profile?.profile_picture || User}
            alt=""
            className="w-[274px] h-[274px] rounded-full object-cover grayscale object-top"
          />

          <div className="mt-[77px] flex flex-col gap-7">
            {ProfileTeab.map((items) => (
              <div className="pb-6 border-b border-black/30">
                <Link
                  to={items.pathname}
                  className={`${
                    pathname === items.pathname
                      ? "underline text-black font-bold text-xl"
                      : "text-black/70 text-xl"
                  }`}
                >
                  {items.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full xl:col-span-3 col-span-1 pt-10 md:pr-12 pb-12 sm:px-[52px] px-3">
          <div className="flex items-center justify-between flex-wrap gap-y-3">
            <h2 className="text-Dark_black text-[40px] font-bold">
              {Profiledetails?.profile?.studentName}
              <span className="text-Dark_black/50 text-2xl font-normal">
                (Student)
              </span>
            </h2>
            <div className="flex items-center gap-2 sm:w-auto w-full">
              <OutlineBtn
                text={"Edit"}
                onClick={() => setOpen(true)}
                className={
                  "text-black font-semibold border-[#71717194] sm:w-auto w-1/2"
                }
                icon={<BiPencil className="text-gay-300 text-2xl" />}
              />
              <OutlineBtn
                text={"Share"}
                className={
                  "text-white font-semibold bg-red-200 border-none sm:w-auto w-1/2"
                }
                icon={<ShareIcon color={"#fff"} />}
              />
            </div>
          </div>
          <div className="sm:w-[120px] w-full h-[27px] bg-gay-250 rounded-full mt-2 overflow-hidden">
            <div
              style={{
                width: `${Profiledetails?.profile?.profile_completion}%`,
              }}
              className={`h-full bg-green rounded-full flex items-center justify-center text-white`}
            >
              {Profiledetails?.profile?.profile_completion}%
            </div>
          </div>
          <p className="text-black/50 mt-1">
            Your profile is incomplete.{" "}
            <span className="text-red-200 underline cursor-pointer" onClick={()=>setOpen(true)}>Complete Now</span>
          </p>
          {children}
        </div>
      </div>
      <GetInTouch />

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-[#0F0F0F91] transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center lg:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full lg:max-w-6xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-primary p-5">
                <div className="flex items-center justify-between gap-6 md:flex-nowrap flex-wrap">
                  <div className="w-full">
                    <h1 className="text-4xl font-semibold mt-6">
                      Add Information!
                    </h1>
                    <p className="text-[15px] text-black/70 mt-1">
                      Please fill below details to Complete your profile in{" "}
                      <span className="font-bold">martial arts hub</span> as an
                      Student!
                    </p>
                    <div className="mt-10 flex items-center gap-x-5 gap-y-9">
                      <div className="w-full">
                        <Inputfild
                          type={"text"}
                          placeholder={"Name"}
                          Label={"Name"}
                          onChange={handleChange}
                          name={"name"}
                          value={Update_Profiledetail?.name}
                          Labelclass={"text-Dark_black font-medium"}
                          className={"rounded-xl md:w-full h-[70px]"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-[245px] w-full h-[202px] rounded-xl overflow-hidden bg-[#DAD8D0] flex items-center justify-center relative">
                    {Update_Profiledetail?.profile === null ||
                    Update_Profiledetail?.profile === "" ? (
                      <div className="flex items-center justify-center flex-col absolute top-0 left-0 h-full w-full bg-[#DAD8D0]">
                        <IoCamera className="text-black/20 text-4xl" />
                        <p className="text-black/20 text-[13px] font-medium">
                          Add Profile Picture
                        </p>
                      </div>
                    ) : (
                      <img
                        src={Update_Profiledetail?.profile || User}
                        alt=""
                        className="h-full object-cover w-full absolute top-0 left-0"
                      />
                    )}
                    <div className="flex items-center justify-center flex-col w-full">
                      <IoCamera className="text-black/20 text-4xl" />
                      <p className="text-black text-[13px] font-medium px-2 break-words w-full">
                        {Update_Profiledetail?.profile?.name}
                      </p>
                    </div>
                    <input
                      type="file"
                      name="profile"
                      onChange={heandleImage}
                      className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full mt-5">
                  <div className="w-full">
                    <label className={`text-base text-black/50 block`}>
                      About Me
                    </label>
                    <textarea
                      name="about"
                      id=""
                      onChange={handleChange}
                      value={Update_Profiledetail?.about}
                      className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 rounded-xl w-full h-[150px] py-4"
                    ></textarea>
                  </div>

                  <div className="w-full">
                    <label className={`text-base text-black/50 block`}>
                      Additional Details
                    </label>
                    <textarea
                      name="adetail"
                      id=""
                      onChange={handleChange}
                      value={Update_Profiledetail?.adetail}
                      className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 rounded-xl w-full h-[150px] py-4"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end mt-10">
                  <OutlineBtn
                    text={"Save"}
                    onClick={heandleUpdate}
                    className={"bg-black text-white w-[200px]"}
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

export default StudentProfile;
