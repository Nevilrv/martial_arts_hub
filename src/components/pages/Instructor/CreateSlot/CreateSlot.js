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
import { Routing } from "../../../shared/Routing";
import { toast } from "react-toastify";
import { Instructor_Create_Slot } from "../../../services/Instructor/createClass/Index";
import Select from "react-select/base";

const CreateSlot = () => {
  // slot time

  const [selectedTimeSlot, setselectedTimeSlot] = useState([]);
  const [classType, setClassType] = useState("Online");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const TimeSlot = [];
  TimeSlot.push({
    value: "24:00 To 01:00",
    label: "24:00 To 01:00",
  });
  for (let hour = 1; hour < 23; hour++) {
    let startHour = hour.toString().padStart(2, "0");
    let endHour = ((hour + 1) % 24).toString().padStart(2, "0");

    let timeRange = `${startHour}:00 To ${endHour}:00`;

    TimeSlot.push({
      value: timeRange,
      label: timeRange,
    });
  }
  TimeSlot.push({
    value: "23:00 To 24:00",
    label: "23:00 To 24:00",
  });

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const [FormData, setFormData] = useState({
    classdate: "",
    classRate: "",
  });

  const handleSubmit = async () => {
    // setLoading(true);
    let TimeSlot = [];
    for (let i = 0; i < selectedTimeSlot.length; i++) {
      TimeSlot.push(selectedTimeSlot[i].value);
    }
    const body = {
      classdate: FormData.classdate,
      timeSlot: TimeSlot,
      classRate: FormData.classRate,
      classType: classType,
      instructorId: JSON.parse(localStorage.getItem("_id")),
    };
    console.log(body, "========>");

    const result = await Instructor_Create_Slot(body);
    if (result?.success === true) {
      setLoading(false);
      navigate(Routing.InstructorDashboard);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
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
                  name="classdate"
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
            </div>
            <div>
              <Listbox value={classType} onChange={setClassType}>
                <Label className="text-base font-medium text-black block">
                  Class Type
                </Label>
                <div className="relative mt-2">
                  <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                    <span className="block truncate text-left">
                      {classType === "FaceToFace" ? "Face-To-Face" : classType}
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
                      value={"FaceToFace"}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    >
                      <span className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer">
                        Face-To-Face
                      </span>
                    </ListboxOption>
                    <ListboxOption
                      value={"Online"}
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
                  name="classRate"
                  placeholder="eg. $5, $10"
                  className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[80px] rounded-2xl"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-16">
            <NormalBtn text={"Create Slot"} onClick={handleSubmit} />
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default CreateSlot;
