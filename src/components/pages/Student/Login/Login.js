import React, { useEffect, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import Inputfild from "../../common/Inputfild";
import BigButton from "../../common/BigButton";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import { StudentLogin } from "../../../services/auth";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (open === false) {
      navigate(Routing.Initial);
    }
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
    };
    const result = await StudentLogin(data);
    if (result?.success === true) {
      setLoading(false);
      localStorage.setItem(
        "Student_id",
        JSON.stringify(result?.data?.studentId)
      );
      localStorage.setItem(
        "Student_email",
        JSON.stringify(result?.data?.email)
      );
      localStorage.setItem("token", JSON.stringify(result?.Token));
      localStorage.setItem("is_login", true);
      navigate(Routing.Login);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  return (
    <>
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
                      src="https://s3-alpha-sig.figma.com/img/2fe6/1b02/a6fc3775810732971788141798f832b9?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCY~PdmIDE8YdbmZD2nFNH2lBIzAGUqiGwjF9cdIT3KsjHL3vnp5kgMqmNUB6qRvhVjT9HMOkACoONlbIMmkChj~ybpo-sBakxJbpUTBUN17bYrUyi1iSB6rhl2mUY0isgf-mqkrINVv3NdKNXNYBZOz0~6Q-nN8zdHRrhEHLAUoaxZRdmnF53LFQtNysAdxwOd9tou1Ei-pJSCEmvzK5YGMlLMSA5xP5Ev4hZJOnHnlNzEgpmvrXmL21WHbGsBw26TIJggI8LfeBnoVNnrs~VDTKmBrb2qbel-cFdXVv6roRrYbbA~8I1iE7BWmk9fAxiJASWTa7njMMvpLOBE9ow__"
                      alt=""
                      className="max-w-[555px] h-[795px] object-cover object-[55%] grayscale"
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
                      onClick={() => Routing.Initial}
                    />
                    <h2 className="text-[30px] font-semibold mt-8">
                      Welcome Back! Ready to Learn?
                    </h2>
                    <p className="text-black/70 text-[15px]">
                      Please login to continue to your{" "}
                      <span className="font-bold">martial arts hub</span>{" "}
                      account!
                    </p>
                    <div className="mt-[31px] flex flex-col gap-y-6">
                      <Inputfild
                        onChange={handleChange}
                        type={"text"}
                        name={"name"}
                        placeholder={"Name here"}
                        Label={"Name"}
                      />
                      <Inputfild
                        type={"email"}
                        name={"email"}
                        onChange={handleChange}
                        placeholder={"Email"}
                        Label={"Email"}
                      />
                      <Inputfild
                        type={"password"}
                        name={"password"}
                        onChange={handleChange}
                        placeholder={"Create Password"}
                        Label={"Create Password"}
                        iconposition="right-[10%]"
                      />
                    </div>
                    <div className="mt-11 flex flex-col gap-3">
                      <BigButton
                        text={"Log In to your account"}
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
                      Don’t have an account?{" "}
                      <Link
                        to={Routing.Signup}
                        className="font-bold text-black"
                      >
                        Sign Up
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

export default Login;
