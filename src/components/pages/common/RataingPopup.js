// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
// import React from "react";
// import OutlineBtn from "./OutlineBtn";
// import { FaStar } from "react-icons/fa";
// import { toast } from "react-toastify";
// import { RxCross2 } from "react-icons/rx";

// const RataingPopup = ({
//   isOpen,
//   SetisOpen,
//   Icons,
//   onClick,
//   BtnText,
//   Headding,
//   BodyText,
//   setRating,
//   rating,
//   setReviewMessage,
//   ReviewMessage,
//   HeandleSkipReview
// }) => {
//   return (
//     <>
//       <Dialog
//         className="relative z-[9999]"
//         open={isOpen}
//         onClose={() => {
//           toast.info("Please Enter Your Reiview First");
//         }}
//       >
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
//         />
//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <DialogPanel
//               transition
//               className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-[80px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[775px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
//             >
//               <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
//                 <button
//                   type="button"
//                   onClick={() => HeandleSkipReview()}
//                   className="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   <span className="sr-only">Close</span>
//                   <RxCross2 aria-hidden="true" className="size-6" />
//                 </button>
//               </div>

//               <div>
//                 <div className="flex items-center justify-center">{Icons}</div>
//                 <h1 className="text-center mt-3 font-semibold text-3xl">
//                   {Headding}
//                 </h1>
//                 <p className="max-w-[471px] mx-auto text-center text-black/50 mt-1">
//                   {BodyText}
//                 </p>
//                 <div className="flex items-center gap-1 justify-center mt-10">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <FaStar
//                       key={star}
//                       onClick={() => setRating(star)}
//                       className={`cursor-pointer text-[40px] ${
//                         rating >= star ? "text-yellow-100" : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <div className="mt-8">
//                   <textarea
//                     onChange={(e) => setReviewMessage(e.target.value)}
//                     value={ReviewMessage}
//                     className="h-[135px] px-6 py-5 w-full rounded-xl bg-[#DAD8D0] text-black/50 placeholder:text-black/50 focus:outline-none text-lg placeholder:text-lg"
//                     placeholder="Write Your message here*"
//                   />
//                 </div>
//                 <div className="flex sm:flex-row flex-col items-center gap-3 mt-14 justify-center">
//                   <OutlineBtn
//                     text={BtnText}
//                     className={`bg-black outline-none text-white w-full py-3 text-lg font-medium`}
//                     onClick={onClick}
//                   />
//                 </div>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default RataingPopup;

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React from "react";
import OutlineBtn from "./OutlineBtn";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

const RataingPopup = ({
  isOpen,
  SetisOpen,
  Icons,
  onClick,
  BtnText,
  Headding,
  BodyText,
  setRating,
  rating,
  setReviewMessage,
  ReviewMessage,
  HeandleSkipReview
}) => {
  return (
    <>
      <Dialog
        className="relative z-[9999]"
        open={isOpen}
        onClose={SetisOpen}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen h-screen ModelBoxes">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-[80px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[775px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
      
            >
              <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  onClick={() => HeandleSkipReview()}
                  className="rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <RxCross2 aria-hidden="true" className="size-6" />
                </button>
              </div>

              <div>
                <div className="flex items-center justify-center">{Icons}</div>
                <h1 className="text-center mt-3 font-semibold text-3xl">
                  {Headding}
                </h1>
                <p className="max-w-[471px] mx-auto text-center text-black/50 mt-1">
                  {BodyText}
                </p>
                <div className="flex items-center gap-1 justify-center mt-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      onClick={() => setRating(star)}
                      className={`cursor-pointer text-[40px] ${
                        rating >= star ? "text-yellow-100" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-8">
                  <textarea
                    onChange={(e) => setReviewMessage(e.target.value)}
                    value={ReviewMessage}
                    className="h-[135px] px-6 py-5 w-full rounded-xl bg-[#DAD8D0] text-black/50 placeholder:text-black/50 focus:outline-none text-lg placeholder:text-lg"
                    placeholder="Write Your message here*"
                  />
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-3 mt-14 justify-center">
                  <OutlineBtn
                    text={BtnText}
                    className={`bg-black outline-none text-white w-full py-3 text-lg font-medium`}
                    onClick={onClick}
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

export default RataingPopup;
