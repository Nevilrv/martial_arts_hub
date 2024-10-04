import React, { useState } from "react";
import Tabs from "../index";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { TfiAngleDown } from "react-icons/tfi";
import NormalBtn from "../../common/NormalBtn";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const CreateSlot = () => {
  const TimeSlot = [
    { value: "12:00", label: "12:00" },
    { value: "12:30", label: "12:30" },
    { value: "01:00", label: "01:00" },
    { value: "01:30", label: "01:30" },
    { value: "02:00", label: "02:00" },
    { value: "02:30", label: "02:30" },
    { value: "03:00", label: "03:00" },
    { value: "03:30", label: "03:30" },
    { value: "04:00", label: "04:00" },
    { value: "04:30", label: "04:30" },
    { value: "05:00", label: "05:00" },
    { value: "05:30", label: "05:30" },
    { value: "06:00", label: "06:00" },
    { value: "06:30", label: "06:30" },
    { value: "07:30", label: "07:30" },
    { value: "08:00", label: "08:00" },
    { value: "08:30", label: "08:30" },
    { value: "09:00", label: "09:00" },
    { value: "09:30", label: "09:30" },
    { value: "10:00", label: "10:00" },
    { value: "10:30", label: "10:30" },
    { value: "11:00", label: "11:00" },
    { value: "11:30", label: "11:30" },

  ];
  const [selectedTimeSlot, setselectedTimeSlot] = useState([]);
  const [shift, setshift] = useState("");
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

  return (
    <>
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <h1 className="text-black text-3xl font-semibold">Create Slot</h1>
          <p className="text-black/70 text-base">
            Please fill below given details to create new Slot
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-11 mt-10">
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
              <label className="text-base font-medium text-black block">
              Time Slot
              </label>
              <div className="TimeSlot">
                <Select
                  defaultValue={selectedTimeSlot}
                  onChange={setselectedTimeSlot}
                  options={TimeSlot}
                  isMulti
                />
              </div>
              </div>
              <div className="w-[30%]">
              <label className="text-base font-medium text-black block">
              shift
              </label>
              <div className="TimeSlot">
                <Select
                  defaultValue={shift}
                  onChange={setshift}
                  options={[{value:"AM",label:"AM"},{value:"PM",label:"PM"}]}
                />
              </div>
              </div>
            </div>
            <div>
              <Listbox>
                <Label className="text-base font-medium text-black block">
                  Class Type
                </Label>
                <div className="relative mt-2">
                  <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                    <span className="block truncate text-left"></span>
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
          </div>
          <div className="flex items-center justify-end mt-16">
            <NormalBtn text={"Create Slot"} />
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default CreateSlot;
