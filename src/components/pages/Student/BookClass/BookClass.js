import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Routing } from "../../../shared/Routing";
import { useNavigate, useParams } from "react-router-dom";
import Instructors4 from "../../../../assets/images/Instructor-4.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { parsePhoneNumber } from "react-phone-number-input";
import { BiHeart } from "react-icons/bi";
import { Star7 } from "../../../../assets/icon";
import Inputfild from "../../common/Inputfild";
import Select from "react-select";
import { Radio, RadioGroup } from "@headlessui/react";
import OutlineBtn from "../../common/OutlineBtn";
import { SlCalender } from "react-icons/sl";
import Calendar from "react-calendar";
import "../../../../App.css";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import {
  Get_time_slot,
  Payment_Book_class,
  Student_get_Slot,
} from "../../../services/student/class";
import Spinner from "../../../layouts/Spinner";
import { toast } from "react-toastify";
import User from "../../../../assets/images/userProfile.jpg";

const BookClass = () => {
  const navigate = useNavigate();
  const mailingLists = [
    {
      id: 1,
      title: "FaceToFace",
    },
    {
      id: 2,
      title: "Online",
    },
  ];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);
  const [selectedMailingLists, setSelectedMailingLists] = useState();
  const [ShowCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [freeSession, setfreeSession] = useState({})
  const [freeSessionType, setfreeSessionType] = useState({})
  // Calendar
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [heandalChangeData, setheandalChangeData] = useState({
    message: "",
    className: "",
    studentEmail: "",
    mobileNumber: "",
    classRate: "",
    timeslotId: "",
    country_code: "",
  });

  const [TimeSlot, setTimeSlot] = useState([]);
  const [instructorData, setinstructorData] = useState({});
  const [rating, setRating] = useState(0);

  console.log(freeSessionType.value, "=================")

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const isHighlighted = highlightedDates.find(
        (d) =>
          d.getFullYear() === date.getFullYear() &&
          d.getMonth() === date.getMonth() &&
          d.getDate() === date.getDate()
      );
      return isHighlighted ? <div className="dot" /> : null;
    }
    return null;
  };

  const { instructorId } = useParams();

  const GetSlot = async () => {
    setLoading(true);
    const result = await Student_get_Slot(instructorId, selectedMailingLists);

    setfreeSession(JSON.parse(result.data.instructor.firstFreeSessionHourlyRate))
    setfreeSessionType(JSON.parse(result.data.instructor.classTypeFirstFreeSession))

    if (result?.success === true) {
      setLoading(false);
      setHighlightedDates(result.data.classdates.map((date) => new Date(date)));
      setinstructorData(result.data.instructor);
      setRating(result.data.instructor.reviews);
    } else {
      setLoading(false);
    }
  };

  const Get_Time_Slot = async (date) => {
    setLoading(true);
    const body = {
      instructorId: instructorId,
      classType: selectedMailingLists,
      date: dayjs(date).format("YYYY-MM-DD"),
    };
    const result = await Get_time_slot(body);
    if (result?.success === true) {
      setLoading(false);
      const formattedTimeSlots = [].concat(
        ...result?.data.map((items) =>
          items?.timeSlote?.map((slot) => ({
            label: slot,
            value: slot,
          }))
        )
      );
      setTimeSlot(formattedTimeSlots);
      setheandalChangeData((prevState) => ({
        ...prevState,
        classRate: result?.data[0]?.classRate,
      }));
    } else {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    GetSlot();
  }, [selectedMailingLists]);


  useEffect(() => {
    if (freeSession.value === "Yes" && freeSessionType.value === "FaceToFace" && localStorage.getItem('FreeTrial') === 'No') {
      setSelectedMailingLists(mailingLists[0].title);

    } else if (freeSession.value === "Yes" && freeSessionType.value === "Online" && localStorage.getItem('FreeTrial') === 'No') {

      setSelectedMailingLists(mailingLists[1].title);

    }
  }, [freeSession, freeSessionType])


  const handleChange = (e) => {
    setheandalChangeData({
      ...heandalChangeData,
      [e.target.name]: e.target.value,
    });
  };

  const HeandleCreateClass = async () => {

    const requiredFields = [
      "message", "className", "mobileNumber", "country_code"
    ];

    const missingFields = requiredFields.filter(field => !heandalChangeData?.[field]);

    if (missingFields.length > 0) {
      toast.error(`The following fields are required: ${missingFields.join(", ")}`);
      return;
    }

    const timeSlots = selectedTimeSlot.map((slot) => slot.value);

    if (selectedMailingLists === "" || null || undefined) {
      toast.error("Please Select Class Type");
      return;
    }

    if (timeSlots.length === 0) {
      toast.error("Please Select TimeSlots");
      return;
    }

    setLoading(true);

    const body = {
      message: heandalChangeData.message,
      className: heandalChangeData.className,
      FreeTrial: localStorage.getItem('FreeTrial'),
      classdate: dayjs(selectedDate).format("YYYY-MM-DD"),
      timeslote: timeSlots,
      classRate: localStorage.getItem('FreeTrial') === 'No' ? 0 : heandalChangeData.classRate,
      attendType: selectedMailingLists,
      studentEmail: JSON.parse(localStorage.getItem("email")),
      country_code: heandalChangeData.country_code,
      mobileNumber: heandalChangeData.mobileNumber,
      instructorId: instructorId
    };

    const result = await Payment_Book_class(
      JSON.parse(localStorage.getItem("_id")),
      body
    );
    console.log(result)
    if (result?.success === true) {
      setLoading(false);
      localStorage.setItem('FreeTrial', 'Yes')
      setheandalChangeData({
        message: "",
        mobileNumber: "",
        classRate: "",
      });
      setSelectedTimeSlot([]);
      navigate(Routing.StudentMyClass);
      setSelectedMailingLists();
      toast.success("Booking request sent successfully");
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const henadleCalender = () => {
    if (selectedMailingLists === undefined) {
      toast.error("select your class Type first");
      setShowCalendar(false);
    } else {
      setShowCalendar(!ShowCalendar);
    }
  };

  const handlePhoneNumberChange = (value) => {
    if (value) {
      try {
        const phoneNumberDetails = parsePhoneNumber(value);
        setheandalChangeData({
          ...heandalChangeData,
          country_code: phoneNumberDetails?.countryCallingCode,
          mobileNumber: phoneNumberDetails?.nationalNumber,
        });
      } catch (error) {
        console.error("Error parsing phone number:", error);
      }
    } else {
      setheandalChangeData((prevDetails) => ({
        ...prevDetails,
        country_code: "",
        mobileNumber: "",
      }));
    }
  };


  return (
    <>
      {loading && <Spinner />}
      <div className="md:px-12 px-4 grid lg:grid-cols-4 2xl:gap-x-10 gap-5 grid-cols-1 items-start">
        <div>
          <FaArrowLeft
            className="text-black cursor-pointer text-2xl"
            onClick={() => navigate(Routing.Initial)}
          />
        </div>
        <div className="md:col-span-3">
          <h3 className="text-black font-semibold text-[40px]">Book Class!</h3>
          <p className="text-black/50 text-xl">
            Your first free class with {instructorData.name}!
          </p>
        </div>

        <div className="mt-3">
          <div className="relative">
            <img
              src={instructorData.profile_picture || User}
              alt={Instructors4}
              className="w-full h-[613px] grayscale hover:grayscale-0 object-cover rounded-[25px]"
            />
            <div className="absolute bottom-[-7%] -right-[7%]">
              <div className="relative">
                <Star7 />
                <div className="items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {localStorage.getItem('FreeTrial') === 'No' && freeSession.value === 'Yes'
                    ?
                    <>
                      <h2 className="text-white text-xl text-center font-bold">
                        First Free Class
                      </h2>
                    </>
                    :
                    <>
                      <h2 className="text-white text-xl font-bold">
                        £{heandalChangeData.classRate || 0}
                      </h2>
                      <p className="text-white text-xl text-center font-medium">
                        hr
                      </p>
                    </>
                  }
                </div>
              </div>
            </div>
            <div className="h-[34px] w-[34px] bg-white rounded-full absolute top-4 right-3 flex items-center justify-center cursor-pointer">
              <BiHeart className="text-2xl" />
            </div>
            <div className="instructor_profile_shape"></div>
          </div>
          <h2 className="text-[26px] font-bold text-black mt-6">
            {instructorData.name}
          </h2>
          <div className="mt-3 flex items-center gap-x-1">
            <div className="flex items-center gap-0.5">{getStars(rating)}</div>
            <p className="text-black/50 text-sm">
              {rating}
              <span className="underline">
                ({instructorData.totalReviews || 0} Reviews)
              </span>
            </p>
          </div>
        </div>

        <div className="md:col-span-3 mt-8">
          <label className={`text-xl font-semibold text-black block`}>
            What Would You Like to Learn?
          </label>
          <input type="text" name="className" onChange={(e) => handleChange(e)} value={heandalChangeData.className} placeholder="What do you want to learn?" className="bg-[#DAD8D0] mt-2 focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[70px] rounded-xl" />
          <label className={`text-xl font-semibold text-black block mt-8`}>
            Your message
          </label>
          <textarea
            className="h-[200px] rounded-[20px] mt-2 bg-[#DAD8D0] w-full focus:outline-none p-6 placeholder:text-black/50"
            placeholder="Write Your message here*"
            name="message"
            value={heandalChangeData.message}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <div className="grid md:grid-cols-2 gap-x-3 gap-y-8 grid-cols-1 mt-9">
            <div className="w-full">
              <label className="text-black/100 font-semibold text-xl">
                {freeSession.value === "Yes" && localStorage.getItem('FreeTrial') === "No" ? `Get started with your first free ${freeSessionType.value} session.` : 'How would you like to attend your class?'}
              </label>
              <fieldset>
                <RadioGroup
                  value={selectedMailingLists}
                  onChange={setSelectedMailingLists}
                  className="mt-2"
                  disabled={freeSession.value === 'Yes' && localStorage.getItem("FreeTrial") === 'No' ? true : false}
                >
                  <Radio
                    value={mailingLists[0].title}
                    aria-label={mailingLists[0].title}
                    className="group relative flex cursor-pointer rounded-2xl border-0 bg-[#DAD8D0] h-[80px] p-7 items-center"
                  >
                    <span className="flex flex-1 items-center">
                      <span className="flex flex-col items-center">
                        <span className="block text-lg text-center font-medium text-black/70">
                          {mailingLists[0].title}
                        </span>
                      </span>
                    </span>
                    <div className="h-[22px] w-[22px] rounded-full border absolute right-4 bg-transparent [.group:not([data-checked])_&]:border-gay-300 group-data-[focus]:border group-data-[checked]:bg-green group-data-[checked]:border-none"></div>
                  </Radio>
                </RadioGroup>
              </fieldset>
            </div>
            <div className="w-full">
              <label className="text-black/100 font-semibold text-xl  md:block hidden opacity-0">
                {freeSession.value === "Yes" && localStorage.getItem('FreeTrial') === "No" ? `Get started with your first free ${freeSessionType} session.` : 'How would you like to attend your class?'}
              </label>
              <fieldset>
                <RadioGroup
                  value={selectedMailingLists}
                  onChange={setSelectedMailingLists}
                  className="mt-2"
                  disabled={freeSession.value === 'Yes' && localStorage.getItem("FreeTrial") === 'No' ? true : false}
                >
                  <Radio
                    value={mailingLists[1].title}
                    aria-label={mailingLists[1].title}
                    className="group relative flex cursor-pointer rounded-2xl border-0 bg-[#DAD8D0] h-[80px] p-7 items-center"
                  >
                    <span className="flex flex-1 items-center">
                      <span className="flex flex-col items-center">
                        <span className="block text-lg text-center font-medium text-black/70">
                          {mailingLists[1].title}
                        </span>
                      </span>
                    </span>
                    <div className="h-[22px] w-[22px] rounded-full border absolute right-4 bg-transparent [.group:not([data-checked])_&]:border-gay-300 group-data-[focus]:border group-data-[checked]:bg-green group-data-[checked]:border-none"></div>
                  </Radio>
                </RadioGroup>
              </fieldset>
            </div>
            <div className="w-full">
              <label className="text-black/100 font-semibold text-xl">
                Date of First Class
              </label>
              <div className="relative">
                <div
                  onClick={() => henadleCalender()}
                  className="h-[80px] w-full bg-[#DAD8D0] rounded-2xl flex items-center justify-between p-7 cursor-pointer"
                >
                  <p className="text-lg text-black font-semibold">
                    {dayjs(selectedDate).format("DD-MM-YYYY")}
                  </p>
                  <SlCalender className="text-gay-300 text-[28px]" />
                </div>
                {ShowCalendar && (
                  <div className="absolute top-full left-0 z-20 w-full">
                    <Calendar
                      minDate={new Date()}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setShowCalendar(false);
                        Get_Time_Slot(date);
                      }}
                      value={selectedDate}
                      tileContent={tileContent}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="w-full">
                <label className="text-black/100 font-semibold text-xl">
                  Time Slot
                </label>
                <div className="TimeSlot">
                  <Select
                    value={selectedTimeSlot} // Bind the selected value
                    onChange={setSelectedTimeSlot}
                    options={TimeSlot}
                    isMulti
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-Dark_black font-bold text-[24px]">
              Contact Details
            </h3>
            <p className="text-black/50 text-base">
              Don’t worry! Your information is well-protected. It will be
              accessible only to the instructors you choose.!
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-9">
            <Inputfild
              type={"email"}
              placeholder={"Email Address here"}
              Label={"Email Address"}
              className={"h-[80px] md:w-full customradius mt-1"}
              Labelclass={"text-black/100 font-semibold text-xl"}
              name="studentEmail"
              value={JSON.parse(localStorage.getItem("email"))}
            />
            <div className="h-[80px] md:w-full  mt-1">
              <label className={'text-black/50 font-semibold text-xl'}>
                Mobile No.
              </label>
              <PhoneInput
                placeholder="Enter phone number"
                value={
                  heandalChangeData?.mobileNumber
                    ? `+${heandalChangeData?.country_code}${heandalChangeData?.mobileNumber}`
                    : ""
                }
                className="input-phone-number"
                onChange={handlePhoneNumberChange}
                enableSearch={true}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <OutlineBtn
              text={"Next"}
              className={"bg-black text-white w-[160px] h-[65px]"}
              onClick={() => HeandleCreateClass()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookClass;
