import React from "react";
import { RaisedHand } from "../../../../assets/icon";
import OutlineBtn from "../../common/OutlineBtn";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";

const ClosedDisput = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className="w-full overflow-x-auto">
      <table class="table-fixed min-w-[769px] w-full">
        <thead className="h-12">
          <tr>
            <th className="text-gay-650 bg-gay-700 text-left pl-6 rounded-tl-lg">
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
            <th className="text-gay-650 bg-gay-700 text-left pl-6 rounded-tr-lg">
            Date Closed
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>
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

          {/* <tr className="h-14 border border-gay-350 border-t-0">
            <td className="text-lg text-black font-medium text-left pl-6">#23352</td>
            <td className="text-lg text-black font-medium text-left pl-6">Brazilian Jiu Jitsu</td>
            <td className="text-lg text-black font-medium text-left pl-6">Keyn Mojho</td>
            <td className="text-lg text-black font-medium text-left pl-6">$4.99</td>
            <td className="text-lg text-black font-medium text-left pl-6">$0.00 Received</td>
            <td className="text-lg text-black font-medium text-left pl-6">June 15, 2024</td>
          </tr>
          <tr className="h-14 border border-gay-350 border-t-0">
            <td className="text-lg text-black font-medium text-left pl-6">#23352</td>
            <td className="text-lg text-black font-medium text-left pl-6">Brazilian Jiu Jitsu</td>
            <td className="text-lg text-black font-medium text-left pl-6">Keyn Mojho</td>
            <td className="text-lg text-black font-medium text-left pl-6">$4.99</td>
            <td className="text-lg text-black font-medium text-left pl-6">$0.00 Received</td>
            <td className="text-lg text-black font-medium text-left pl-6">June 15, 2024</td>
          </tr> */}
        </tbody>
      </table>
    </div>

      <div className="mt-20 flex justify-end">
        <OutlineBtn
          text={"Create New Dispute"}
          className={"bg-black text-white"}
          onClick={()=>navigate(Routing.StudentNewDispute)}
        />
      </div>
    </>
  );
};

export default ClosedDisput;
