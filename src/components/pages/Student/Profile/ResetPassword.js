import React, { useState } from "react";
import StudentProfile from "./StudentProfile";
import { ResetPasswordIcon } from "../../../../assets/icon";
import Inputfild from "../../common/Inputfild";
import OutlineBtn from "../../common/OutlineBtn";
import Spinner from "../../../layouts/Spinner";
import { toast } from "react-toastify";
import { resetpassword } from "../../../services/student/auth";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [Resetpassword, setResetpassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirm_password: "",
  });

  const handleChangepassword = (e) => {
    setResetpassword({
      ...Resetpassword,
      [e.target.name]: e.target.value,
    });
  };

  const heandleChangeResetpassword = async () => {
    setLoading(true);
    const result = await resetpassword(Resetpassword);
    if (result?.success === true) {
      setLoading(false);
      toast.success(result?.message);
      setResetpassword({
        currentPassword: "",
        newPassword: "",
        confirm_password: "",
      });
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
          <div className="flex flex-col items-center justify-center">
            <ResetPasswordIcon />
            <h2 className="text-[22px] text-black font-semibold">
              Reset Your Password
            </h2>
            <p className="text-black/50 max-w-[592px] mx-auto text-center">
              Regularly resetting your password is essential for account
              security. Follow the steps below to reset your password and keep
              your account safe.
            </p>
            <div className="mt-10">
              <Inputfild
                type="password"
                className={"bg-transparent border border-Dark_black"}
                placeholder={"Enter current Password"}
                iconposition={"right-5"}
                name={"currentPassword"}
                value={Resetpassword.currentPassword}
                onChange={(e) => handleChangepassword(e)}
              />
              <p className="text-black/50 text-right mt-1.5">
                Didn’t remember? <b className="text-black">Forgot Password</b>
              </p>

              <div className="flex mt-6 mb-10 flex-col gap-4">
                <Inputfild
                  type="password"
                  className={"bg-transparent border border-Dark_black"}
                  placeholder={"Create new Password"}
                  iconposition={"right-5"}
                  name={"newPassword"}
                  value={Resetpassword.newPassword}
                  onChange={(e) => handleChangepassword(e)}
                />
                <Inputfild
                  type="password"
                  className={"bg-transparent border border-Dark_black"}
                  placeholder={"Re-enter Password"}
                  iconposition={"right-5"}
                  name={"confirm_password"}
                  value={Resetpassword.confirm_password}
                  onChange={(e) => handleChangepassword(e)}
                />
              </div>
              <OutlineBtn
                text={"Change"}
                className={
                  "bg-black text-white md:w-[450px] font-medium text-xl"
                }
                onClick={heandleChangeResetpassword}
              />
            </div>
          </div>
        </div>
      </StudentProfile>
    </>
  );
};

export default ResetPassword;
