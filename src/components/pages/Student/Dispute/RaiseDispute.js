import React, { useEffect, useState } from "react";
import Tabs from "../Tabs";
import ActiveDisput from "./ActiveDisput";
import OutlineBtn from "../../common/OutlineBtn";
import ClosedDisput from "./ClosedDisput";
import Spinner from "../../../layouts/Spinner";
import { GetDispute } from "../../../services/student/Dispute/Dispute";
import { toast } from "react-toastify";

const RaiseDispute = () => {
  const [calssType, setcalssType] = useState("Active Disputes");

  const [loading, setLoading] = useState(false);
  const [ActiveDisputdata, setActiveDisputdata] = useState([]);
  const [ClosedDisputdata, setClosedDisputdata] = useState([]);
  const studentId = JSON.parse(localStorage.getItem("_id"));

  const Getdata = async () => {
    setLoading(true);
    const result = await GetDispute(studentId);
    if (result?.success === true) {
      setLoading(false);
      setActiveDisputdata(result?.data?.Active);
      setClosedDisputdata(result?.data?.Close);
    } else {
      toast.error(result.mess);
      setLoading(false);
    }
  };
  useEffect(() => {
    Getdata();
  }, [calssType]);

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-black text-3xl font-semibold">Disputes</h1>
          </div>
          <div className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center mt-6 gap-2">
            <OutlineBtn
              text={"Active Disputes"}
              className={`${
                calssType === "Active Disputes"
                  ? "bg-gay-300 text-white font-semibold"
                  : null
              }`}
              onClick={() => setcalssType("Active Disputes")}
            />
            <OutlineBtn
              text={"Closed Disputes"}
              className={`${
                calssType === "Closed Disputes"
                  ? "bg-gay-300 text-white font-semibold"
                  : null
              }`}
              onClick={() => setcalssType("Closed Disputes")}
            />
          </div>
          <div className="mt-6">
            {calssType === "Active Disputes" ? (
              <ActiveDisput data={ActiveDisputdata} />
            ) : calssType === "Closed Disputes" ? (
              <ClosedDisput data={ClosedDisputdata} />
            ) : null}
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default RaiseDispute;
