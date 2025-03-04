import React, { useEffect, useState } from "react";
import { StartWithSquare } from "../../../../assets/icon";
import Tabs from "../";
import { Get_Reviews_List } from "../../../services/Instructor/Reviews";
import Spinner from "../../../layouts/Spinner";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Index = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const Get_Reviews = async () => {
    setLoading(true);

    const result = await Get_Reviews_List();
    if (result?.success === true) {
      setLoading(false);
      setReviewsList(result.data);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    Get_Reviews();
  }, []);


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

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <div>
            <h1 className="text-black text-3xl font-semibold">Reviews</h1>
            <p className="text-black/70 text-base">
              Reviews given by students for your class will be shown here
            </p>
          </div>
          {reviewsList?.length <= 0 && (
            <div className="flex items-center justify-center flex-col h-[calc(100vh-300px)]">
              <StartWithSquare />
              <h2 className="text-[26px] font-medium text-center mt-7">
                No reviews to show currently!
              </h2>
              <p className="text-lg text-gay-300 max-w-[490px] mx-auto text-center">
                You haven’t received any reviews yet. Once a student submits a
                review, it will appear here.
              </p>
            </div>
          )}
          <div className="mt-8 flex flex-col gap-4 overflow-y-auto h-[500px]" id="hideScoll">
            {reviewsList.map((review, i) => (
              <div className="bg-primary_dark flex gap-4 p-6 rounded-lg">
                <img
                  src={review?.studentProfile}
                  alt=""
                  className="w-[46px] h-[46px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span>{review?.studentName}</span>
                  <span className="text-gay-300">{review?.feedback}</span>
                  <div>{getStars(review?.rating)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Index;
