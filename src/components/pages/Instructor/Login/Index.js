import React, { useRef, useState } from "react";
import { Routing } from "../../../shared/Routing";
import Login_image from "../../../../assets/images/LoginImage.png";

import { Link, useNavigate } from "react-router-dom";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft, FaGoogle } from "react-icons/fa6";
import Inputfild from "../../common/Inputfild";
import BigButton from "../../common/BigButton";
import { toast } from "react-toastify";
import { InstructorLogin } from "../../../services/Instructor/instructor_auth/auth";
import User from "../../../../assets/images/userProfile.jpg";
import Socket from "../../common/Socket";
import { Allert_Popup_Icon, Confirm_Popup_Icon, CreatePasswordSvg, Decline } from "../../../../assets/icon";
import Popup from "../../common/Popup";
import { Change_Password, ForgetpasswordOtp, ResetPassword } from "../../../services/student/auth";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import OutlineBtn from "../../common/OutlineBtn";
import PopuSpinner from "../../common/PopuSpinner";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingpop, setPopLoading] = useState(false);
  const [optEmail, setotpEmail] = useState("")
  const [inputValues, setInputValues] = useState("");
  const [otpModel, setOtpModel] = useState(false);
  const [newpasswordModel, setNewpasswordModel] = useState(false);
  const [enterEmail, SetenterEmail] = useState(false)
  const [isOpen, SetisOpen] = useState(false);
  const [block, setblock] = useState({});
  const [newpassword, setNewpassword] = useState({
    newPassword: "",
    confirm_password: "",
  });
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];


  const handleChange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    const data = {
      email: userdata.email,
      password: userdata.password,
    };
    const result = await InstructorLogin(data);
    if (result?.success === true && result.code === 200) {
      setLoading(false);
      localStorage.setItem("Role", JSON.stringify(result?.data?.role));
      localStorage.setItem("email", JSON.stringify(result?.data?.email));
      localStorage.setItem("_id", JSON.stringify(result?.data?.instructorId));
      localStorage.setItem("token", result?.Token);
      localStorage.setItem("is_login", true);
      localStorage.setItem("OnlineRate", result?.data?.privateSessionOnlineHourlyRate)
      localStorage.setItem("FaceToFace", result?.data?.privateSessionFaceToFaceHourlyRate)

      Socket.emit("InstructorActive", { instructorId: result?.data?.instructorId, status: "login" });

      navigate(Routing.InstructorDashboard);
    } else if (result?.success === true && result.code === 401) {
      setLoading(false);
      setblock(result?.data || {});
      SetisOpen(true);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleSend = async () => {
    setPopLoading(true);
    const body = {
      email: optEmail,
      type: 'instructor',
    };
    const result = await ForgetpasswordOtp(body);
    if (result?.success === true) {
      setPopLoading(false);
      SetenterEmail(false);
      setOtpModel(true)

      toast.success(result?.message)
    } else {
      setPopLoading(false);
      toast.error(result?.message);
    }
  };

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (/^\d$/.test(value) && index < inputRefs?.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    const newValue =
      inputValues.substring(0, index) +
      value +
      inputValues.substring(index + 1);
    setInputValues(newValue);
  };


  const heandleOtpSubmit = async () => {
    setPopLoading(true);
    const body = {
      otp: parseInt(inputValues),
      type: 'instructor'
    };
    const result = await ResetPassword(body);
    if (result?.success === true) {
      setPopLoading(false);
      setNewpasswordModel(true);
      setOtpModel(false);

    } else {
      setPopLoading(false);
      toast.error(result?.message);
    }
  };


  // Create New Password
  const handleChangepassword = (e) => {
    setNewpassword({
      ...newpassword,
      [e.target.name]: e.target.value,
    });
  };

  const heandleChangePassword = async () => {
    setPopLoading(true);
    const body = {
      email: optEmail,
      newPassword: newpassword.newPassword,
      confirm_password: newpassword.confirm_password,
      role: 'instructor',
    };
    const result = await Change_Password(body);
    if (result?.success === true) {
      setPopLoading(false);
      setNewpasswordModel(false);

      navigate(Routing.InstructorLogin)

    } else {
      setPopLoading(false);
      toast.error(result?.message);
    }
  };



  return (
    <>
      <div className="bg-primary p-5">
        {/* <div className="flex items-start gap-9 lg:flex-nowrap flex-wrap lg:justify-start justify-center"> */}
        <div className="lg:grid grid-cols-2 flex max-w-7xl mx-auto items-start gap-[173px] lg:flex-nowrap flex-wrap lg:justify-start justify-center">
          <div className="pt-5">
            <FaArrowLeft
              className="text-black text-2xl cursor-pointer"
              onClick={() => navigate(Routing.Initial)}
            />
            <h2 className="text-[34px] font-semibold mt-8">
              Welcome Instructor!
            </h2>
            <p className="text-black/70 text-[15px]">
              Please fill below details to join{" "}
              <span className="font-bold">martial arts hub</span> as a
              Instructor!
            </p>
            <div className="mt-[31px] flex flex-col gap-y-6">
              <Inputfild
                onChange={handleChange}
                type={"email"}
                placeholder={"Email"}
                Label={"Email"}
                name={"email"}
                value={userdata.email}
                className={"md:w-full"}
                onKeyPress={handleKeyPress}
              />
              <Inputfild
                onChange={handleChange}
                type={"password"}
                placeholder={"Password"}
                Label={"Password"}
                value={userdata.password}
                iconposition="right-4"
                name={"password"}
                className={"md:w-full"}
                onKeyPress={handleKeyPress}
              />
              {/* <Inputfild
                onChange={handleChange}
                type={"password"}
                placeholder={"Re-enter Password"}
                Label={"Re-enter Password"}
                iconposition="right-4"
                name={"confirm_password"}
                className={"md:w-full"}
              /> */}
            </div>
            <a className="flex items-center justify-end mt-3 text-black/50 hover:text-black cursor-pointer" onClick={() => { SetenterEmail(true) }}>Forgot password?</a>
            <div className="mt-11 flex flex-col gap-3">
              <BigButton
                text={"Login to your account"}
                bg_color={"black"}
                onClick={() => handleLogin()}
                loading={loading}
              />
              <BigButton
                text={`Log In with Google`}
                icon={<FaGoogle />}
                bg_color={"gay-300"}
              />
            </div>
            <p className="text-sm text-black/50 text-center mt-10">
              Don’t have an account?{" "}
              <Link
                to={Routing.InstructorSignup}
                className="font-bold text-black"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className={`${otpModel || newpasswordModel ? '-z-5' : ''} relative after:absolute after:bg-[linear-gradient(180deg,_#09090900_0%,_#090909_100%)] after:h-1/2 after:w-full after:bottom-0 after:left-0 after:z-20 after:backdrop-blur-[1.2999999523162842px] rounded-[20px] overflow-hidden lg:block hidden`}>
            <img
              src={Login_image || User}
              alt=""
              className="max-w-[555px] h-[795px] object-cover object-[30%] grayscale"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[495px] z-40 text-[44px]">
              <BiSolidQuoteLeft className="text-white" />
              <p className="text-2xl font-medium text-white max-w-[466px]">
                Joining this martial arts community was the best decision I ever
                made. Highly recommended!
              </p>
              <div className="text-white mt-8">
                <h2 className="text-xl font-medium">John Doe</h2>
                <p className="text-white/50 text-base">Student</p>
              </div>
            </div>
            <div className={`login-shape ${otpModel || newpasswordModel ? '-z-10' : 'z-50'}`}>
              <h2 className="text-[22px] text-white ml-2">martial arts hub.</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <Popup
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        Icons={<Decline />}
        Headding={block.ReasonStatus === 'pending' ? `Your instructor request ${block.ReasonStatus}` : `You have been ${block.ReasonStatus}`}
        BodyText={block.ReasonStatus === 'pending' ? "Your instructor request is pending approval from the admin. Once approved, you will be notified via email." : block.Reason}
        BtnText={"Okay"}
        onClick={() => {
          SetisOpen(false);
          setUserdata({
            email: "",
            password: ""
          })
        }}
      />; */}
      <Popup
        isOpen={enterEmail}
        SetisOpen={SetenterEmail}
        Icons={<Confirm_Popup_Icon />}
        Headding={"Forgot Your Password?"}
        BodyText={
          <>
            <p className=" my-5">Do Not worry! We will help you in logging in back to your Martial Arts Hub account safely! Enter Your Email address and proceed further!</p>
            <Inputfild
              type={"email"}
              className={"bg-transparent border"}
              placeholder={"Email"}
              onChange={(event) => setotpEmail(event.target.value)}
            />
          </>
        }
        BtnText={`Send Otp`}
        loading={loadingpop}
        Btnclass={`bg-black text-white h-[55px] w-[210px]`}
        onClick={() => {
          SetisOpen(false);
          handleSend()
        }}
      />

      <Dialog className="relative z-50" open={otpModel} onClose={setOtpModel}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-10 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-[80px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[575px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <h1 className="text-center mt-3 font-semibold text-3xl">
                  OTP Verification
                </h1>
                <p className="max-w-[471px] mx-auto text-center text-black/50 mt-1">
                  Please enter OTP(one time password) we sent to your email
                  <b> {optEmail} </b>{" "}
                  {/* <span className="text-black font-semibold cursor-pointer">
                    <PiPencilSimpleLineLight className="text-black inline" />{" "}
                    Edit
                  </span> */}
                </p>
                <div className="flex items-center justify-between max-w-[375px] mx-auto mt-16">
                  <input
                    type="text"
                    maxLength={1}
                    className="w-[calc(25%-25px)] text-4xl font-semibold text-center bg-transparent border-b border-gay-300/40 h-[49px] focus:outline-none placeholder:text-center placeholder:text-Dark_black placeholder:text-4xl"
                    placeholder="-"
                    ref={inputRefs[0]}
                    onChange={(e) => handleInputChange(0, e)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="w-[calc(25%-25px)] text-4xl font-semibold text-center bg-transparent border-b border-gay-300/40 h-[49px] focus:outline-none placeholder:text-center placeholder:text-Dark_black placeholder:text-4xl"
                    placeholder="-"
                    ref={inputRefs[1]}
                    onChange={(e) => handleInputChange(1, e)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="w-[calc(25%-25px)] text-4xl font-semibold text-center bg-transparent border-b border-gay-300/40 h-[49px] focus:outline-none placeholder:text-center placeholder:text-Dark_black placeholder:text-4xl"
                    placeholder="-"
                    ref={inputRefs[2]}
                    onChange={(e) => handleInputChange(2, e)}
                  />
                  <input
                    type="text"
                    maxLength={1}
                    className="w-[calc(25%-25px)] text-4xl font-semibold text-center bg-transparent border-b border-gay-300/40 h-[49px] focus:outline-none placeholder:text-center placeholder:text-Dark_black placeholder:text-4xl"
                    placeholder="-"
                    ref={inputRefs[3]}
                    onChange={(e) => handleInputChange(3, e)}
                  />
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-3 mt-14 justify-center">
                  {loadingpop ?
                    <PopuSpinner />
                    : <OutlineBtn
                      text={"Submit"}
                      className={
                        "bg-black text-white w-[260px] font-medium text-xl md:w-full"
                      }
                      onClick={heandleOtpSubmit}
                    />}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        className="relative z-50"
        open={newpasswordModel}
        onClose={setNewpasswordModel}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-[0px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[575px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div className="flex items-center justify-center">
                  <CreatePasswordSvg />
                </div>
                <h1 className="text-center mt-3 font-semibold text-3xl">
                  Create New Password
                </h1>
                <p className="max-w-[471px] mx-auto text-center text-black/50 mt-1">
                  This password will be used to protect your account and keep
                  your information safe.
                </p>
                <div className="mt-10 flex flex-col gap-4 justify-center items-center">
                  <Inputfild
                    className={
                      "bg-transparent md:w-[450px] mx-auto border border-black pr-10"
                    }
                    placeholder={"Create Password"}
                    name={"newPassword"}
                    type={"password"}
                    onChange={(e) => handleChangepassword(e)}
                    iconposition={"right-5 cursor-pointer"}
                  />
                  <Inputfild
                    className={
                      "bg-transparent md:w-[450px] mx-auto border border-black pr-10"
                    }
                    placeholder={"Re-enter Password"}
                    name={"confirm_password"}
                    onChange={(e) => handleChangepassword(e)}
                    type={"password"}
                    iconposition={"right-5 cursor-pointer"}
                  />
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-3 mt-9 justify-center">

                  {loadingpop ?
                    <PopuSpinner /> :
                    <OutlineBtn
                      text={"Create"}
                      className={
                        "bg-black text-white md:w-[450px] font-medium text-xl"
                      }
                      onClick={heandleChangePassword}
                    />}

                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Index;
