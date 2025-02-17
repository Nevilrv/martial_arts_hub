import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import { Reports } from "../../../services/Admin/Reporting_&_Feedback/Reporting_&_Feedback";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";

const GenerateReports = () => {
  const [Repot, setRepot] = useState({});
  const [Loading, setLoading] = useState(false);
  const currentMonthIndex = new Date().getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex + 1);
  const [amountFilter, setAmountFilter] = useState("Lower to high");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const Get_Report = async () => {
    setLoading(true);
    const result = await Reports(selectedMonth);
    if (result?.success === true) {
      setRepot(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Report();
  }, [selectedMonth]);
  // amount
  useEffect(() => {
    if (Repot?.formatedReport) {
      const sortedData = [...Repot.formatedReport].sort((a, b) => {
        if (amountFilter === "Lower to high") {
          return a.Amount - b.Amount;
        } else if (amountFilter === "high to Lower") {
          return b.Amount - a.Amount;
        }
        return 0;
      });
      setRepot({ ...Repot, formatedReport: sortedData });
    }
  }, [amountFilter]);

  const handleAmountChange = (event) => {
    setAmountFilter(event.target.value);
  };

  // months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // status
  const handleChangeStatus = (event) => {
    setSelectedStatus(event.target.value);
  };
  const filteredReport = Repot?.formatedReport?.filter((report) => {
    if (selectedStatus === "All") {
      return report.status;
    }
    if (selectedStatus === "Active") {
      return report.status === "Active";
    }
    if (selectedStatus === "Session Ended") {
      return report.status === "Session Ended";
    }
  });

  return (
    <>
      {Loading && <Spinner />}
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-10 gap-3">
        <div className="w-full bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base font-medium">Total Sessions</p>
          <h2 className="text-Dark_black font-semibold text-[32px]">
            {Repot?.total_sessions}
          </h2>
        </div>
        <div className="w-full bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base font-medium">
            Total Instructors
          </p>
          <h2 className="text-Dark_black font-semibold text-[32px]">
            {Repot?.total_instructor}
          </h2>
        </div>
        <div className="w-full bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base font-medium">Total Students</p>
          <h2 className="text-Dark_black font-semibold text-[32px]">
            {Repot?.total_student}
          </h2>
        </div>
        <div className="w-full bg-primary p-7 rounded-xl">
          <p className="text-gay-300 text-base font-medium">
            Total Transaction Amount
          </p>
          <h2 className="text-Dark_black font-semibold text-[32px]">
            ${Repot?.total_transaction}
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <AdminHeadding Headding={"Reports"} />
        <div className="flex items-center gap-2 flex-wrap">
          <select
            id="Monthly"
            name="Monthly"
            value={selectedMonth}
            onChange={handleChange}
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            {months.map((monthList, index) => (
              <option key={index} value={index + 1}>
                {monthList}
              </option>
            ))}
          </select>
          <select
            id="Amount"
            name="Amount"
            defaultValue="Amount"
            value={amountFilter}
            onChange={handleAmountChange}
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Lower to high</option>
            <option>high to Lower</option>
          </select>
          <select
            id="Active Sessions"
            name="Active Sessions"
            defaultValue="Active Sessions"
            onChange={handleChangeStatus}
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option value={"All"}>All</option>
            <option value={"Active"}>Active</option>
            <option value={"Session Ended"}>Session Ended</option>
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
              {filteredReport?.map((repot, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                    #{i + 1}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {repot.instructorName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {repot.className}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {repot.classDate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {repot.studentName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {repot.Amount}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 font-semibold`}>
                    <div
                      className={`flex items-center gap-2 ${
                        repot.status === "Active"
                          ? "text-green"
                          : "text-red-200"
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full ${
                          repot.status === "Active"
                            ? "bg-green"
                            : "bg-red-200 text-red-200"
                        }`}
                      ></div>
                      {repot.status}
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
