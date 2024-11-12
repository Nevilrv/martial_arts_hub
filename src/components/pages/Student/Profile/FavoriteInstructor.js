import React, { useState } from "react";
import StudentProfile from "./StudentProfile";
import { MultiHeartIcon } from "../../../../assets/icon";
import OutlineBtn from "../../common/OutlineBtn";
import { HiMagnifyingGlass } from "react-icons/hi2";
import InstructorsCard from "../../common/Instructors_Card";
import Instructor1 from "../../../../assets/images/Instructor-1.png";
import Instructor2 from "../../../../assets/images/Instructor-2.png";
import Instructor3 from "../../../../assets/images/Instructor-3.png";
import Instructor4 from "../../../../assets/images/Instructor-4.png";
import { useEffect } from "react";
import { GetLikesChek } from "../../../services/student/Homepage/Homepage";

const FavoriteInstructor = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const Getdata = async () => {
    setLoading(true);
    const result = await GetLikesChek(localStorage.getItem("_id"));
    if (result?.success === true) {
      setLoading(false);
      console.log(result.data, "=======>favorite_instructors");
      setData(result.data);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <>
      <StudentProfile>
        {/* <div className="border border-[#71717194] py-space px-6 rounded-lg min-h-[212px] mt-14">
          <div className="flex flex-col items-center justify-center">
            <MultiHeartIcon />
            <h2 className="text-Dark_black text-2xl font-semibold">
              You don’t have any favorites yet!
            </h2>
            <p className="text-gay-300 max-w-[530px] mx-auto text-center">
              Your favorites list is currently empty. Discover and add your
              favorite items here to quickly access them anytime.
            </p>
            <div className="mt-12">
              <OutlineBtn
                text={"Search Instructor"}
                className={"bg-black text-white mt-12 md:w-[250px] h-[60px]"}
              />
            </div>
          </div>
        </div> */}

        <div className="border border-[#71717194] py-7 px-6 rounded-lg mt-14">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-black text-[22px] font-semibold">
                Favorite Instructors
              </h2>
              <p className="text-gay-300">
                Your favorites instructors will be show here. You can quickly
                access them anytime.
              </p>
            </div>
            <OutlineBtn
              text={"Find more"}
              icon={<HiMagnifyingGlass className="text-xl mr-2" />}
              className={"bg-black text-white h-[60px]"}
            />
          </div>
          <div className="mt-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {data.map((data) => (
              <InstructorsCard data={data} />
            ))}
          </div>
        </div>
      </StudentProfile>
    </>
  );
};

export default FavoriteInstructor;
