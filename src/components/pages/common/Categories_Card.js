import React, { useState } from "react";
import Wrestling from "../../../assets/images/Wrestling.png";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Inputfild from "./Inputfild";

const CategoriesCard = ({ data }) => {
  const [Deatils_sub_category, setDeatils_sub_category] = useState({});
  const [isOpen, setopen] = useState(false);
  return (
    <>
      <div className="group flex flex-col sm:mr-6 justify-between min-h-[249px]">
        <img
          src={data.categoryImage || data.profile}
          alt="card_image"
          className="grayscale h-[258px] w-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-[22px] text-black mt-6 max-w-[315px]">
            {data?.categoryName || data.className?.slice(0, 5)}
          </h2>
          <p className="mt-1 text-black/70 text-sm font-light text-justify line-clamp-3 h-[40px]">
            {data?.categoryDescription || data.className}
          </p>
        </div>
        <button
          onClick={() => { setDeatils_sub_category(data); setopen(true) }}
          className="relative bg-transparent h-[31px] border border-black/50 text-black text-xs leading-8 px-3 py-4 rounded-full flex justify-center items-center after:absolute after:bg-black after:h-0 after:w-full after:top-0 after:left-0 hover:after:h-full after:transition-[2s] after:-z-20 hover:text-white overflow-hidden group mt-4"
        >
          {data.classdate || "Read More"}
        </button>
      </div>

      <Dialog
        className="relative z-[9999]"
        open={isOpen}
        onClose={setopen}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-6 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[775px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <img
                  src={Deatils_sub_category.categoryImage}
                  alt=""
                  className="h-full w-full  py-3"
                />
                <div className="mt-5 grid grid-cols-1 gap-3">
                  <Inputfild
                    type={"text"}
                    value={Deatils_sub_category.categoryName}
                    readOnly
                    name="categoryName"
                    className={"rounded-lg md:w-full"}
                    Labelclass={"mb-1 customradiusBlack text-base"}
                  />
                  <div>
                    <textarea
                      name="categoryDescription"
                      value={Deatils_sub_category.categoryDescription}
                      className="w-full bg-[#DAD8D0] rounded-lg h-[100px] p-3 placeholder:text-black/25 focus:outline-none"
                      placeholder="Enter your Details"
                    />
                  </div>

                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CategoriesCard;
