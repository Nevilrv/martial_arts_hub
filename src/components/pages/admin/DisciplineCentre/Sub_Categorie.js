import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import OutlineBtn from "../../common/OutlineBtn";
import Inputfild from "../../common/Inputfild";
import { IoCamera } from "react-icons/io5";
import {
  Add_Sub_Categories,
  Delete_Sub_Categories,
  Edit_Sub_Categories,
  Sub_Category_List,
} from "../../../services/Admin/Discipline_Centre/Discipline_Centre";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import AdminHeadding from "../../common/AdminHeadding";
import { useParams } from "react-router-dom";
import Popup from "../../common/Popup";
import { Allert_Popup_Icon } from "../../../../assets/icon";

const Sub_Categorie = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Delete, SetDelete] = useState(false);
  const [IsEdit, setIsEdit] = useState(false);
  const [category_list, Set_Category_List] = useState([]);
  const Paramsdata = useParams();
  const [Sub_Categorie_Details, SetSub_Categorie_Details] = useState({
    maincategory: Paramsdata.name,
    maincategoryId: Paramsdata.categoryid,
    categoryName: "",
    categoryDescription: "",
    adminId: JSON.parse(localStorage.getItem("_id")),
    categoryImage: "",
  });

  const [EditSub_Categorie_Details, SetEditSub_Categorie_Details] = useState({
    maincategory: Paramsdata.name,
    maincategoryId: Paramsdata.categoryid,
    categoryName: "",
    categoryDescription: "",
    adminId: JSON.parse(localStorage.getItem("_id")),
    categoryImage: "",
    categoryId: "",
  });

  const Get_Sub_Category_List = async () => {
    setLoading(true);
    const result = await Sub_Category_List(Paramsdata.name);
    if (result?.success === true) {
      setLoading(false);
      Set_Category_List(result.data);
    } else {
      setLoading(false);
      toast.error("No any subcategory created.")
      // toast.error(result?.message);
    }
  };

  const HenadleClose = () => {
    SetisOpen(false);
    setIsEdit(false);
    SetEditSub_Categorie_Details({
      maincategory: Paramsdata.name,
      maincategoryId: Paramsdata.categoryid,
      categoryName: "",
      categoryDescription: "",
      adminId: JSON.parse(localStorage.getItem("_id")),
      categoryImage: "",
    });
    SetSub_Categorie_Details({
      maincategory: Paramsdata.name,
      maincategoryId: Paramsdata.categoryid,
      categoryName: "",
      categoryDescription: "",
      adminId: JSON.parse(localStorage.getItem("_id")),
      categoryImage: "",
    });
  };

  const handleChange = (e) => {
    IsEdit === true
      ? SetEditSub_Categorie_Details({
          ...EditSub_Categorie_Details,
          [e.target.name]: e.target.value,
        })
      : SetSub_Categorie_Details({
          ...Sub_Categorie_Details,
          [e.target.name]: e.target.value,
        });
  };

  const heandleImage = (e) => {
    IsEdit === true
      ? SetEditSub_Categorie_Details({
          ...EditSub_Categorie_Details,
          [e.target.name]: e.currentTarget.files[0],
        })
      : SetSub_Categorie_Details({
          ...Sub_Categorie_Details,
          [e.target.name]: e.currentTarget.files[0],
        });
  };

  const Add_Sub_Category = async () => {
    const formData = new FormData();
    formData.append("maincategory", Sub_Categorie_Details?.maincategory);
    formData.append("maincategoryId", Sub_Categorie_Details.maincategoryId);
    formData.append("categoryName", Sub_Categorie_Details?.categoryName);
    formData.append(
      "categoryDescription",
      Sub_Categorie_Details.categoryDescription
    );
    formData.append("adminId", Sub_Categorie_Details.adminId);
    formData.append("categoryImage", Sub_Categorie_Details.categoryImage);

    setLoading(true);
    const result = await Add_Sub_Categories(formData);
    if (result?.success === true) {
      setLoading(false);
      SetisOpen(false);
      Get_Sub_Category_List();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const Edit_Sub_Category = async () => {
    const formData = new FormData();
    formData.append("maincategory", EditSub_Categorie_Details?.maincategory);
    formData.append("maincategoryId", EditSub_Categorie_Details.maincategoryId);
    formData.append("categoryName", EditSub_Categorie_Details?.categoryName);
    formData.append(
      "categoryDescription",
      EditSub_Categorie_Details.categoryDescription
    );
    formData.append("adminId", EditSub_Categorie_Details.adminId);
    formData.append("categoryImage", EditSub_Categorie_Details.categoryImage);
    formData.append("categoryId", EditSub_Categorie_Details.categoryId);

    setLoading(true);
    const result = await Edit_Sub_Categories(formData);
    if (result?.success === true) {
      setLoading(false);
      SetisOpen(false);
      Get_Sub_Category_List();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const Delete_Sub_Category = async () => {
    setLoading(true);
    const result = await Delete_Sub_Categories(
      localStorage.getItem("Sub_Categorie_Id")
    );
    if (result?.success === true) {
      setLoading(false);
      SetDelete(false);
      localStorage.removeItem("Sub_Categorie_Id");
      Get_Sub_Category_List();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    Get_Sub_Category_List();
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between mb-7 sm:flex-row flex-col gap-2">
        <AdminHeadding Headding={"Sub Category"} />
        <div className="flex items-center gap-4">
          <OutlineBtn
            text="Add Sub Category"
            className={`border-black/30 w-[260px] font-medium text-lg bg-black text-white rounded-xl`}
            onClick={() => SetisOpen(true)}
          />
        </div>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        {category_list.map((category) => (
          <div class="sm:max-w-sm rounded overflow-hidden shadow-lg bg-white/50 cursor-pointer flex flex-col justify-between pb-3">
            <div>
              <div className="bg-black">
                <img
                  class="w-full"
                  src={category.categoryImage}
                  alt="Sunset in the mountains"
                  className="grayscale sm:w-[370px] w-full h-[225px] object-cover object-center"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  {category.categoryName}
                </div>
                <p class="text-gray-700 text-base">
                  {category.categoryDescription}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap px-2 relative z-30">
              <OutlineBtn
                text="Edit"
                className={`border-black/30 font-medium text-lg bg-black text-white rounded-xl`}
                onClick={() => {
                  setIsEdit(true);
                  SetisOpen(true);
                  SetEditSub_Categorie_Details({
                    categoryName: category.categoryName,
                    categoryDescription: category.categoryDescription,
                    categoryImage: category.categoryImage,
                    categoryId: category.categoryId,
                    maincategory: Paramsdata.name,
                    maincategoryId: Paramsdata.categoryid,
                    adminId: JSON.parse(localStorage.getItem("_id")),
                  });
                }}
              />
              <OutlineBtn
                text="Delete"
                className={`border-transparent font-medium text-lg bg-red-200 text-white rounded-xl py-2`}
                onClick={() => {
                  SetDelete(true);
                  localStorage.setItem("Sub_Categorie_Id", category.categoryId);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <Dialog
        className="relative z-[9999]"
        open={isOpen}
        onClose={HenadleClose}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-6 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[775px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <h1 className=" mt-3 font-semibold text-2xl">
                  {IsEdit === true ? "Edit Sub Category" : "Add Sub Category"}
                </h1>
                <div className="mt-5 grid grid-cols-1 gap-3">
                  <Inputfild
                    type={"text"}
                    value={
                      IsEdit === true
                        ? EditSub_Categorie_Details.categoryName
                        : Sub_Categorie_Details.categoryName
                    }
                    name="categoryName"
                    placeholder="Enter your Sub Category"
                    Label={"Enter your Sub Category"}
                    onChange={handleChange}
                    className={"rounded-lg md:w-full"}
                    Labelclass={"mb-1 customradiusBlack text-base"}
                  />
                  <div>
                    <label className={`text-base block mb-1`}>
                      Enter your Sub Category Details
                    </label>
                    <textarea
                      name="categoryDescription"
                      value={
                        IsEdit === true
                          ? EditSub_Categorie_Details.categoryDescription
                          : Sub_Categorie_Details.categoryDescription
                      }
                      onChange={handleChange}
                      className="w-full bg-[#DAD8D0] rounded-lg h-[100px] p-3 placeholder:text-black/25 focus:outline-none"
                      placeholder="Enter your Details"
                    />
                  </div>
                  <div className="w-full h-[150px] rounded-xl overflow-hidden bg-[#DAD8D0] flex items-center justify-center relative">
                    {Sub_Categorie_Details?.categoryImage === "" ||
                    Sub_Categorie_Details?.categoryImage === null ||
                    EditSub_Categorie_Details?.categoryImage === null ||
                    EditSub_Categorie_Details?.categoryImage === "" ? (
                      <img
                        src={EditSub_Categorie_Details?.categoryImage}
                        alt=""
                        className="h-full  z-20 object-cover absolute top-0 left-1/2 -translate-x-1/2"
                      />
                    ) : (
                      <div className="flex items-center justify-center flex-col absolute top-0 left-0 h-full w-full bg-[#DAD8D0]">
                        <IoCamera className="text-black/20 text-4xl" />
                        <p className="text-black/20 text-[13px] font-medium">
                          Add Sub Categorie Image
                        </p>
                      </div>
                    )}
                    <div className="flex items-center justify-center flex-col">
                      <IoCamera className="text-black/20 text-4xl" />
                      <p className="text-black text-[13px] font-medium">
                        {IsEdit === true
                          ? EditSub_Categorie_Details.categoryImage?.name
                          : Sub_Categorie_Details.categoryImage?.name}
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={heandleImage}
                      name="categoryImage"
                      className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-3 mt-14 justify-end">
                  {IsEdit === true ? (
                    <OutlineBtn
                      text={"Edit Sub Category"}
                      className={`border-black/30 w-[260px] font-medium text-lg bg-black text-white rounded-lg`}
                      onClick={Edit_Sub_Category}
                    />
                  ) : (
                    <OutlineBtn
                      text={"Create Sub Category"}
                      className={`border-black/30 w-[260px] font-medium text-lg bg-black text-white rounded-lg`}
                      onClick={Add_Sub_Category}
                    />
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Popup
        isOpen={Delete}
        SetisOpen={SetDelete}
        Icons={<Allert_Popup_Icon />}
        Headding={"Are you Sure Delete Sub Categorie"}
        // BodyText={
        //   "The associated subcategory is likewise deleted if the main category is deleted. Should you still delete this category? "
        // }
        BodyTextClass={"mt-5 text-lg"}
        BtnText={"Delete"}
        onClick={Delete_Sub_Category}
        Btnclass={
          "border-transparent font-medium text-lg bg-red-200 text-white py-2"
        }
        BtnText2={"Cancle"}
        BtnText2Click={() => SetDelete(false)}
      />
    </>
  );
};

export default Sub_Categorie;
