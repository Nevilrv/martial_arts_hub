import React, { useState } from "react";
import { ForgotPasswordIcon } from "../../../../assets/icon";
import Inputfild from "../../common/Inputfild";
import OutlineBtn from "../../common/OutlineBtn";
import { ForgetpasswordOtp } from "../../../services/student/auth";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";

const ForgotPassword = () => {
  const [userEmail, setuserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    const body = {
        email:userEmail,
        type:JSON.parse(localStorage.getItem("Role").toLocaleLowerCase())
    }
    const result = await ForgetpasswordOtp(body);
    if (result?.success === true) {
      setLoading(false);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  return (
    <>
      {loading && <Spinner />}
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
    </>
  );
};

export default ForgotPassword;
