import React, { useState } from "react";
import Tabs from "../index";
import { Routing } from "../../../shared/Routing";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { TfiAngleDown } from "react-icons/tfi";
import NormalBtn from "../../common/NormalBtn";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Instructor_Create_Class,
  Instructor_Edit_Class,
} from "../../../services/Instructor/createClass/Index";
import { toast } from "react-toastify";
import { useEffect } from "react";

const CreateClass = () => {
  const { id } = useParams();

  const TimeSlot = [
    "--Select time--",
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];
  const [selectedTimeSlot, setselectedTimeSlot] = useState(TimeSlot[0]);
  const [shift, setshift] = useState("AM");
  const [classType, setClassType] = useState("Online");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [classdata, setClassdata] = useState({});
  const [FormData, setFormData] = useState({
    className: "",
    date: "",
    duration: "",
    aboutClass: "",
    rate: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    setLoading(true);
    const body = {
      className: FormData.className,
      date: FormData.date,
      duration: FormData.duration * 60,
      aboutClass: FormData.aboutClass,
      rate: FormData.rate,
      classType: classType,
      shift: shift,
      timeSlot: selectedTimeSlot,
    };

    const result = await Instructor_Create_Class(body);
    if (result?.success === true) {
      setLoading(false);
      console.log(result, "=======>");
      navigate(Routing.InstructorDashboard);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const getClassdata = async () => {
    const result = await Instructor_Edit_Class(id);
    if (result?.success === true) {
      setLoading(false);
      console.log(result, "=======>");
      setClassdata(result.data);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
    setselectedTimeSlot(classdata.timeSlot);
    setshift(classdata.shift);
  };

  useEffect(() => {
    getClassdata();
  }, []);

  return (
    <>
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <h1 className="text-black text-3xl font-semibold">Create Class</h1>
          <p className="text-black/70 text-base">
            Please fill below given details to create new class
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-11 mt-10">
            <div>
              <label className="text-base font-medium text-black block">
                Name your Class
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="className"
                  placeholder="Give name to your class"
                  className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[80px] rounded-2xl"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div>
              <label className="text-base font-medium text-black block">
                Date of Class
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  placeholder="DD/MM/YY"
                  className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[80px] rounded-2xl"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="w-full">
                <Listbox
                  value={selectedTimeSlot}
                  onChange={setselectedTimeSlot}
                >
                  <Label className="text-base font-medium text-black block">
                    Time Slot
                  </Label>
                  <div className="relative mt-2">
                    <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                      <span className="block truncate text-left">
                        {selectedTimeSlot}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <TfiAngleDown
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg"
                    >
                      {TimeSlot.map((person, i) => (
                        <ListboxOption
                          key={i}
                          value={person}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                        >
                          <span className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer">
                            {person}
                          </span>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
              <div className="w-[30%]">
                <Listbox value={shift} onChange={setshift}>
                  <div className="relative mt-2">
                    <Label className="text-base font-medium text-black block">
                      shift
                    </Label>
                    <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                      <span className="block truncate text-left">{shift}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <TfiAngleDown
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </span>
                    </ListboxButton>
                    <ListboxOptions
                      transition
                      className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg"
                    >
                      <ListboxOption
                        value="AM"
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                      >
                        <span className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer">
                          AM
                        </span>
                      </ListboxOption>
                      <ListboxOption
                        value="PM"
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                      >
                        <span className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer">
                          PM
                        </span>
                      </ListboxOption>
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <div>
              <Listbox value={classType} onChange={setClassType}>
                <Label className="text-base font-medium text-black block">
                  Class Type
                </Label>
                <div className="relative mt-2">
                  <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                    <span className="block truncate text-left">
                      {classType}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <TfiAngleDown
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      />
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg"
                  >
                    <ListboxOption
                      value={"face-to-face"}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer">
                        Face To Face
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value={"online"}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer">
                        Online
                      </span>
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
            <div>
              <label className="text-base font-medium text-black block">
                Class Duration
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="duration"
                  placeholder="eg. 1 hr/2 hr"
                  className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[80px] rounded-2xl"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div>
              <label className="text-base font-medium text-black block">
                Class Rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="rate"
                  placeholder="eg. $5, $10"
                  className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[80px] rounded-2xl"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="md:col-span-2 col-span-1">
              <label className="text-base font-medium text-black block">
                About the class
              </label>
              <div className="relative">
                <textarea
                  name="aboutClass"
                  placeholder="Write about your class in details"
                  className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[185px] pt-6 rounded-2xl"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-16">
            <NormalBtn
              text={"Create Class"}
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default CreateClass;
