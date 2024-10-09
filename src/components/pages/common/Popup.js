import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React from "react";
import OutlineBtn from "./OutlineBtn";

const Popup = ({
  isOpen,
  SetisOpen,
  Icons,
  onClick,
  BtnText2Click,
  BtnText,
  BtnText2,
  Headding,
  BodyText,
  Btnclass
}) => {
  return (
    <>
      <Dialog className="relative z-10" open={isOpen} onClose={SetisOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-[80px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[575px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div className="flex items-center justify-center">{Icons}</div>
                <h1 className="text-center mt-3 font-semibold text-3xl">
                  {Headding}
                </h1>
                <p className="max-w-[471px] mx-auto text-center text-black/50 mt-1">
                  {BodyText}
                </p>
                <div className="flex items-center gap-3 mt-14 justify-center">
                  <OutlineBtn
                    text={BtnText}
                    className={`border-black/30 w-[260px] font-medium text-xl ${Btnclass}`}
                    onClick={onClick}
                  />
                  {BtnText2 && (
                    <OutlineBtn
                      text={BtnText2}
                      className={
                        "bg-black text-white w-[260px] font-medium text-xl"
                      }
                      onClick={BtnText2Click}
                    />
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Popup;
