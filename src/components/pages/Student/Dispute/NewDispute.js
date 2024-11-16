import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { TfiAngleDown } from "react-icons/tfi";
import { MdCloudUpload } from "react-icons/md";
import OutlineBtn from "../../common/OutlineBtn";
import {
  CreateDispute,
  GetInstructorClassForDispute,
  GetInstructorForDispute,
} from "../../../services/student/Dispute/Dispute";
import { toast } from "react-toastify";
import Popup from "../../common/Popup";
import { Confirm_Popup_Icon } from "../../../../assets/icon";
import { Routing } from "../../../shared/Routing";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../layouts/Spinner";

const NewDispute = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [getInstructors, setGetInstructors] = useState([]);
  const [getClass, setgetClass] = useState([]);
  const [selectInstructor, setselectInstructor] = useState();
  const [Dispute, setDispute] = useState({
    disputeType: "",
    description: "",
    evidenceScreenShort: [],
    totalAmount: "",
    classId:"",
    bookingId:"",
  });
  const [selectClass, setSelectClass] = useState();
  const studentId = JSON.parse(localStorage.getItem("_id"));
  const [instructorid, setinstructorid] = useState();
  const [isOpen, SetisOpen] = useState(false);

  const GetgetInstructorList = async () => {
    setLoading(true);
    const result = await GetInstructorForDispute(studentId);
    if (result?.success === true) {
      setLoading(false);
      setGetInstructors(result.data);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  const GetgetInstructorClass = async () => {
    setLoading(true);
    const result = await GetInstructorClassForDispute(instructorid, studentId);
    if (result?.success === true) {
      setLoading(false);
      setgetClass(result.data);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  const heandlechange = (event) => {
    if (event.target.name === "evidenceScreenShort" && event.target.files) {
      const filesArray = Array.from(event.target.files);
      setDispute((prevState) => ({
        ...prevState,
        evidenceScreenShort: [
          ...(prevState.evidenceScreenShort || []),
          ...filesArray,
        ],
      }));
    } else {
      setDispute((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  };
  console.log("🚀 ~ NewDispute ~ Dispute:", Dispute);
  useEffect(() => {
    GetgetInstructorList();
  }, []);
  useEffect(() => {
    GetgetInstructorClass();
  }, [instructorid]);

  const HeandleCreateDispute = async () => {
    const formData = new FormData();
    formData.append("disputeType", Dispute.disputeType);
    formData.append("instructorName", selectInstructor);
    formData.append("className", selectClass);
    formData.append("description", Dispute.description);
    formData.append("instructorId", instructorid);
    formData.append("totalAmount", Dispute.totalAmount);
    formData.append("classId", Dispute.classId);
    formData.append("bookingId", Dispute.bookingId);
    if (
      Dispute.evidenceScreenShort &&
      Array.isArray(Dispute.evidenceScreenShort)
    ) {
      Dispute.evidenceScreenShort.forEach((file, index) => {
        formData.append(`evidenceScreenShort`, file);
      });
    }
    const result = await CreateDispute(formData, studentId);
    if (result?.success === true) {
      setLoading(false);
      toast.success(result?.message);
      SetisOpen(true);
      // navigate(Routing.InstructorDashboard)
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
   
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-11 px-3 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-3xl font-semibold">New Dispute</h1>
        </div>
        <div className="md:flex items-center justify-between mt-4 gap-y-9 grid grid-cols-1">
          <div className="md:w-[30%] h-[110px] dispute_shape flex items-center justify-center bg-green">
            <div>
              <p className="text-xl text-white/50 text-center">-: StAGE 1 :-</p>
              <h2 className="text-[20px] text-white font-bold text-center">
                Identify the Issue
              </h2>
            </div>
          </div>
          <FaArrowAltCircleRight className="text-[34px] text-[#B5B1B1] md:block hidden" />
          <div className="md:w-[30%] h-[110px] dispute_shape bg-gay-300 flex items-center justify-center">
            <div>
              <p className="text-xl text-white/50 text-center">-: StAGE 2 :-</p>
              <h2 className="text-[20px] text-white font-bold text-center">
                Negotiation
              </h2>
            </div>
          </div>
          <FaArrowAltCircleRight className="text-[34px] text-[#B5B1B1] md:block hidden" />
          <div className="md:w-[30%] h-[110px] dispute_shape bg-gay-50 flex items-center justify-center">
            <div>
              <p className="text-xl text-white/50 text-center">-: StAGE 3 :-</p>
              <h2 className="text-[20px] text-white font-bold text-center">
                ARBITRATION
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-10 border border-black/10 rounded-xl p-5">
          <h2 className="text-black font-semibold text-lg">
            Stage 1 - Identify the issue
          </h2>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2">
              <BsPatchCheckFill className="text-gay-400 text-xl" />
              <p className="text-gay-400">
                <span className="font-semibold">
                  Review Transaction Details:
                </span>{" "}
                Check the transaction or service in question for any
                discrepancies or issues.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BsPatchCheckFill className="text-gay-400 text-xl" />
              <p className="text-gay-400">
                <span className="font-semibold">Gather Evidence:</span>Collect
                relevant documents, receipts, screenshots, or any other evidence
                that supports your claim.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BsPatchCheckFill className="text-gay-400 text-xl" />
              <p className="text-gay-400">
                <span className="font-semibold">Describe the Problem: </span>{" "}
                Clearly outline the issue, including dates, amounts, and
                specific problems encountered.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BsPatchCheckFill className="text-gay-400 text-xl" />
              <p className="text-gay-400">
                <span className="font-semibold">Submit the Form:</span> Complete
                the "Raise Dispute" form with all the gathered information and
                submit it for review.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-4">
          <div>
            <label className="text-base font-medium text-black block">
              Enter your Dispute
            </label>
            <div className="relative">
              <input
                type="text"
                name="disputeType"
                onChange={heandlechange}
                placeholder="Give name to your class"
                className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 w-full h-[80px] rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full">
            <Listbox value={selectInstructor} onChange={setselectInstructor}>
              <Label className="text-base font-medium text-black block">
                Select Instructor to Dispute
              </Label>
              <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                  <span className="block truncate text-left">
                    {selectInstructor}
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
                  {getInstructors.map((Instructors, i) => (
                    <ListboxOption
                      key={i}
                      value={Instructors.name}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    >
                      <span
                        className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer"
                        onClick={() =>
                          setinstructorid(Instructors.instructorId)
                        }
                      >
                        {Instructors.name}
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
          <div className="w-full">
            <Listbox value={selectClass} onChange={setSelectClass}>
              <Label className="text-base font-medium text-black block">
                Select Class
              </Label>
              <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                  <span className="block truncate text-left">
                    {selectClass}
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
                  {getClass.map((getclass, i) => (
                    <ListboxOption
                      key={i}
                      value={getclass.className}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                    >
                      <span
                        className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer"
                        onClick={() =>
                          setDispute((prevDispute) => ({
                            ...prevDispute,
                            totalAmount: getclass.totalAmount,
                            classId: getclass.classId,
                            bookingId: getclass.bookingId,
                          }))
                        }
                      >
                        {getclass.className}
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label className="text-base font-medium text-black block">
              Please describe in detail about raising dispute
            </label>
            <div className="relative">
              <textarea
                type="text"
                name="description"
                onChange={heandlechange}
                placeholder="Give name to your class"
                className="bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg w-full min-h-[315px] rounded-xl p-7 pb-2"
              />
            </div>
          </div>
          <div>
            <label className="text-base font-medium text-black block">
              Please add evidence(screenshots, documents, receipts) that
              supports your claim.
            </label>
            <div className="h-[315px] rounded-xl bg-[#DAD8D0] flex items-center justify-center relative mt-1">
              <div className="flex items-center justify-center flex-col">
                <MdCloudUpload className="text-black/20 text-5xl" />
                <p className="text-black/50 text-[15px] font-medium text-center">
                  {Dispute.evidenceScreenShort.length <= 0
                    ? "Upload screenshots, documents, receipts"
                    : Dispute?.evidenceScreenShort?.map((filename) => (
                        <span>
                          {filename?.name},<br />
                        </span>
                      ))}
                </p>
              </div>
              <input
                type="file"
                name="evidenceScreenShort"
                multiple
                onChange={heandlechange}
                className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <OutlineBtn
            text={"Submit Dispute"}
            className={"bg-black text-white"}
            onClick={HeandleCreateDispute}
          />
        </div>
      </div>
      <Popup
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        Icons={<Confirm_Popup_Icon />}
        Headding={"Dispute Raised!"}
        BodyText={
          "Your dispute has been successfully submitted. Our team will review the details and contact you within 48 hours. Thank you for your patience and understanding."
        }
        BtnText={"Okay!"}
        Btnclass={"bg-black text-white max-w-[175px]"}
        onClick={() => navigate(Routing.StudentDispute)}
      />
    </>
  );
};

export default NewDispute;
