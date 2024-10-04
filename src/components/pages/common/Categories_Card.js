import React from "react";
import {IoIosArrowRoundForward } from "react-icons/io";

const CategoriesCard = ({data}) => {
  return (
    <>
      <div className="group flex flex-col mr-6">
        <img
          src={data.images}
          alt="card_image"
          className="grayscale group-hover:grayscale-0"
        />
        <h2 className="font-semibold text-[22px] text-black mt-6 max-w-[315px]">{data.headding}</h2>
        <p className="mt-1 text-black/70 text-sm font-light text-justify max-w-[315px]">{data.details}</p>
        <button className="relative bg-transparent h-[31px] border border-black/50 text-black text-xs leading-8 px-3 py-4 rounded-full flex justify-center items-center after:absolute after:bg-black after:h-0 after:w-full after:top-0 after:left-0 hover:after:h-full after:transition-[2s] after:-z-20 hover:text-white overflow-hidden group mt-4">Read more
        <IoIosArrowRoundForward className="text-black text-lg group-hover:text-white rotate-[-26deg]" />
        </button>
      </div>
    </>
  );
};

export default CategoriesCard;
