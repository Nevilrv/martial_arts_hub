import React, { useEffect, useState } from "react";
import { StartWithSquare } from "../../../../assets/icon";
import Tabs from "../";
import { Get_Reviews_List } from "../../../services/Instructor/Reviews";
import Spinner from "../../../layouts/Spinner";

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
          <div className="mt-8 flex flex-col gap-4">
            {reviewsList.map((review,i) => (
              <div className="bg-primary_dark p-6 rounded-lg">
                <p className="text-base">
                  {i+1}. {review?.feedback}
                </p>
                <h2 className="text-base text-black font-bold mt-1">
                  - {review?.studentName}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Index;
