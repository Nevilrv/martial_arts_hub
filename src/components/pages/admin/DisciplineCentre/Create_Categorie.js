import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import OutlineBtn from "../../common/OutlineBtn";
import Inputfild from "../../common/Inputfild";
import { IoCamera } from "react-icons/io5";
import {
  Add_Main_Categories,
  Category_List,
  Delete_Main_Categories,
  Edit_Main_Categories,
} from "../../../services/Admin/Discipline_Centre/Discipline_Centre";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import AdminHeadding from "../../common/AdminHeadding";
import { useNavigate } from "react-router-dom";
import Popup from "../../common/Popup";
import { Allert_Popup_Icon } from "../../../../assets/icon";

const Create_Categorie = () => {
  const navigate = useNavigate();
  const [isOpen, SetisOpen] = useState(false);
  const [isEdit, SetIsEdit] = useState(false);
  const [Delete, SetDelete] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Category, setCategory] = useState({
    maincategory: "",
    maincategoryDescription: "",
    adminId: localStorage.getItem("_id"),
    maincategoryImage: "",
  });
  const [EditCategory, setEditCategory] = useState({
    maincategory: "",
    maincategoryDescription: "",
    adminId: localStorage.getItem("_id"),
    maincategoryImage: "",
    CategoryId: "",
  });
  const [category_list, Set_Category_List] = useState([]);

  const heandleClose = () => {
    SetisOpen(false);
    SetIsEdit(false);
  };

  const Get_Category_List = async () => {
    setLoading(true);
    const result = await Category_List();
    if (result?.success === true) {
      setLoading(false);
      Set_Category_List(result.data);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const handleChange = (e) => {
    isEdit === true
      ? setEditCategory({
          ...EditCategory,
          [e.target.name]: e.target.value,
        })
      : setCategory({
          ...Category,
          [e.target.name]: e.target.value,
        });
  };

  const heandleImage = (e) => {
    isEdit === true
      ? setEditCategory({
          ...EditCategory,
          [e.target.name]: e.currentTarget.files[0],
        })
      : setCategory({
          ...Category,
          [e.target.name]: e.currentTarget.files[0],
        });
  };

  const Add_Main_Category = async () => {
    const formData = new FormData();
    formData.append("maincategory", Category?.maincategory);
    formData.append(
      "maincategoryDescription",
      Category?.maincategoryDescription
    );
    formData.append("adminId", Category?.adminId);
    formData.append("maincategoryImage", Category?.maincategoryImage);
    setLoading(true);

    const result = await Add_Main_Categories(formData);
    if (result?.success === true) {
      setLoading(false);
      SetisOpen(false);
      setCategory({
        maincategory: "",
        maincategoryDescription: "",
        adminId: localStorage.getItem("_id"),
        maincategoryImage: "",
      });
      Get_Category_List();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const Edit_Main_Category = async () => {
    const formData = new FormData();
    formData.append("maincategory", EditCategory?.maincategory);
    formData.append(
      "maincategoryDescription",
      EditCategory?.maincategoryDescription
    );
    formData.append("adminId", EditCategory?.adminId);
    formData.append("maincategoryImage", EditCategory?.maincategoryImage);
    formData.append("maincategoryId", EditCategory?.CategoryId);
    setLoading(true);
    const result = await Edit_Main_Categories(formData);
    if (result?.success === true) {
      setLoading(false);
      SetIsEdit(false);
      SetisOpen(false);
      Get_Category_List();
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const Delete_Main_Category = async () => {
    const maincategoryId = localStorage.getItem("CategorieId");
    setLoading(true);
    const result = await Delete_Main_Categories(maincategoryId);
    if (result?.success === true) {
      setLoading(false);
      SetDelete(false);
      Get_Category_List();
      localStorage.removeItem("CategorieId");
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    Get_Category_List();
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <div className="flex items-center justify-between mb-7 sm:flex-row flex-col gap-2">
        <AdminHeadding Headding={"Create Category"} />
        <OutlineBtn
          text="Create new Category"
          className={`border-black/30 sm:w-[260px] w-full font-medium text-lg bg-black text-white rounded-xl`}
          onClick={() => SetisOpen(true)}
        />
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        {category_list.map((category) => (
          <div class="sm:max-w-sm rounded overflow-hidden shadow-lg bg-white/50 cursor-pointer flex flex-col justify-between pb-3">
            <div
              onClick={() => {
                navigate(
                  `/admin/sub_Categorie/${
                    category.maincategoryId
                  }/${category.maincategory.toLowerCase()}`
                );
              }}
            >
              <div className="bg-black p-2">
                <img
                  class="w-full"
                  src={category.maincategoryImage}
                  alt="Sunset in the mountains"
                  className="sm:w-[370px] w-full h-[225px] object-contain object-center"
                />
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  {category.maincategory}
                </div>
                <p class="text-gray-700 text-base">
                  {category.maincategoryDescription}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap px-2 relative z-30">
              <OutlineBtn
                text="Edit"
                className={`border-black/30 font-medium text-lg bg-black text-white rounded-xl`}
                onClick={() => {
                  SetIsEdit(true);
                  SetisOpen(true);
                  setEditCategory({
                    maincategory: category.maincategory,
                    maincategoryDescription: category.maincategoryDescription,
                    adminId: localStorage.getItem("_id"),
                    maincategoryImage: category.maincategoryImage,
                    CategoryId: category.maincategoryId,
                  });
                }}
              />
              <OutlineBtn
                text="Delete"
                className={`border-transparent font-medium text-lg bg-red-200 text-white rounded-xl py-2`}
                onClick={() => {
                  SetDelete(true);
                  localStorage.setItem("CategorieId", category.maincategoryId);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <Dialog
        className="relative z-[9999]"
        open={isOpen}
        onClose={heandleClose}
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
                  {isEdit === true
                    ? "Edit Main Categorie"
                    : "Add Main Categorie"}
                </h1>
                <div className="mt-5 grid grid-cols-1 gap-3">
                  <Inputfild
                    type={"text"}
                    name="maincategory"
                    value={
                      isEdit === true
                        ? EditCategory.maincategory
                        : Category.maincategory
                    }
                    onChange={handleChange}
                    placeholder="Enter your main Categorie"
                    Label={"Enter your main Categorie"}
                    className={"rounded-lg md:w-full"}
                    Labelclass={"mb-1 customradiusBlack text-base"}
                  />
                  <div>
                    <label className={`text-base block mb-1`}>
                      Enter your main Categorie Details
                    </label>
                    <textarea
                      onChange={handleChange}
                      value={
                        isEdit === true
                          ? EditCategory.maincategoryDescription
                          : Category.maincategoryDescription
                      }
                      name="maincategoryDescription"
                      className="w-full bg-[#DAD8D0] rounded-lg h-[100px] p-3 placeholder:text-black/25 focus:outline-none"
                      placeholder="Enter your Details"
                    />
                  </div>
                  <div className="w-full h-[150px] rounded-xl overflow-hidden bg-[#DAD8D0] flex items-center justify-center relative">
                    {EditCategory?.maincategoryImage === null ||
                    EditCategory?.maincategoryImage === "" ||
                    Category?.maincategoryImage?.name === null ||
                    Category?.maincategoryImage?.name === "" ? (
                      <div className="flex items-center justify-center flex-col absolute top-0 left-0 h-full w-full bg-[#DAD8D0]">
                        <IoCamera className="text-black/20 text-4xl" />
                        <p className="text-black/20 text-[13px] font-medium">
                          Add Picture
                        </p>
                      </div>
                    ) : (
                      <img
                        src={EditCategory?.maincategoryImage}
                        alt=""
                        className="h-full  z-20 object-cover absolute top-0 left-1/2 -translate-x-1/2"
                      />
                    )}
                    <div className="flex items-center justify-center flex-col">
                      <IoCamera className="text-black/20 text-4xl" />
                      <p className="text-black text-[13px] font-medium">
                        {isEdit === true
                          ? EditCategory?.maincategoryImage?.name
                          : Category?.maincategoryImage?.name}
                      </p>
                    </div>
                    <input
                      type="file"
                      onChange={heandleImage}
                      name="maincategoryImage"
                      className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-3 mt-14 justify-end">
                  {isEdit === true ? (
                    <OutlineBtn
                      text={"Edit Main Categorie"}
                      className={`border-black/30 w-[260px] font-medium text-lg bg-black text-white rounded-lg`}
                      onClick={Edit_Main_Category}
                    />
                  ) : (
                    <OutlineBtn
                      text={"Create Main Categorie"}
                      className={`border-black/30 w-[260px] font-medium text-lg bg-black text-white rounded-lg`}
                      onClick={Add_Main_Category}
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
        Headding={"Are you Sure to Delete Categorie"}
        BodyText={
          "The associated subcategory is likewise deleted if the main category is deleted. Should you still delete this category? "
        }
        BodyTextClass={"mt-5 text-lg"}
        BtnText={"Delete"}
        onClick={Delete_Main_Category}
        Btnclass={
          "border-transparent font-medium text-lg bg-red-200 text-white py-2"
        }
        BtnText2={"Cancle"}
        BtnText2Click={() => SetDelete(false)}
      />
    </>
  );
};

export default Create_Categorie;
