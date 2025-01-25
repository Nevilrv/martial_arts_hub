import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import Spinner from "../../../layouts/Spinner";
import { toast } from "react-toastify";
import { Discipline_List } from "../../../services/Admin/Discipline_Centre/Discipline_Centre";
import dayjs from "dayjs";
import User from "../../../../assets/images/userProfile.jpg";


const Discipline_Centre = () => {
  const [Loading, setLoading] = useState(false);
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
    </>
  );
};

export default Discipline_Centre;
