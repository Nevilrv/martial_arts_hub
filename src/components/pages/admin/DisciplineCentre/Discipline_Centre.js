import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import Spinner from "../../../layouts/Spinner";
import { toast } from "react-toastify";
import { Discipline_List } from "../../../services/Admin/Discipline_Centre/Discipline_Centre";
import dayjs from "dayjs";
import User from "../../../../assets/images/userProfile.jpg";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import OutlineBtn from "../../common/OutlineBtn";
import Inputfild from "../../common/Inputfild";
import { IoCamera } from "react-icons/io5";

const Discipline_Centre = () => {
  const [Loading, setLoading] = useState(false);
  const [isOpen, SetisOpen] = useState(true);
  const [Discipline_data, setDiscipline_data] = useState([]);
  const [discipline, setdiscipline] = useState({
    userType: "",
    duration: "",
  });
  const heandleChange = (e) => {
    setdiscipline({ ...discipline, [e.target.name]: e.target.value });
  };

  const Get_Discipline = async () => {
    setLoading(true);
    const result = await Discipline_List(
      discipline.userType,
      discipline.duration
    );
    if (result?.success === true) {
      setLoading(false);
      setDiscipline_data(result.data);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Discipline();
  }, [discipline]);

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"All Categories"} />
        <div className="flex items-center gap-2 flex-wrap">
          <select
            id="userType"
            name="userType"
            onChange={heandleChange}
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option value="">All</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>
          <select
            id="duration"
            name="duration"
            onChange={heandleChange}
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option value="">All</option>
            <option value="month">This month</option>
            <option value="week">This week</option>
          </select>
        </div>
      </div>

      <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-3 gap-x-2.5">
        {Discipline_data.map((discipline) => (
          <div className="p-5 bg-primary shadow-BoxShadow rounded-xl">
            <div className="flex items-start gap-2">
              <img
                src={discipline.userProfile || User}
                className="h-[44px] w-[44px] rounded-full object-cover object-top grayscale"
                alt=""
                srcset=""
              />
              <div>
                <h2 className="text-xl text-Dark_black font-semibold">
                  {discipline.userName}
                </h2>
                <p className="text-[14px] text-gay-300">
                  {discipline.userRole} • Added on{" "}
                  {dayjs(discipline.createdAt).format("DD MMM, YYYY")}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xs text-Dark_black font-medium">
                Discipline Name
              </h2>
              <h2 className="text-xs text-gay-300 mt-0.5 font-medium">
                {discipline.disciplineName}
              </h2>
            </div>
            <div className="mt-4">
              <h2 className="text-xs text-Dark_black font-medium">
                Discipline Description
              </h2>
              <p className="text-[13px] text-gay-300 mt-0.5 font-medium text-justify">
                {discipline.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Dialog className="relative z-[9999]" open={isOpen} onClose={SetisOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-6 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[775px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <h1 className=" mt-3 font-semibold text-2xl">
                  Add Main Categorie
                </h1>
                <div className="mt-5 grid grid-cols-1 gap-3">
                  <Inputfild
                    type={"text"}
                    placeholder="Enter your main Categorie"
                    Label={"Enter your main Categorie"}
                    className={"rounded-lg md:w-full"}
                    Labelclass={"mb-1 customradiusBlack text-base"}
                  />
                  <div>
                    <label className={`text-base block mb-1`}>
                      Enter your main Categorie
                    </label>
                    <textarea className="w-full cursor-pointer bg-[#DAD8D0] rounded-lg h-[100px] p-3 placeholder:text-black/25 focus:outline-none" placeholder="Enter your Details" />
                  </div>
                  <div className="w-full h-[150px] rounded-xl overflow-hidden bg-[#DAD8D0] flex items-center justify-center relative">
                    {/* {instructorDetails?.profile_picture === null || */}
                    {/* instructorDetails?.profile_picture === "" ? ( */}
                    <div className="flex items-center justify-center flex-col absolute top-0 left-0 h-full w-full bg-[#DAD8D0]">
                      <IoCamera className="text-black/20 text-4xl" />
                      <p className="text-black/20 text-[13px] font-medium">
                        Add Profile Picture
                      </p>
                    </div>
                    {/* ) : ( */}
                    <img
                      // src={instructorDetails?.profile_picture || User}
                      alt=""
                      className="h-full object-cover absolute top-0 left-0"
                    />
                    {/* )} */}
                    <div className="flex items-center justify-center flex-col">
                      <IoCamera className="text-black/20 text-4xl" />
                      <p className="text-black text-[13px] font-medium">
                        {/* {instructorDetails?.profile_picture?.name} */}
                      </p>
                    </div>
                    <input
                      type="file"
                      name="profile_picture"
                      className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-3 mt-14 justify-end">
                  <OutlineBtn
                    text={"Create Main Categorie"}
                    className={`border-black/30 w-[260px] font-medium text-lg bg-black text-white rounded-lg`}
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

export default Discipline_Centre;
