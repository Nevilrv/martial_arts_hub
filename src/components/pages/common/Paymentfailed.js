import React from "react";
import { Link } from "react-router-dom";
import { Routing } from "../../shared/Routing";
import { IoMdCloseCircle } from "react-icons/io";

const PaymentFailed = () => {
  return (
    <>
      <div class="bg-gray-100 h-[calc(100vh-430px)] flex items-center">
        <div class="bg-white p-6 md:min-w-[600px] min-w-full md:mx-auto">
        <IoMdCloseCircle className="text-red-200 text-[60px] mx-auto" />
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Failed!
            </h3>
            <p class="text-gray-600 my-2">
            Try again later
            </p>
            <p> Have a great day! </p>
            <div class="py-10 text-center">
              <Link
                to={Routing.StudentMyClass}
                class="px-12 bg-red-200/90 rounded-lg hover:bg-red-200 text-white font-semibold py-3"
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFailed;
