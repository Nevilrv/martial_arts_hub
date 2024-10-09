import React, { useState } from "react";
import Tabs from "../Tabs";
import ActiveDisput from "./ActiveDisput"
import OutlineBtn from "../../common/OutlineBtn";
import ClosedDisput from "./ClosedDisput";

const RaiseDispute = () => {
  const [calssType, setcalssType] = useState("Active Disputes");

  return (
    <>
      <Tabs>
        <div className="mt-11 px-3 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-black text-3xl font-semibold">Disputes</h1>
          </div>
          <div className="flex items-center mt-6 gap-2">
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
              <ActiveDisput />
            ) : calssType === "Closed Disputes" ? (
              <ClosedDisput />
            ) : null}
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default RaiseDispute;
