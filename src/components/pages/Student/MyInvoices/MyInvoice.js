import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import OutlineBtn from "../../common/OutlineBtn";
import Wrestling from "../../../../assets/images/Wrestling.png";
import { MyInvoices } from "../../../../assets/icon";
import {
  GetInvoicedetai,
  GetInvoiceList,
} from "../../../services/student/MyInvoices/MyInvoices";
import Spinner from "../../../layouts/Spinner";
import dayjs from "dayjs";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoHeartSharp } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { usePDF } from "react-to-pdf";
import { Resolution, Margin } from "react-to-pdf";

const MyInvoice = () => {
  const studentId = JSON.parse(localStorage.getItem("_id"));
  const [invoiceList, setInvoiceList] = useState([]);
  const [InvoiceDetails, setInvoiceDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [isOpen, SetisOpen] = useState(false);
  let PaymentId = null;

  const GetInvoice = async () => {
    setLoading(true);
    const result = await GetInvoiceList(studentId);
    if (result?.success === true) {
      setLoading(false);
      setInvoiceList(result?.data);
    } else {
      setLoading(false);
    }
  };

  const GetInvoiceDetails = async () => {
    setLoading(true);
    const result = await GetInvoicedetai(PaymentId);
    if (result?.success === true) {
      setLoading(false);
      setInvoiceDetails(result?.data)
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetInvoice();
  }, []);

  const heandleview = (studentPaymentId) => {
    PaymentId = studentPaymentId;
    GetInvoiceDetails(PaymentId);
    SetisOpen(true);
  };

  // pdf

  const { toPDF, targetRef } = usePDF({
    filename: "martial arts hub Invoice.pdf",
    page: {
      margin: Margin?.SMALL,
      format: "A5",
    },
  });

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        {invoiceList?.length <= 0 && (
          <div className="h-[calc(100vh-195px)] flex items-center justify-center">
            <div className="flex flex-col items-center">
              <MyInvoices />
              <h2 className="text-[26px] font-medium text-Dark_black mt-8">
                Your Invoice list is empty!
              </h2>
              <p className="text-gay-300 text-lg max-w-[490px] mx-auto text-center mt-2.5">
                You haven't bought any classes yet! when you join any course
                it’s invoice list will be shown here.
              </p>
            </div>
          </div>
        )}
        <div className="w-full overflow-x-auto">
          {invoiceList?.map((invoice) => (
            <div className="min-w-[620px] px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400">
              <div className="flex items-center">
                <div className="w-[125px] h-[85px] overflow-hidden rounded-lg">
                  <img src={Wrestling} alt="Wrestling" />
                </div>
                <div className="ml-5">
                  <div className="flex items-center cursor-pointer">
                    <h3 className="text-xl font-medium">
                      {invoice?.className}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Class Date:</span>{" "}
                      {dayjs(invoice?.createdAt)?.format("DD MMM, YYYY")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[13px] text-black/70 font-light mt-0.5">
                      <span className="font-medium">Instructor Name: </span>
                      {invoice?.instructor?.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <OutlineBtn
                  text={"View Invoice"}
                  className={
                    "bg-transparent border-black text-black font-semibold"
                  }
                  onClick={() => heandleview(invoice.studentPaymentId)}
                />
              </div>
            </div>
          ))}
        </div>
      </Tabs>

      <Dialog className="relative z-[9999]" open={isOpen} onClose={SetisOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              ref={targetRef}
              className="relative transform overflow-hidden bg-primary text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[700px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 pt-12"
            >
              <div className="md:px-11 px-4">
                <div className="flex items-center justify-between border-b border-gay-300/60 pb-3.5">
                  <h2 className="text-black font-bold text-lg">
                    martial arts hub.
                  </h2>
                  <div>
                    <p className="text-black/50 text-xs text-right">
                      Date Issued : {InvoiceDetails.DateIssued}
                    </p>
                    <p className="text-black/50 text-xs">Invoice No : {InvoiceDetails.invoiceNo}</p>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-black/50 text-[15px] font-medium">
                      Instructor Details
                    </h2>
                    <h2 className="text-black/50 text-[15px] font-medium">
                      Student Details
                    </h2>
                  </div>
                  <div className="mt-1.5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-black text-[15px]">{InvoiceDetails.instructorName}</h2>
                      <h2 className="text-black text-[15px]">{InvoiceDetails.studentName}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-black text-[15px]">
                      {InvoiceDetails.className}
                      </h2>
                      <h2 className="text-black text-[15px]">{InvoiceDetails.paymentDate}</h2>
                    </div>
                  </div>
                  <div className="mt-[120px] mb-[83px]">
                    <div className="flex items-center justify-between border-b border-gay-300/50 pb-2.5">
                      <h2 className="text-black/50 text-[14px] font-medium w-[30%]">
                        Class Name
                      </h2>
                      <h2 className="text-black/50 text-[14px] font-medium">
                        Price
                      </h2>
                      <h2 className="text-black/50 text-[14px] font-medium">
                        Hour
                      </h2>
                      <h2 className="text-black/50 text-[14px] font-medium">
                        Subtotal
                      </h2>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center justify-between pb-2.5">
                        <h2 className="text-black text-[15px] font-medium w-[30%]">
                        {InvoiceDetails.className}
                        </h2>
                        <h2 className="text-black text-[15px] font-medium">
                          ${InvoiceDetails.price}
                        </h2>
                        <h2 className="text-black text-[15px] font-medium">
                        {InvoiceDetails.hour}
                        </h2>
                        <h2 className="text-red-200 text-[15px] font-medium">
                          ${InvoiceDetails.subtotal}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[82px] bg-[#CCC9C2] md:px-11 px-4 py-11">
                <div className="flex items-center justify-between border-b border-gay-300/50 pb-2.5">
                  <h2 className="text-black/50 text-[14px] font-medium">
                    Bank Info
                  </h2>
                  <h2 className="text-black/50 text-[14px] font-medium">
                    Payment Date
                  </h2>
                  <h2 className="text-black/50 text-[14px] font-medium">
                    Total
                  </h2>
                </div>
                <div className="flex items-center justify-between mt-6 border-b border-gay-300/50 pb-8">
                  <div>
                    <h2 className="text-black text-[14px] ">
                      Paid via: {InvoiceDetails.paidVia}
                    </h2>
                    <h2 className="text-black text-[14px] ">ID: ********{InvoiceDetails?.paymentId?.slice(-3)}</h2>
                  </div>
                  <h2 className="text-black text-[18px] font-medium">
                  {InvoiceDetails?.paymentDate}
                  </h2>
                  <h2 className="text-red-200 text-[18px] font-semibold">
                    ${InvoiceDetails?.subtotal}
                  </h2>
                </div>
                <div className="flex items-center justify-between mt-7 ">
                  <div className="flex items-center text-Dark_black font-medium gap-1">
                    <IoHeartSharp className="text-red-200 text-xl" />
                    Thank You!
                  </div>
                  <button
                    onClick={() => toPDF()}
                    className="text-[#CBC9C2] px-3 text-xs h-[35px] bg-gay-300 rounded-full flex items-center justify-center gap-1.5"
                  >
                    <MdDownloadForOffline className="text-[#CBC9C2] text-base" />{" "}
                    Download Invoice
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MyInvoice;
