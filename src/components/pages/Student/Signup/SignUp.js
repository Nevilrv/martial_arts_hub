import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import Inputfild from "../../common/Inputfild";
import BigButton from "../../common/BigButton";
import { Link, useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import SignUp_image from "../../../../assets/images/SignupImage.jpeg";
import { toast } from "react-toastify";
import { StudentSignUp } from "../../../services/student/auth";
import Spinner from "../../../layouts/Spinner";
import Socket from "../../common/Socket";

const SignUp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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
      name: userdata.name,
      email: userdata.email,
      password: userdata.password,
      confirm_password: userdata.confirm_password,
    };
    const result = await StudentSignUp(data);
    if (result?.success === true) {
      setLoading(false);
      Socket.emit("Notification", {
        title: `${userdata.name} New_student`,
        notificationType: "New_student",
        Time: new Date(),
      });
      navigate(Routing.StudentLogin);
      toast.success("Account created successfully");
    } else {
      setLoading(false);
      // toast.error(result?.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    if (open === false) {
      navigate(Routing.Initial);
    }
  });

  return (
    <>
      {loading && <Spinner />}
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
                <div className="flex items-start gap-9 lg:flex-nowrap flex-wrap lg:justify-start justify-center">
                  <div className="relative after:absolute after:bg-[linear-gradient(180deg,_#09090900_0%,_#090909_100%)] after:h-1/2 after:w-full after:bottom-0 after:left-0 after:z-20 after:backdrop-blur-[1.2999999523162842px] rounded-[20px] overflow-hidden lg:block hidden">
                    <img
                      src={SignUp_image}
                      alt=""
                      className="max-w-[555px] h-[795px] object-cover object-[30%] grayscale"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[495px] z-40 text-[44px]">
                      <BiSolidQuoteLeft className="text-white" />
                      <p className="text-2xl font-medium text-white max-w-[466px]">
                        Joining this martial arts community was the best
                        decision I ever made. Highly recommended!
                      </p>
                      <div className="text-white mt-8">
                        <h2 className="text-xl font-medium">John Doe</h2>
                        <p className="text-white/50 text-base">Student</p>
                      </div>
                    </div>
                    <div className="login-shape">
                      <h2 className="text-[22px] text-white ml-2">
                        martial arts hub.
                      </h2>
                    </div>
                  </div>
                  <div className="pt-5">
                    <FaArrowLeft
                      className="text-black text-2xl cursor-pointer"
                      onClick={() => navigate(Routing.Initial)}
                    />
                    <h2 className="text-[34px] font-semibold mt-8">
                      Create an Account!
                    </h2>
                    <p className="text-black/70 text-[15px]">
                      Please fill below details to join{" "}
                      <span className="font-bold">martial arts hub</span> as a
                      student!
                    </p>
                    <div className="mt-[31px] flex flex-col gap-y-6">
                      <Inputfild
                        onChange={handleChange}
                        type={"text"}
                        placeholder={"Name here"}
                        Label={"Name"}
                        name={"name"}
                        onKeyPress={handleKeyPress}
                      />
                      <Inputfild
                        onChange={handleChange}
                        type={"email"}
                        placeholder={"Email"}
                        Label={"Email"}
                        name={"email"}
                        onKeyPress={handleKeyPress}
                      />
                      <Inputfild
                        onChange={handleChange}
                        type={"password"}
                        placeholder={"Create Password"}
                        Label={"Create Password"}
                        iconposition="right-4"
                        name={"password"}
                        onKeyPress={handleKeyPress}
                      />
                      <Inputfild
                        onChange={handleChange}
                        type={"password"}
                        placeholder={"Re-enter Password"}
                        Label={"Re-enter Password"}
                        iconposition="right-4"
                        name={"confirm_password"}
                        onKeyPress={handleKeyPress}
                      />
                    </div>
                    <div className="mt-11 flex flex-col gap-3">
                      <BigButton
                        text={"Create an Account"}
                        bg_color={"black"}
                        onClick={handleLogin}
                      />
                      <BigButton
                        text={`Log In with Google`}
                        icon={<FaGoogle />}
                        bg_color={"gay-300"}
                      />
                    </div>
                    <p className="text-sm text-black/50 text-center mt-10">
                      Already have an account?{" "}
                      <Link
                        to={Routing.StudentLogin}
                        className="font-bold text-black"
                      >
                        Log In
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SignUp;
