import React from "react";
import { BiHeart, BiSolidStar, BiStar } from "react-icons/bi";

const Instructors_Card = ({ data }) => {
  const roundedRating = Math.round(data.rating); 
  console.log(roundedRating,"=========>");
  // Round to nearest half-star
  const filledStars = Math.floor(roundedRating);
  const halfStar = roundedRating - filledStars > 0;

  return (
    <>
      <div className="w-full pr-[24px]">
        <div className="relative">
          <img
            src={data.image}
            alt="image"
            className="grayscale w-full object-top h-[355px] object-cover"
          />
          <div className="h-[34px] w-[34px] bg-white rounded-full absolute top-4 right-3 flex items-center justify-center">
            <BiHeart />
          </div>
        </div>
        <div>
          <div className="flex items-center mt-5 gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <BiSolidStar
                  key={i}
                  className={
                    i < filledStars
                      ? "text-yellow-100"
                      : halfStar && i === filledStars
                      ? "text-yellow-100"
                      : "text-gray-500"
                  }
                />
              ))}
            </div>
            <span className="text-[10px] text-black/50">
              4.3 (1200 Ratings)
            </span>
          </div>
          <h2 className="text-black text-xl font-medium">{data.name}</h2>
          <p className="text-black/50 text-sm">
            {data.experience}+ years of experience
          </p>
          <div className="flex items-center mt-4">
            <button className="bg-black text-white text-xs text-center py-2 px-3 rounded-full">
              View Profile
            </button>
            <button className="ml-2 bg-transparent border border-black/50 text-black text-xs text-center py-2 px-3 rounded-full">
              Send a message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructors_Card;
