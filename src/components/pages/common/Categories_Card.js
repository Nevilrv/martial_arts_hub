import React from "react";
import Wrestling from "../../../assets/images/Wrestling.png";


const CategoriesCard = ({ data }) => {
  return (
    <>
      <div className="group flex flex-col sm:mr-6 justify-between min-h-[249px]">
        <img
          src={data.categoryImage||Wrestling}
          alt="card_image"
          className="grayscale group-hover:grayscale-0 h-[258px] w-full object-cover"
        />
        <div>
        <h2 className="font-semibold text-[22px] text-black mt-6 max-w-[315px]">
          {data?.categoryName||data.className?.slice(0,5)}
        </h2>
        <p className="mt-1 text-black/70 text-sm font-light text-justify line-clamp-3 h-[40px]">
          {data?.categoryDescription||data.className}
        </p>
        </div>
        <button className="relative bg-transparent h-[31px] border border-black/50 text-black text-xs leading-8 px-3 py-4 rounded-full flex justify-center items-center after:absolute after:bg-black after:h-0 after:w-full after:top-0 after:left-0 hover:after:h-full after:transition-[2s] after:-z-20 hover:text-white overflow-hidden group mt-4">
          {data.classdate || "Read More"}
        </button>
      </div>
    </>
  );
};

export default CategoriesCard;
