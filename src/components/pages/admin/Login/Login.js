import React, { useState } from "react";
import { Routing } from "../../../shared/Routing";
import Login_image from "../../../../assets/images/LoginImage.png";

import { useNavigate } from "react-router-dom";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Inputfild from "../../common/Inputfild";
import BigButton from "../../common/BigButton";
import { toast } from "react-toastify";
import { AdminLogin } from "../../../services/Admin/auth";
import Popup from "../../common/Popup";
import { Confirm_Popup_Icon } from "../../../../assets/icon";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isOpen, SetisOpen] = useState(false);
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
    const result = await AdminLogin(data);
    if (result?.success === true) {
      setLoading(false);
      localStorage.setItem("Role", JSON.stringify(result?.data?.role));
      localStorage.setItem("email", JSON.stringify(result?.data?.email));
      localStorage.setItem("_id", JSON.stringify(result?.data?.instructorId));
      localStorage.setItem("token", JSON.stringify(result?.Token));
      localStorage.setItem("is_login", true);
      SetisOpen(true);
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
          <div className="pt-5 h-full">
            <div className="flex flex-col justify-between h-[70%]">
              <div>
                <h2 className="text-[34px] font-semibold mt-8">
                  Welcome Admin!
                </h2>
                <p className="text-black/70 text-[15px]">
                  Please fill details to login!
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
                    placeholder={"Password"}
                    Label={"Password"}
                    iconposition="right-4"
                    name={"password"}
                    className={"md:w-full"}
                  />
                </div>
              </div>
              <div className="mt-11 flex flex-col gap-3">
                <BigButton
                  text={"Login to your account"}
                  bg_color={"black"}
                  onClick={handleLogin}
                  loading={loading}
                />
              </div>
            </div>
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
      <Popup
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        Icons={<Confirm_Popup_Icon />}
        Headding={"Success!"}
        BodyText={
          "You have successfully logged in to your martial arts hub Admin account. Thank you for joining us again. Monitor Instructors, Students, check payment and more."
        }
        BtnText={"Okay!"}
        Btnclass={"bg-black text-white"}
        onClick={() => {SetisOpen(false);navigate(Routing.AdminDashboard)}}
      />
    </>
  );
};

export default Index;
