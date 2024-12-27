import React, { useEffect, useState } from "react";
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
import {
  Instructor_Create_Slot,
  Instructor_Created_Slot,
} from "../../../services/Instructor/createClass/Index";
import Select from "react-select";
import Spinner from "../../../layouts/Spinner";
import dayjs from "dayjs";

const CreateSlot = () => {
  // Helper function to format time to 12-hour
  function formatTo12Hour(time) {
    const [hour, minute] = time.split(":");
    let hourInt = parseInt(hour, 10);
    const period = hourInt >= 12 ? "PM" : "AM";
    hourInt = hourInt % 12 || 12;
    const formattedHour = hourInt.toString().padStart(2, "0");
    return `${formattedHour}:${minute} ${period}`;
  }

  // slot time
  const [selectedTimeSlot, setselectedTimeSlot] = useState([]);
  const [classType, setClassType] = useState("Online");
  const [loading, setLoading] = useState(false);
  const [OldSlot, setOldSlot] = useState([]);
  const [FormData, setFormData] = useState({
    classdate: "",
    classRate: "",
  });
  const navigate = useNavigate();
  const TimeSlot = [];
  const [minDate, setMinDate] = useState("");

  const getdata = async () => {
    setLoading(true);
    const result = await Instructor_Created_Slot(
      JSON.parse(localStorage.getItem("_id")),
      FormData.classdate
    );
    if (result?.success === true) {
      setOldSlot(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        toast.info("Token is Expired");
        localStorage.clear();
      } else if (result?.message === "Instructor timeslots not found") {
        setOldSlot([]);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (FormData.classdate) {
      getdata();
    }
  }, [FormData.classdate]);

  // Generate TimeSlots based on class date
  if (FormData.classdate === dayjs(new Date()).format("YYYY-MM-DD")) {
    const currentHour = new Date().getHours();
    if (currentHour === 0) {
      TimeSlot.push({
        value: "00:00 To 01:00",
        label: `${formatTo12Hour("00:00")} To ${formatTo12Hour("01:00")}`,
      });
    }
    for (let hour = 0; hour < 23; hour++) {
      if (hour <= currentHour) continue;

      let startHour = hour.toString().padStart(2, "0");
      let endHour = ((hour + 1) % 24).toString().padStart(2, "0");

      let timeRange = `${startHour}:00 To ${endHour}:00`;

      TimeSlot.push({
        value: timeRange,
        label: `${formatTo12Hour(`${startHour}:00`)} To ${formatTo12Hour(
          `${endHour}:00`
        )}`,
      });
    }
    if (23 >= currentHour) {
      TimeSlot.push({
        value: "23:00 To 00:00",
        label: `${formatTo12Hour("23:00")} To ${formatTo12Hour("00:00")}`,
      });
    }
  } else {
    TimeSlot.push({
      value: "00:00 To 01:00",
      label: `${formatTo12Hour("24:00")} To ${formatTo12Hour("01:00")}`,
    });
    for (let hour = 1; hour < 23; hour++) {
      let startHour = hour.toString().padStart(2, "0");
      let endHour = ((hour + 1) % 24).toString().padStart(2, "0");
      let timeRange = `${startHour}:00 To ${endHour}:00`;
      TimeSlot.push({
        value: timeRange,
        label: `${formatTo12Hour(`${startHour}:00`)} To ${formatTo12Hour(
          `${endHour}:00`
        )}`,
      });
    }
    TimeSlot.push({
      value: "23:00 To 00:00",
      label: `${formatTo12Hour("23:00")} To ${formatTo12Hour("24:00")}`,
    });
  }

  // Filter out already reserved slots
  const availableTimeSlots = TimeSlot.filter(
    (slot) =>
      !OldSlot.includes(slot.value) &&
      !selectedTimeSlot.some((selected) => selected.value === slot.value)
  );
  console.log("🚀 ~ CreateSlot ~ OldSlot:", OldSlot);

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    let TimeSlot = [];
    for (let i = 0; i < selectedTimeSlot?.length; i++) {
      TimeSlot.push(selectedTimeSlot[i].value);
    }
    const rateWithpayment =
      parseInt(FormData.classRate) + Math.ceil((FormData.classRate * 5) / 100);
    const body = {
      classdate: FormData.classdate,
      timeSlot: TimeSlot,
      classRate: rateWithpayment,
      classType: classType,
      instructorId: JSON.parse(localStorage.getItem("_id")),
    };
    const result = await Instructor_Create_Slot(body);
    if (result?.success === true) {
      setLoading(false);
      navigate(Routing.InstructorDashboard);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString()?.slice(0, 10);
    setMinDate(today);
  }, []);

  return (
    <>
      {loading && <Spinner />}
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
                  min={minDate}
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
                    options={availableTimeSlots}
                    isMulti
                    onMenuOpen={() => {}}
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
                  value={FormData.classRate}
                  className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[80px] rounded-2xl mt-1.5"
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
