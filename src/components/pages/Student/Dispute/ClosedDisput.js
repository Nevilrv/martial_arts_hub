import React from "react";
import { RaisedHand } from "../../../../assets/icon";
import OutlineBtn from "../../common/OutlineBtn";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";

const ClosedDisput = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table class="table-fixed min-w-[1305px] w-full">
          <thead className="h-12">
            <tr>
              <th className="text-gay-650 bg-gay-700 text-left pl-6 rounded-tl-lg 2xl:w-[500px] xl:w-[400px]">
                Dispute ID
              </th>
              <th className="text-gay-650 bg-gay-700 text-left pl-6">
                Class Name
              </th>
              <th className="text-gay-650 bg-gay-700 text-left pl-6">
                Instructor’s Name
              </th>
              <th className="text-gay-650 bg-gay-700 text-left pl-6">
                Dispute Amount
              </th>
              <th className="text-gay-650 bg-gay-700 text-left pl-6">Status</th>
              <th className="text-gay-650 bg-gay-700 text-left pl-6">
                Date Closed
              </th>
              <th className="text-gay-650 bg-gay-700 text-left pl-6 rounded-tr-lg">

              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length <= 0 && (
              <tr>
                <td colSpan={7}>
                  <div className="h-80 border border-gay-350 border-t-0 flex items-center justify-center">
                    <div className="flex items-center justify-center flex-col">
                      <RaisedHand />

                      <h2 className="text-2xl font-semibold mt-5">
                        No Active Disputes!
                      </h2>
                      <p className="text-gay-300 text-base">
                        No disputes to show! your raised disputes will be shown
                        here.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            )}
            {data?.map((closedispute) => (
              <tr className="h-14 border border-gay-350 border-t-0">
                <td className="text-lg text-black font-medium text-left pl-6">
                  #{closedispute.disputeId}
                </td>
                <td className="text-lg text-black font-medium text-left pl-6">
                  {closedispute.className}
                </td>
                <td className="text-lg text-black font-medium text-left pl-6">
                  {closedispute.instructorName}
                </td>
                <td className="text-lg text-black font-medium text-left pl-6">
                  £{closedispute.disputeAmount}
                </td>
                <td className="text-lg text-black font-medium text-left pl-6">
                  £{closedispute.result} Received
                </td>
                <td className="text-lg text-black font-medium text-left pl-6">
                  {closedispute.closed}
                </td>
                <td className="text-lg text-black font-medium text-left pl-6">
                  <span className="text-red-200 font-medium text-[18px] cursor-pointer" onClick={() => navigate(`/student/arbitration/${closedispute.disputeId}`)}>View Details</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-20 flex justify-end">
        <OutlineBtn
          text={"Create New Dispute"}
          className={"bg-black text-white"}
          onClick={() => navigate(Routing.StudentNewDispute)}
        />
      </div>
    </>
  );
};

export default ClosedDisput;
