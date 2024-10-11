import React from "react";
import { FiPlus } from "react-icons/fi";
import OutlineBtn from "../../common/OutlineBtn";

const RecentClasses = ({ cardDetails }) => {
  return (
    <>
      <div className=" bg-gay-600 rounded-3xl px-8 py-7">
        <div className="flex items-center justify-between">
          <h3 className="text-gay-300 text-lg font-medium">
            {cardDetails.CardTitle}
          </h3>
          {cardDetails.Plus !== false ? (
            <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center text-white">
              <FiPlus className="text-white text-xl" />
            </div>
          ) : null}
        </div>
        {/* <div className="flex items-center justify-center flex-col my-6">
          {cardDetails.CardIcon}
          <h3 className="text-black font-semibold text-lg">
            {cardDetails.CardHeadding}
          </h3>
          <p
            className={`text-gay-300 text-[13px] text-center mx-auto ${
              cardDetails.CardDetailsclassName || "max-w-[346px]"
            }`}
          >
            {cardDetails.CardDetails}
          </p>
        </div> */}
        <div className="flex items-center justify-between mt-7">
          <div className="flex items-start gap-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/85f5/93ed/252f0ac099af762c888b4cfe201bab14?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fpO6IgOXypGI56Ylb8HmPqCQydDFvgTrFtbSxWMP6an3Yzm78Uynx1vAVH5fs05VBZeZKrYzTuB2gvpxq5nABWj22AVQsdncGW2yGrXExDwDaDM02Pmywzmc~dpBOpulLOsuGTAezuL-X4jcMrDQb5KcjEELWzoVDzMtgWLVF1KLR6eSARbH4Z~7jnzllhz9np8jgusyledGRST-scBj2~Wt1Z48ofSphEBCSmAzF9GWIfPIIyNLVAv1cq~L7XQ8vSZe3LGeVlv~xl5I9mWKrH5gqMQToIysQ54lBjcgEt8wcDYht5aq3fVAilV~-fkxQN~a0VjLKmytIVzsOchYMQ__"
              alt=""
              className="grayscale hover:grayscale-0 w-[125px] h-[85px] rounded-lg"
            />
            <div>
                <h2 className="text-black text-xl font-semibold">Wrestling</h2>
                <p className="text-black/70 max-w-[390px]">A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.</p>
            </div>
          </div>
            <OutlineBtn text={"See Details"}  />
        </div>
      </div>
    </>
  );
};

export default RecentClasses;
