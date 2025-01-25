import React, { useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import User from "../../../assets/images/userProfile.jpg"

const InstructorsCard = ({ data,HeandleLike }) => {
  // eslint-disable-next-line
  let  liked= data?.favorite?.includes(JSON.parse(localStorage.getItem("_id")))||data?.Likes?.includes(JSON.parse(localStorage.getItem("_id")))
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-100 text-lg" />
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt className="text-yellow-100 text-lg" key="half" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gay-500 text-lg" />
        ))}
      </div>
    );
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full sm:pr-6">
        <div className="relative">
          <img
            src={data.profile_picture||User}
            alt={data.image}
            className="grayscale hover:grayscale-0 w-full h-[355px] object-cover rounded-lg"
          />
          <div
            className="h-[34px] w-[34px] bg-white rounded-full absolute top-4 right-3 flex items-center justify-center cursor-pointer"
            onClick={HeandleLike}
          >
           {liked ? (
            <FaHeart className="text-red-200 text-xl" />
          ) : (
            <FaRegHeart className="text-gray-500 text-xl" />
          )}
          </div>
        </div>
        <div>
          <div className="flex items-center mt-5 gap-1">
            <div className="flex items-center">{getStars(data.reviews)}</div>
            <span className="text-[10px] text-black/50">
              {data.reviews} ({data.TotalReview||0} TotalReview)
            </span>
          </div>
          <h2 className="text-black text-xl font-medium">{data.name}</h2>
          <p id="exprince" className="text-black/50 text-sm line-clamp-2 h-[40px] lowercase">{data.experience}</p>
          <div className="flex items-center mt-4">
            <button
              className="bg-black text-white text-xs text-center py-3 px-20 rounded-full"
              onClick={() =>
                navigate(`/student/instructor_profile/${data.instructorId}`)
              }
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsCard;
