import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import { Routing } from "../../../shared/Routing";
import { useNavigate } from "react-router-dom";
import { Dispute_List } from "../../../services/Admin/Dispute/Dispute";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import { RaisedHand } from "../../../../assets/icon";

const DisputeRequests = () => {
  const [Disputes_List, setDisputes_List] = useState([]);
  const [Loading, setLoading] = useState(false);
  const Get_Dispute_list = async () => {
    setLoading(true);
    const result = await Dispute_List();
    if (result?.success === true) {
      setDisputes_List(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      // if (result?.message === "Blocked students not found") {
      //   toast.warning("There are no any stiudent Blocked")
      // }
      // else{
      // toast.error(result?.message);
      // }
    }
  };
  useEffect(() => {
    Get_Dispute_list();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between">
        <AdminHeadding Headding={"All Dispute Requests"} />
        <div className="flex items-center gap-2 flex-wrap">
          {/* <select
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
          </select> */}
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
              {Disputes_List?.length <= 0 && (
                <tr>
                  <td colSpan={7}>
                    <div className="h-80 border border-gay-350 border-t-0 flex items-center justify-center">
                      <div className="flex items-center justify-center flex-col">
                        <RaisedHand />
                        <h2 className="text-2xl font-semibold mt-5">
                          No Active Disputes!
                        </h2>
                        <p className="text-gay-300 text-base">
                          No disputes to show! your raised disputes will be
                          shown here.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {Disputes_List.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                    {person.disputeId}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.raisedBy}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.against}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.amount}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.raisedDate}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 font-semibold`}>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          person.status === "active" ? "bg-green" : "bg-red-200"
                        }`}
                      ></div>
                      {person.status.toUpperCase()}
                    </div>
                  </td>
                  <td
                    className="whitespace-nowrap px-3 pr-6 py-4 text-red-200 underline font-medium w-[200px] cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/admin/Finance/disputedetails/${person.disputeId}`
                      )
                    }
                  >
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
