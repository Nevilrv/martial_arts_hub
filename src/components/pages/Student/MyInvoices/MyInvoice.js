import React from "react";
import Tabs from "../Tabs";
import OutlineBtn from "../../common/OutlineBtn";
import Wrestling from "../../../../assets/images/Wrestling.png";

const MyInvoice = () => {
  return (
    <>
      <Tabs>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[620px] px-3 lg:px-8 h-[143px] flex items-center justify-between border-b border-gay-400">
            <div className="flex items-center">
              <div className="w-[125px] h-[85px] overflow-hidden rounded-lg">
                <img src={Wrestling} alt="Wrestling" />
              </div>
              <div className="ml-5">
                <div className="flex items-center cursor-pointer">
                  <h3 className="text-xl font-medium">Wrestling</h3>
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70 font-light mt-0.5">
                    <span className="font-medium">Class Date:</span> 26 Aug,
                    2024
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] text-black/70 font-light mt-0.5">
                    <span className="font-medium">Instructor Name:</span>
                    Mr. Smith Martin
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
              />
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default MyInvoice;
