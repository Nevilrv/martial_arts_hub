import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
import Instructor2 from "../../../../assets/images/Instructor-1.png";
import OutlineBtn from "../../common/OutlineBtn";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa";

const ReleaseFunds = () => {
  const [InstructorsList, setInstructorsList] = useState([
    {
      image: Instructor1,
      InstructorName: "Keyn Mojho",
      InstructorID: "#23352",
      ClassDate: "12/07/2024",
      Amount: "$4.99",
      Released: "No",
    },
    {
      image: Instructor2,
      InstructorName: "Kiya John",
      InstructorID: "#23352",
      ClassDate: "12/07/2024",
      Amount: "$4.99",
      Released: "Yes",
    },
  ]);
  const [isOpen, SetisOpen] = useState(false);
  const [Payments, setPayments] = useState("Student");

  return (
    <>
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"Release Funds"} />
        <div className="flex items-center gap-2 flex-wrap">
          <select
            id="ID"
            name="ID"
            defaultValue="ID"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>ID</option>
            <option>#23352</option>
            <option>#23352</option>
          </select>
          <select
            id="Class Date"
            name="Class Date"
            defaultValue="Class Date"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Class Date</option>
            <option>06/06/2024</option>
            <option>12/07/2024</option>
            <option>05/07/2024</option>
          </select>
          <select
            id="All"
            name="All"
            defaultValue="All"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>All</option>
            <option>Release</option>
            <option>Release</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <div className="mt-5 w-full overflow-x-auto">
          <table className="min-w-[990px] w-full">
            <thead className="bg-gay-800">
              <tr>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
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
                  Class Date
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
                  Released?
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C6C6C6] bg-primary">
              {InstructorsList.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    <img
                      src={person.image}
                      alt=""
                      className="w-[45px] h-[45px] rounded-full"
                      srcset=""
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                    {person.InstructorName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.InstructorID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.ClassDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.Amount}
                  </td>
                  <td
                    className={`whitespace-nowrap px-3 py-4 font-semibold ${
                      person.Released === "No" ? "text-red-200" : "text-green"
                    }`}
                  >
                    {person.Released}
                  </td>
                  <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                    <div className="flex items-center gap-2 justify-end">
                      <OutlineBtn
                        text={"View Details"}
                        className={"text-black h-[45px]"}
                        onClick={()=>SetisOpen(true)}
                      />
                      <OutlineBtn
                        text={"Release"}
                        className={"text-white bg-red-200 border-none h-[45px]"}
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
                <div className="items-center flex-col justify-center lg:w-auto w-full row-span-2 lg:hidden flex md:col-span-2">
                    <img
                      src={Instructor1}
                      className="w-[145px] h-[145px] rounded-full"
                      alt=""
                    />
                    <h2 className="text-xl text-center font-semibold">
                      Marry Jhon
                    </h2>
                    <p className="text-center text-black/50">(Student)</p>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Instructor’s Name
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Marry Jhon
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Instructor ID</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      #23352
                    </div>
                  </div>
                  <div className="items-center flex-col justify-center lg:w-auto w-full row-span-2 lg:flex hidden">
                    <img
                      src={Instructor1}
                      className="w-[145px] h-[145px] rounded-full"
                      alt=""
                    />
                    <h2 className="text-xl text-center font-semibold">
                      Marry Jhon
                    </h2>
                    <p className="text-center text-black/50">(Student)</p>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Class Date</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      12/07/2024
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Student Name</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Keyn Mojho
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Class Name</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Brazilian Jiu Jitsu
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Amount</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      $4.99
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Amount Received Date
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      02/07/2024
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Received any Dispute?
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      No
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Dispute Resolved?
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      -
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Amount Released?</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 md:w-[280px] w-full h-[55px] mt-1 rounded-lg text-red-200 text-lg font-medium">
                      No
                    </div>
                  </div>
                </div>
                <div className="mt-11 flex justify-end">
                  <OutlineBtn className={"text-white bg-red-200 border-none"} text={"Release Amount"} />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ReleaseFunds;
