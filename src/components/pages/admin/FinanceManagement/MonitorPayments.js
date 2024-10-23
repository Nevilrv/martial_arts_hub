import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";
import Instructor1 from "../../../../assets/images/Instructor-4.png";
import Instructor2 from "../../../../assets/images/Instructor-1.png";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa";

const MonitorPayments = () => {
  const [InstructorsList, setInstructorsList] = useState([
    {
      image: Instructor1,
      name: "Keyn Mojho",
      StudentID: "#23352",
      PaymentDate: "12/07/2024",
      ClassDate: "25/07/2024",
      PaidAmount: "$4.99",
      Released: "Pending",
    },
    {
      image: Instructor2,
      name: "Marry Jhon",
      StudentID: "#35243",
      PaymentDate: "12/07/2024",
      ClassDate: "25/07/2024",
      PaidAmount: "$4.99",
      Released: "Released",
    },
  ]);
  const [isOpen, SetisOpen] = useState(false);
  const [Payments, setPayments] = useState("Student");
  return (
    <>
      <AdminHeadding Headding={"Monitor Payments"} />
      <div className="flex items-center gap-3 mt-4 flex-wrap">
        <OutlineBtn
          text={"Student’s Payments"}
          className={`${
            Payments === "Student" && "bg-black text-white"
          } sm:w-auto w-full`}
          onClick={() => setPayments("Student")}
        />
        <OutlineBtn
          text={"Instructor’s Payments"}
          className={`${
            Payments === "Instructor" && "bg-black text-white"
          } sm:w-auto w-full`}
          onClick={() => setPayments("Instructor")}
        />
      </div>

      <div className="mt-5 w-full overflow-x-auto">
        {Payments === "Student" ? (
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
                  Student’s Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Student ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Payment Date
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
                  Paid Amount
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
                    {person.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.StudentID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.PaymentDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.ClassDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.PaidAmount}
                  </td>
                  <td
                    className={`whitespace-nowrap px-3 py-4 font-semibold ${
                      person.Released === "Pending"
                        ? "text-red-200"
                        : "text-green"
                    }`}
                  >
                    {person.Released}
                  </td>
                  <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                    <div className="flex items-center gap-2 justify-end">
                      <OutlineBtn
                        text={"View"}
                        className={"text-black h-[45px]"}
                        onClick={()=>SetisOpen(true)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
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
                  Received?
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Received Date
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
                    {person.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.StudentID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.PaymentDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.ClassDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.PaidAmount}
                  </td>
                  <td
                    className={`whitespace-nowrap px-3 py-4 font-semibold ${
                      person.Released === "Pending"
                        ? "text-red-200"
                        : "text-green"
                    }`}
                  >
                    {person.Released}
                  </td>
                  <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                    <div className="flex items-center gap-2 justify-end">
                      <OutlineBtn
                        text={"View"}
                        className={"text-black h-[45px]"}
                        onClick={()=>SetisOpen(true)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Dialog className="relative z-[9999]" open={isOpen} onClose={SetisOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 w-full">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-7 py-10 pb-[88px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-[95%] lg:max-w-[900px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex items-center gap-5">
                <FaArrowLeft className="text-2xl" />
                <h2 className="text-Dark_black font-bold text-2xl">
                  Student’s Payment Details
                </h2>
              </div>
              <div className="flex items-start mt-14 justify-between flex-wrap lg:flex-row flex-col-reverse gap-y-5">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:w-auto w-full">
                  <div className="w-full">
                    <p className="text-gay-300">Student’s Name</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 sm:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      Marry Jhon
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300">Student’s ID</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 sm:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      #23352
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300">Payment Date</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 sm:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      12/07/2024
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300">Class Date</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 sm:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      25/07/2024
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300">Paid Amount</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 sm:w-[280px] w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      $4.99
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300">Released?</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-[280px] h-[55px] mt-1 rounded-lg text-green text-lg font-medium">
                      Yes, Released
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col justify-center lg:w-auto w-full">
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
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MonitorPayments;
