import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routing } from "../../shared/Routing";
import { Payment_Successful_Data } from "../../services/student/class";
import Spinner from "../../layouts/Spinner";
import { toast } from "react-toastify";

const PaymentSuccessful = () => {
  const data = JSON.parse(localStorage.getItem("paymentDetails"));
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const Storedata = async () => {
    setLoading(true);
    let body = {
      paymentId: data?.paymentId,
      customerId: data?.customerId,
    };
    const result = await Payment_Successful_Data(
      data.studentId,
      data.classId,
      data.bookingId,
      data.instructorId,
      body
    );
    if (result?.success === true) {
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    Storedata()
  }, [])
  

  return (
    <>
      {Loading && <Spinner />}
      <div class="bg-gray-100 h-[calc(100vh-430px)] flex items-center">
        <div class="bg-white p-6 max-w-[600px] md:mx-auto">
          <svg viewBox="0 0 24 24" class="text-green w-16 h-16 mx-auto my-6">
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p class="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day! </p>
            <div class="py-10 text-center">
              <h2
                onClick={()=>{navigate(Routing.StudentInvoices);localStorage.removeItem("paymentDetails")}}
                class="px-12 bg-green/90 rounded-lg hover:bg-green text-white font-semibold py-3"
              >
                GO BACK
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
