import React, { useState } from "react";
import { Routing } from "../../../shared/Routing";
import Login_image from "../../../../assets/images/LoginImage.png";

import { Link, useNavigate } from "react-router-dom";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft, FaGoogle } from "react-icons/fa6";
import Inputfild from "../../common/Inputfild";
import BigButton from "../../common/BigButton";
import { toast } from "react-toastify";
import { InstructorLogin } from "../../../services/Instructor/instructor_auth/auth";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

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
    if (result?.success === true) {
      setLoading(false);
      console.log(result,"=======>");
      localStorage.setItem(
        "Role",
        JSON.stringify(result?.data?.role)
      );
      localStorage.setItem(
        "email",
        JSON.stringify(result?.data?.email)
      );
      localStorage.setItem(
        "_id",
        JSON.stringify(result?.data?.instructorId)
      );
      localStorage.setItem("token", JSON.stringify(result?.Token));
      localStorage.setItem("is_login", true);
      navigate(Routing.InstructorProfile);
      toast.success(result?.message);
    } else {
      setLoading(false);
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
              <span className="font-bold">martial arts hub</span> as a student!
            </p>
            <div className="mt-[31px] flex flex-col gap-y-6">
              <Inputfild
                onChange={handleChange}
                type={"email"}
                placeholder={"Email"}
                Label={"Email"}
                name={"email"}
                className={"md:w-full"}
              />
              <Inputfild
                onChange={handleChange}
                type={"password"}
                placeholder={"Create Password"}
                Label={"Create Password"}
                iconposition="right-4"
                name={"password"}
                className={"md:w-full"}
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
            <div className="mt-11 flex flex-col gap-3">
              <BigButton
                text={"Login to your account"}
                bg_color={"black"}
                onClick={handleLogin}
                loading={loading}
              />
              <BigButton
                text={`Log In with Google`}
                icon={<FaGoogle />}
                bg_color={"gay-300"}
              />
            </div>
            <p className="text-sm text-black/50 text-center mt-10">
            Don’t have an account? {" "}
              <Link
                to={Routing.InstructorSignup}
                className="font-bold text-black"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className="relative after:absolute after:bg-[linear-gradient(180deg,_#09090900_0%,_#090909_100%)] after:h-1/2 after:w-full after:bottom-0 after:left-0 after:z-20 after:backdrop-blur-[1.2999999523162842px] rounded-[20px] overflow-hidden lg:block hidden">
            <img
              src={Login_image}
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
            <div className="login-shape">
              <h2 className="text-[22px] text-white ml-2">martial arts hub.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
