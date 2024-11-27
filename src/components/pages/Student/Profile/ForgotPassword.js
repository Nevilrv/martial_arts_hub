import React, { useRef, useState } from "react";
import {
  Confirm_Popup_Icon,
  CreatePasswordSvg,
  ForgotPasswordIcon,
} from "../../../../assets/icon";
import Inputfild from "../../common/Inputfild";
import OutlineBtn from "../../common/OutlineBtn";
import {
  Change_Password,
  ForgetpasswordOtp,
  ResetPassword,
} from "../../../services/student/auth";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import Popup from "../../common/Popup";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import StudentProfile from "./StudentProfile";

const ForgotPassword = () => {
  const [userEmail, setuserEmail] = useState("demo@gmail.com");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [otpModel, setOtpModel] = useState(false);
  const [newpasswordModel, setNewpasswordModel] = useState(false);
  const [inputValues, setInputValues] = useState("");
  const [newpassword, setNewpassword] = useState({
    newPassword: "",
    confirm_password: "",
  });

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleSend = async () => {
    setLoading(true);
    const body = {
      email: userEmail,
      type: JSON.parse(localStorage.getItem("Role").toLocaleLowerCase()),
    };
    const result = await ForgetpasswordOtp(body);
    if (result?.success === true) {
      setIsOpen(true);
      setLoading(false);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  // OTP match
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
    setLoading(true);
    const body = {
      otp: parseInt(inputValues),
    };
    const result = await ResetPassword(body);
    if (result?.success === true) {
      setLoading(false);
      setNewpasswordModel(true);
      setOtpModel(false);
      toast.success(result?.message);
    } else {
      setLoading(false);
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
    setLoading(true);
    const body = {
      userId: JSON.parse(localStorage.getItem("_id")),
      newPassword: newpassword.newPassword,
      confirm_password: newpassword.confirm_password,
      role: JSON.parse(localStorage.getItem("Role").toLocaleLowerCase()),
    };
    const result = await Change_Password(body);
    if (result?.success === true) {
      setLoading(false);
      setNewpasswordModel(false);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <StudentProfile>
      <div className="border border-[#71717194] py-7 px-6 rounded-lg min-h-[212px] mt-14">
        <div className="flex flex-col justify-center items-center">
          <ForgotPasswordIcon />
          <h2 className="text-black text-[22px] mt-4 font-semibold">
            Forgot Your Password?
          </h2>
          <p className="max-w-[582px] mx-auto text-center text-black/50 mt1">
            Do Not worry! We will help you in logging in back to your Martial
            Arts Hub account safely! Enter Your Email address and proceed
            further!
          </p>
          <div className="mt-5">
            <Inputfild
              type={"email"}
              className={"bg-transparent border"}
              placeholder={"Email ID"}
              onChange={(event) => setuserEmail(event.target.value)}
            />
          </div>
          <div>
            <OutlineBtn
              text={"Get OTP"}
              className={"bg-black text-white mt-12 md:w-[450px] h-[60px]"}
              onClick={handleSend}
            />
          </div>
          <p className="text-black/50 mt-2">
            Didn’t receive OTP? <b className="text-black underline">Resend</b>
          </p>
        </div>
      </div>
      </StudentProfile>
      <Popup
        isOpen={isOpen}
        SetisOpen={setIsOpen}
        Icons={<Confirm_Popup_Icon />}
        Headding={"OTP Sent!"}
        BodyText={
          "OTP has been successfully sent to your email! Please check your email app and proceed to the new password generation step."
        }
        BtnText={"Go to email app"}
        Btnclass={"bg-black text-white h-[55px] w-[210px]"}
        onClick={() => {
          setOtpModel(true);
          setIsOpen(false);
        }}
      />

      <Dialog className="relative z-10" open={otpModel} onClose={setOtpModel}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
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
                  <b>{userEmail} </b>{" "}
                  <span className="text-black font-semibold cursor-pointer">
                    <PiPencilSimpleLineLight className="text-black inline" />{" "}
                    Edit
                  </span>
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
                  <OutlineBtn
                    text={"Submit"}
                    className={
                      "bg-black text-white w-[260px] font-medium text-xl md:w-full"
                    }
                    onClick={heandleOtpSubmit}
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog
        className="relative z-10"
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
                  <OutlineBtn
                    text={"Create"}
                    className={
                      "bg-black text-white md:w-[450px] font-medium text-xl"
                    }
                    onClick={heandleChangePassword}
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

export default ForgotPassword;
