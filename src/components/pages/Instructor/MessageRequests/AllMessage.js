import React, { useState } from "react";
import OutlineBtn from "../../common/OutlineBtn";
import All_Message from "./All_Message";
import MessageRequestAccept from "./MessageRequestAccept";
import MessageRequestDeclined from "./MessageRequestDeclined";
import Tabs from "../index";

const AllMessage = () => {

  const [calssType, setcalssType] = useState("All");
  

  return (
    <>
      <Tabs>
      <div className="mt-11 px-3 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-3xl font-semibold">
            Message Requests
          </h1>
        </div>
        <div className="md:flex grid sm:grid-cols-2 grid-cols-1 items-center mt-6 gap-2">
          <OutlineBtn
            text={"All"}
            className={`${
              calssType === "All" ? "bg-gay-300 text-white font-semibold" : null
            } h-[45px] md:w-[125px] text-[15px] `}
            onClick={() => setcalssType("All")}
          />
          <OutlineBtn
            text={"Pending"}
            className={`${
              calssType === "Pending"
                ? "bg-gay-300 text-white font-semibold"
                : null
            } h-[45px] md:w-[125px] text-[15px] `}
            onClick={() => setcalssType("Pending")}
          />
          <OutlineBtn
            text={"Accepted"}
            className={`${
              calssType === "Accepted"
                ? "bg-gay-300 text-white font-semibold"
                : null
            } h-[45px] md:w-[125px] text-[15px] `}
            onClick={() => setcalssType("Accepted")}
          />
          <OutlineBtn
            text={"Declined"}
            className={`${
              calssType === "Declined"
                ? "bg-gay-300 text-white font-semibold"
                : null
            } h-[45px] md:w-[125px] text-[15px] `}
            onClick={() => setcalssType("Declined")}
          />
        </div>
      </div>
      <div className="mt-6 w-full overflow-x-auto">
        {calssType === "All" ? (
          <All_Message />
        ) : calssType === "Pending" ? (
          <All_Message />
        ) : calssType === "Accepted" ? (
          <MessageRequestAccept />
        ) : calssType === "Declined" ? (
          <MessageRequestDeclined />
        ) : null}
      </div>
      </Tabs>
    </>
  );
};

export default AllMessage;
