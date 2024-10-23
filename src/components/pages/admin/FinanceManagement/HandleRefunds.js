import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
import Instructor2 from "../../../../assets/images/Instructor-1.png";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa";

const HandleRefunds = () => {
  const [InstructorsList, setInstructorsList] = useState([
    {
      InstructorName: "Keyn Mojho",
      InstructorID: "#23352",
      StudentName: "Keyn Mojho",
      StudentID: "#23358",
      Amount: "$4.99",
      Reason: "--",
    },
    {
      InstructorName: "Keyn Mojho",
      InstructorID: "#23352",
      StudentName: "Keyn Mojho",
      StudentID: "#23358",
      Amount: "$4.99",
      Reason: "--",
    },
    {
      InstructorName: "Keyn Mojho",
      InstructorID: "#23352",
      StudentName: "Keyn Mojho",
      StudentID: "#23358",
      Amount: "$4.99",
      Reason: "--",
    },
  ]);
  const [isOpen, SetisOpen] = useState(false);
  const [Refund, SetRefund] = useState(false);
  return (
    <>
      <AdminHeadding Headding={"Handle Refunds"} />
      <div className="mt-5">
        <div className="mt-5 w-full overflow-x-auto">
          <table className="min-w-[990px] w-full">
            <thead className="bg-gay-800">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Instructor’s Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Instructor ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Student’s Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Student’s ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Reason
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C6C6C6] bg-primary">
              {InstructorsList.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                    {person.InstructorName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.InstructorID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.StudentName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.StudentID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.Amount}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 font-semibold`}>
                    {person.Reason}
                  </td>
                  <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                    <div className="flex items-center gap-2 justify-end">
                      <OutlineBtn
                        text={"View"}
                        className={
                          "text-black h-[35px] w-[65px] hover:bg-black hover:text-white"
                        }
                        onClick={() => SetisOpen(true)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog className="relative z-[9999]" open={isOpen} onClose={SetisOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0 w-full">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-7 py-10 pb-[36px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-[95%] lg:max-w-[900px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex items-center gap-5">
                <FaArrowLeft className="text-2xl" />
                <h2 className="text-Dark_black font-bold text-2xl">Details</h2>
              </div>
              <div className="mt-14">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:w-auto w-full">
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Instructor’s Name
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Marry Jhon
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Instructor ID</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      #23352
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Class Name</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Brazilian Jiu Jitsu
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Student Name</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Keyn Mojho
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Student ID</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      #4321
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Class Date</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      12/07/2024
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Amount</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      $4.99
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Any Dispute?</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      No
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Dispute Reason</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      --
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Dispute Resolved?
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      -
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Refund Completed?
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-red-200 text-lg font-medium">
                      No
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Dispute Resolved?
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      -
                    </div>
                  </div>
                  <div className="w-full lg:col-span-3 md:col-span-2">
                    <p className="text-gay-300 text-[13px]">Refund Reason</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[95px] mt-1 rounded-lg text-lg font-medium">
                      Refund reason
                    </div>
                  </div>
                </div>
                <div className="mt-11 flex justify-end">
                  <OutlineBtn
                    className={"text-white bg-red-200 border-none w-[140px]"}
                    text={"Refund"}
                    onClick={() => SetRefund(true   )}
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Dialog className="relative z-[9999]" open={Refund} onClose={SetRefund}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0 w-full">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-7 py-10 pb-[36px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-[95%] lg:max-w-[900px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex items-center gap-5">
                <FaArrowLeft className="text-2xl" />
                <h2 className="text-Dark_black font-bold text-2xl">
                  Refund Process
                </h2>
              </div>
              <div className="mt-14">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:w-auto w-full">
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Refund from</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Marry Jhon
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Refund to</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      #23352
                    </div>
                  </div>
                  <div className="w-full lg:col-span-3 md:col-span-2">
                    <p className="text-gay-300 text-[13px]">Refund Reason</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[95px] mt-1 rounded-lg text-lg font-medium">
                      Refund reason
                    </div>
                  </div>
                  <div className="w-full lg:col-span-3 md:col-span-2">
                    <p className="text-gay-300 text-[13px]">Refund mode</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      Original Payment mode
                    </div>
                  </div>
                </div>
                <div className="mt-11 flex justify-end">
                  <OutlineBtn
                    className={"text-white bg-red-200 border-none w-[140px]"}
                    text={"Refund"}
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default HandleRefunds;
