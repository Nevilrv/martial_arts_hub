import dayjs from 'dayjs'
import React from 'react'
import { Routing } from '../../../../shared/Routing'
import { useNavigate } from 'react-router-dom'
import OutlineBtn from '../../../common/OutlineBtn'
import { FaRegCalendarAlt } from "react-icons/fa";
import User from '../../../../../assets/images/userProfile.jpg'

const BookingRequestcard = ({cardDetails}) => {
    console.log(cardDetails,"========")
    const navigate = useNavigate()
  return (
    <>
      <div className="bg-gay-600 rounded-3xl px-8 py-7 h-full overflow-auto" id="hideScoll">
        <div className="flex items-center justify-between ">
          <h3 className="text-gay-300 text-lg font-medium">
          Booking Requests
          </h3>
        </div>
        {cardDetails.length <= 0 && (
          <div className="flex items-center justify-center flex-col mt-20">
          <FaRegCalendarAlt className='text-black/40 text-4xl' />
            <h3 className="text-black font-semibold text-lg">
            Booking Requests!
            </h3>
            <p className={`text-gay-300 text-[13px] text-center mx-auto max-w-[346px]`}>
            No booking requests yet. Your available slots are open for students!
            </p>
          </div>
        )}
        {cardDetails.map((item,index) => (
            <div className="sm:flex items-center gap-5 w-full py-3" >
            <div className="flex justify-center pb-3 sm:pb-0">
              <img src={item?.student?.profile_picture || User} className="sm:h-[80px] sm:w-[150px] w-[150px] h-[150px] rounded-full sm:rounded-lg object-cover grayscale" alt="" />
            </div>
            <div className="w-full">
              <div className="sm:flex items-center justify-between py-2 sm:py-0">
                <h2 className="text-Dark_black text-xl font-medium text-[18px]">
                  {item?.className || "No ClassName..."}
                </h2>
                <OutlineBtn
                  text={`View Booking Request`}
                  className={
                    "bg-green text-white border-none sm:text-[11px] text-xs mt-1 w-full sm:w-auto sm:mt-0"  
                  }
                  onClick={() => navigate(Routing.InstructorBooking)}
                />
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-[2px]">
                    <p className="text-black/70 text-[12px] font-semibold">
                      Class Date:
                    </p>
                    <p className="text-black/70 text-[12px] font-light">
                      {dayjs(item?.classdate).format('DD MMM,YYYY')}
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <p className="text-black/70 text-[12px] font-semibold">
                      Class Time:
                    </p>
                    <p className="text-black/70 text-[12px] font-light">
                      {item?.startTimeLocal}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-[2px]">
                    <p className="text-black/70 text-[12px] font-semibold">
                      Class Type:{" "}
                    </p>
                    <p className="text-black/70 text-[12px] font-light">
                    {item?.attendType}
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <p className="text-black/70 text-[12px] font-semibold">
                      Class Rate:{" "}
                    </p>
                    <p className="text-red-200 text-[12px] font-semibold">
                    £{item?.classRate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookingRequestcard
