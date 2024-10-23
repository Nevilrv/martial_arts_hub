import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";

const DisputeRequests = () => {
  const [InstructorsList, setInstructorsList] = useState([
    {
      DisputeID: "#2221",
      Raised_By: "Emily Roberts",
      Against: "Keyn Mojho",
      Amount: "$4.99",
      RaisedDate: "05/07/2024",
      Status: "Active",
    },
    {
        DisputeID: "#2221",
        Raised_By: "Emily Roberts",
        Against: "Keyn Mojho",
        Amount: "$4.99",
        RaisedDate: "05/07/2024",
        Status: "Closed",
      },
  ]);
  const [isOpen, SetisOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"All Dispute Requests"} />
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
            id="Status"
            name="Status"
            defaultValue="Status"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Status</option>
            <option>Active</option>
            <option>Closed</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <div className="mt-5 w-full overflow-x-auto">
          <table className="min-w-[990px] w-full">
            <thead className="bg-gay-800">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Dispute ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Dispute Raised by
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Dispute Against
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
                  Raised Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                >
                  Status
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
                    {person.DisputeID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.Raised_By}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.Against}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.Amount}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.RaisedDate}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 font-semibold`}>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          person.Status === "Active" ? "bg-green" : "bg-red-200"
                        }`}
                      ></div>
                      {person.Status}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 pr-6 py-4 text-red-200 underline font-medium w-[200px]">
                    View Details
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

export default DisputeRequests;
