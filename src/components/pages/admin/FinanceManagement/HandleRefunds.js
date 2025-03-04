import React, { useEffect, useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import OutlineBtn from "../../common/OutlineBtn";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "../../../layouts/Spinner";
import {
  Pay_out_Confirm,
  Pay_out_Refund,
  Payment_Refund_details,
  Payment_Refund_list,
} from "../../../services/Admin/FinanceSection/Finance";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import { toast } from "react-toastify";

const HandleRefunds = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [Refund, SetRefund] = useState(false);

  const [Refund_list, SetRefund_list] = useState([]);
  const [Refund_details, SetRefund_details] = useState({});
  const [Refund_data, SetRefund_data] = useState({});
  const [Loading, setLoading] = useState(false);
  const [InstructorId, setInstructorId,] = useState("");
  const [Refund_Reason, setRefund_Reason] = useState("");
  const [Refund_amount, setRefund_amount] = useState("");
  const navigate = useNavigate();

  const Get_Payment_Refund_list = async () => {
    setLoading(true);
    const result = await Payment_Refund_list();
    if (result?.success === true) {
      SetRefund_list(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };

  const Get_Payment_Refund_details = async (person) => {
    setLoading(true);
    setInstructorId(person.instructorId)
    const result = await Payment_Refund_details(
      person.studentId,
      person.instructorId,
      person.bookingId,
      person.classId
    );
    if (result?.success === true) {
      SetRefund_details(result.data);
      SetisOpen(true);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };

  const Refund_Pay_out = async () => {
    setLoading(true);
    const body = {
      studentPaymentId: Refund_details.studentPaymentId,
      disputeId: Refund_details.disputeId,
      RefundReason: Refund_Reason || Refund_details.Reason,
    };
    const result = await Pay_out_Refund(body);
    if (result?.success === true) {
      SetRefund(true);
      SetRefund_data(result.data);
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };

  const Refund_Confirm = async () => {
    setLoading(true);
    const body = {
      studentPaymentId: Refund_details.studentPaymentId,
      disputeId: Refund_details.disputeId,
      amount: Refund_amount,
      instructorId: InstructorId,
    };
    const result = await Pay_out_Confirm(body);
    if (result?.success === true) {
      SetRefund(false);
      SetisOpen(false);
      Get_Payment_Refund_list();
      setLoading(false);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        navigate(Routing.AdminLogin);
        setLoading(false);
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    Get_Payment_Refund_list();
  }, []);

  return (
    <>
      {Loading && <Spinner />}
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
              {Refund_list.map((person) => (
                <tr key={person.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                    {person.instructorName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.instructorId?.slice(0, 15)}...
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.studentName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    {person.studentId?.slice(0, 15)}...
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                    £ {person.Amount}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 font-semibold`}>
                    {person.Reason?.slice(0, 15)}...
                  </td>
                  <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                    <div className="flex items-center gap-2 justify-end">
                      <OutlineBtn
                        text={"View"}
                        className={
                          "text-black h-[35px] w-[65px] hover:bg-black hover:text-white"
                        }
                        onClick={() => Get_Payment_Refund_details(person)}
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
                      {Refund_details.instructorName}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Instructor ID</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      # {Refund_details?.instructorId?.slice(0, 17)}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Class Name</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      {Refund_details.className?.slice(0, 17)}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Student Name</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      {Refund_details.studentName}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Student ID</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      #{Refund_details?.studentId?.slice(0, 17)}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Class Date</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      {Refund_details.classDate}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Amount</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      £{Refund_details.Amount}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Any Dispute?</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      {Refund_details.AnyDispute}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Dispute Reason</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      {Refund_details?.Reason?.slice(0, 20)}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Dispute Resolved?
                    </p>
                    <div
                      className={`bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium`}
                    >
                      {Refund_details.resolved}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Refund Completed?
                    </p>
                    <div
                      className={`bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg ${Refund_details.refundComplete === "No"
                        ? "text-red-200"
                        : "text-green"
                        }  text-lg font-medium`}
                    >
                      {Refund_details.refundComplete}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">
                      Refund Complete Date
                    </p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-lg font-medium">
                      {Refund_details.refundCompleteDate === "Invalid date"
                        ? "-"
                        : Refund_details.refundCompleteDate}
                    </div>
                  </div>
                  <div className="w-full lg:col-span-3 md:col-span-2">
                    <p className="text-gay-300 text-[13px]">Refund Reason</p>
                    <textarea
                      disabled={Refund_details.refundComplete !== "No"}
                      placeholder="Refund reason"
                      value={Refund_details.Reason}
                      onChange={(e) => setRefund_Reason(e.target.value)}
                      className="bg-[#D8D6CF] px-5 py-4 w-full h-[95px] mt-1 rounded-lg text-lg font-medium"
                    ></textarea>
                  </div>
                </div>
                {Refund_details.refundComplete === "No" && (
                  <div className="mt-11 flex justify-end">
                    <OutlineBtn
                      className={"text-white bg-red-200 border-none w-[140px]"}
                      text={"Refund"}
                      onClick={() => Refund_Pay_out()}
                    />
                  </div>
                )}
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
                      {Refund_data.RefundFrom}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-gay-300 text-[13px]">Refund to</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[55px] mt-1 rounded-lg text-black text-lg font-medium">
                      #{Refund_data?.RefundTo?.slice(0, 17)}...
                    </div>
                  </div>
                  <div className="w-full lg:col-span-3 md:col-span-2">
                    <p className="text-gay-300 text-[13px]">Refund Reason</p>
                    <div className="bg-[#D8D6CF] px-5 py-4 w-full h-[95px] mt-1 rounded-lg text-lg font-medium">
                      {Refund_data.RefundReason}
                    </div>
                  </div>
                  <div className="w-full lg:col-span-3 md:col-span-2">
                    <p className="text-gay-300 text-[13px]">Amount to Refund</p>
                    <input
                      type="number"
                      onChange={(e) => setRefund_amount(e.target.value)}
                      className="bg-[#D8D6CF] px-5 py-4 w-full h-[95px] mt-1 rounded-lg text-lg font-medium focus:outline-none"
                      placeholder="Enter your amount that Refund to Student"
                    ></input>
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
                    onClick={() => Refund_Confirm()}
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
