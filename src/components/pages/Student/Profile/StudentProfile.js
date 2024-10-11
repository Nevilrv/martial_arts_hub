import React from "react";
import { FaQuoteRight } from "react-icons/fa6";

const StudentProfile = () => {
  return (
    <>
      <div className="bg-black px-[52px] pb-[47px]">
        <div className="flex items-center justify-end">
          <div>
            <p className="text-right mt-[73px]">
          <FaQuoteRight className="text-5xl ml-auto text-primary/20 text-right" />
            </p>
            <p className="text-[26px] text-white text-right max-w-[525px]">
              We are what we repeatedly do. Excellence then is not an act but a
              habit.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4"></div>
    </>
  );
};

export default StudentProfile;
