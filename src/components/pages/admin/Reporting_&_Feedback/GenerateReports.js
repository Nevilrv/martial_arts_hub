import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";

const GenerateReports = () => {
  const [InstructorsList, setInstructorsList] = useState([
    {
      No: "1",
      InstructorName: "Emily Roberts",
      ClassName: "Brazilian Jiu Jitsu",
      ClassDate: "05/07/2024",
      StudentName: "Keyn Mojho",
      Amount: "$4.99",
      Status: "Active",
    },
    {
      No: "2",
      InstructorName: "Emily Roberts",
      ClassName: "Brazilian Jiu Jitsu",
      ClassDate: "05/07/2024",
      StudentName: "Keyn Mojho",
      Amount: "$4.99",
      Status: "Session Ended",
    },
  ]);
  return (
    <>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-10 gap-3">
        <div className="w-full bg-primary p-7 rounded-xl">
            <p className="text-gay-300 text-base font-medium">Total Sessions</p>
            <h2 className="text-Dark_black font-semibold text-[32px]">125</h2>
        </div>
        <div className="w-full bg-primary p-7 rounded-xl">
            <p className="text-gay-300 text-base font-medium">Total Instructors</p>
            <h2 className="text-Dark_black font-semibold text-[32px]">25</h2>
        </div>
        <div className="w-full bg-primary p-7 rounded-xl">
            <p className="text-gay-300 text-base font-medium">Total Students</p>
            <h2 className="text-Dark_black font-semibold text-[32px]">450</h2>
        </div>
        <div className="w-full bg-primary p-7 rounded-xl">
            <p className="text-gay-300 text-base font-medium">Total Transaction Amount</p>
            <h2 className="text-Dark_black font-semibold text-[32px]">$589.99</h2>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <AdminHeadding Headding={"Reports"} />
        <div className="flex items-center gap-2 flex-wrap">
          <select
            id="Monthly"
            name="Monthly"
            defaultValue="Monthly"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Monthly</option>
            <option>Jan</option>
            <option>feb</option>
          </select>
          <select
            id="Amount"
            name="Amount"
            defaultValue="Amount"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Amount</option>
            <option>$4.99</option>
            <option>$5.99</option>
            <option>$7.99</option>
          </select>
          <select
            id="Active Sessions"
            name="Active Sessions"
            defaultValue="Active Sessions"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Active Sessions</option>
            <option>Session Ended</option>
            <option>Closed</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <div className="mt-5 w-full overflow-x-auto">
          <table className="min-w-[990px] w-full">
            <thead className="bg-gay-800">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  No.
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Instructor Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Class Name
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
                  Student Name
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
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C6C6C6] bg-primary">
              {InstructorsList.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                    #{person.No}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.InstructorName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.ClassName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.ClassDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.StudentName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.Amount}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 font-semibold`}>
                    <div
                      className={`flex items-center gap-2 ${
                        person.Status === "Active"
                          ? "text-green"
                          : "text-red-200"
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full ${
                          person.Status === "Active"
                            ? "bg-green"
                            : "bg-red-200 text-red-200"
                        }`}
                      ></div>
                      {person.Status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GenerateReports;
