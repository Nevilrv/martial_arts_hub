import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../../shared/Routing";
import Inputfild from "../../common/Inputfild";
import { IoCamera } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import NormalBtn from "../../common/NormalBtn";
import { toast } from "react-toastify";
import {
  Get_Instructor_Details,
  InstructorProfile,
} from "../../../services/Instructor/instructor_auth/auth";
import Spinner from "../../../layouts/Spinner";
import User from "../../../../assets/images/userProfile.jpg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { parsePhoneNumber } from "react-phone-number-input";
import Select from "react-select";
import Socket from "../../common/Socket";
import {
  Category_List,
  Sub_Category_List_For_Instructor,
} from "../../../services/Admin/Discipline_Centre/Discipline_Centre";


const Profile = () => {
  const navigate = useNavigate();
  const [category_list, Set_Category_List] = useState([]);
  const [Sub_category_list, SetSub_category_list] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = [
    { value: "Online", label: "Online" },
    { value: "FaceToFace", label: "Face-To-Face" },
  ];

  const optionsForYesNo = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" }
  ];

  const [instructorDetails, setInstructorDetails] = useState({
    email: JSON.parse(localStorage.getItem("email")),
    name: "",
    country_code: "",
    mobileNo: "",
    profile_picture: "",
    maincategory: {},
    category: {},
    availability: "",
    bio: "",
    tagline: "",
    experience: "",
    trainingHistory: "",
    certifications: "",
    keywords: "",
    idProof: "",
    firstFreeSessionHourlyRate: {},
    classTypeFirstFreeSession: {},
    privateSessionOnlineHourlyRate: "",
    privateSessionFaceToFaceHourlyRate: "",
  });

  const getinstructorDetails = async () => {
    setLoading(true);
    if (token !== "undefined") {
      const result = await Get_Instructor_Details(token);
      if (result?.success === true) {
        setLoading(false);
        setInstructorDetails({
          email: result.data?.email,
          name: result.data?.name,
          country_code: result?.data?.country_code,
          mobileNo: result?.data?.mobileNo,
          profile_picture: result?.data?.profile_picture,
          maincategory: result?.data?.maincategory === "" ? result?.data?.maincategory : JSON.parse(result?.data?.maincategory),
          category: result?.data?.category === "" ? result?.data?.category : JSON.parse(result?.data?.category),
          availability: result?.data?.availability,
          bio: result?.data?.bio,
          tagline: result?.data?.tagline,
          experience: result?.data?.experience,
          trainingHistory: result?.data?.trainingHistory,
          certifications: result?.data?.certifications,
          keywords: result?.data?.keywords,
          idProof: result?.data?.idProof,
          firstFreeSessionHourlyRate: result?.data?.firstFreeSessionHourlyRate === "" ? result?.data?.firstFreeSessionHourlyRate : JSON.parse(result?.data?.firstFreeSessionHourlyRate),
          classTypeFirstFreeSession: result?.data?.classTypeFirstFreeSession === "" ? result?.data?.classTypeFirstFreeSession : JSON.parse(result?.data?.classTypeFirstFreeSession),
          privateSessionOnlineHourlyRate:
            result?.data?.privateSessionOnlineHourlyRate,
          privateSessionFaceToFaceHourlyRate:
            result?.data?.privateSessionFaceToFaceHourlyRate,
        });
      } else {
        setLoading(false);
        toast.error(result?.message);
      }
    } else {
      setLoading(false);
    }
  };

  const handleChangeCategory = (selectedOptions) => {
    setInstructorDetails({
      ...instructorDetails,
      maincategory: selectedOptions,
    });
  };

  const handleChangeClassType = (selected) => {
    setInstructorDetails({
      ...instructorDetails,
      classTypeFirstFreeSession: selected
    });
  };

  const handleChangefirstFree = (selected) => {
    setInstructorDetails({
      ...instructorDetails,
      firstFreeSessionHourlyRate: selected
    });
  };

  // const handle_Class_Type = (selectedOptions) => {
  //   setInstructorDetails({
  //     ...instructorDetails,
  //     maincategory: selectedOptions,
  //   });
  // };

  const handleChangeSubCategory = (selectedOptions) => {
    setInstructorDetails({
      ...instructorDetails,
      category: selectedOptions,
    });
  };

  const handleChange = (e) => {
    setInstructorDetails({
      ...instructorDetails,
      [e.target.name]: e.target.value,
    });
  };

  const heandleImage = (e) => {
    setInstructorDetails({
      ...instructorDetails,
      [e.target.name]: e.currentTarget.files[0],
    });
  };

  const handleSaveProfile = async () => {
    console.log("this is called===>")
    const requiredFields = [
      "email", "name", "country_code", "mobileNo", "profile_picture",
      "maincategory", "category", "availability", "bio", "tagline",
      "experience", "trainingHistory", "certifications", "keywords",
      "idProof", "firstFreeSessionHourlyRate", "classTypeFirstFreeSession",
      "privateSessionOnlineHourlyRate", "privateSessionFaceToFaceHourlyRate"
    ];


    const missingFields = requiredFields.filter(field => !instructorDetails?.[field]);

    if (missingFields.length > 0) {
      toast.error(`The following fields are required: ${missingFields.join(", ")}`);
      setErrors(missingFields);
      return;
    }
    const formData = new FormData();
    formData.append("email", instructorDetails?.email);
    formData.append("name", instructorDetails?.name);
    formData.append("country_code", instructorDetails?.country_code);
    formData.append("mobileNo", instructorDetails?.mobileNo);
    formData.append("profile_picture", instructorDetails?.profile_picture);
    formData.append(
      "maincategory",
      JSON.stringify(instructorDetails?.maincategory)
    );
    formData.append("category", JSON.stringify(instructorDetails?.category));
    formData.append("availability", instructorDetails?.availability);
    formData.append("bio", instructorDetails?.bio);
    formData.append("tagline", instructorDetails?.tagline);
    formData.append("experience", instructorDetails?.experience);
    formData.append("trainingHistory", instructorDetails?.trainingHistory);
    formData.append("certifications", instructorDetails?.certifications);
    formData.append("keywords", instructorDetails?.keywords);
    formData.append("idProof", instructorDetails?.idProof);
    formData.append(
      "firstFreeSessionHourlyRate",
      JSON.stringify(instructorDetails?.firstFreeSessionHourlyRate)
    );
    formData.append(
      "classTypeFirstFreeSession",
      JSON.stringify(instructorDetails?.classTypeFirstFreeSession)
    );
    formData.append(
      "privateSessionOnlineHourlyRate",
      instructorDetails?.privateSessionOnlineHourlyRate
    );
    formData.append(
      "privateSessionFaceToFaceHourlyRate",
      instructorDetails?.privateSessionFaceToFaceHourlyRate
    );

    setLoading(true);
    const result = await InstructorProfile(formData);
    console.log(result, "=========>")
    if (result?.success === true) {
      setLoading(false);
      localStorage.setItem("OnlineRate", result?.data?.privateSessionOnlineHourlyRate)
      localStorage.setItem("FaceToFace", result?.data?.privateSessionFaceToFaceHourlyRate)
      if (result.data.status === "pending") {
        Socket.emit("Notification", {
          title: `${instructorDetails?.name} New_instructor`,
          notificationType: "Instructor_request",
          Time: new Date(),
        });
        navigate(Routing.InstructorLogin);
      } else {
        navigate(Routing.InstructorDashboard);
      }

    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const token = localStorage.getItem("token");

  const Get_Category_List = async () => {
    setLoading(true);
    const result = await Category_List();
    if (result?.success === true) {
      setLoading(false);
      const data = result.data;
      let transformedCategories = data.map((item) => ({
        label: item.maincategory,
        value: item.maincategory,
      }));
      Set_Category_List(transformedCategories);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const Get_Sub_Category_List = async () => {
    setLoading(true);
    const category = instructorDetails.maincategory.value;
    const result = await Sub_Category_List_For_Instructor(category);
    if (result?.success === true) {
      setLoading(false);
      const data = result.data;
      let transformedCategories = data.map((item) => ({
        label: item.categoryName,
        value: item.categoryName,
      }));
      SetSub_category_list(transformedCategories);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    getinstructorDetails();
    Get_Category_List();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (instructorDetails.maincategory.value) {
      Get_Sub_Category_List();
    }
    // eslint-disable-next-line
  }, [instructorDetails.maincategory.value]);

  const handlePhoneNumberChange = (value) => {
    if (value) {
      try {
        const phoneNumberDetails = parsePhoneNumber(value);
        setInstructorDetails({
          ...instructorDetails,
          country_code: phoneNumberDetails?.countryCallingCode,
          mobileNo: phoneNumberDetails?.nationalNumber,
        });
      } catch (error) {
        console.error("Error parsing phone number:", error);
      }
    } else {
      setInstructorDetails((prevDetails) => ({
        ...prevDetails,
        country_code: "",
        mobileNo: "",
      }));
    }
  };

  const heandleback = () => {
    const islogin = JSON.parse(localStorage.getItem("is_login"));
    if (islogin === true) {
      navigate(Routing.InstructorDashboard);
    } else {
      navigate(Routing.InstructorLogin);
    }
  };

  const getFieldClass = (field) => {
    return errors.includes(field) ? "input-error" : "";
  };


  return (
    <>
      {loading && <Spinner />}
      <div className="mt-12 px-3 lg:px-20">
        <FaArrowLeft
          className="text-2xl cursor-pointer"
          onClick={() => heandleback()}
        />
        <div className="flex items-center justify-between gap-6 md:flex-nowrap flex-wrap">
          <div className="w-full">
            <h1 className="text-4xl font-semibold mt-6">Add Information!</h1>
            <p className="text-[15px] text-black/70 mt-1">
              Please fill below details to create your profile in{" "}
              <span className="font-bold">martial arts hub</span> as an
              Instructor!
            </p>
            <div className="mt-10 flex items-center gap-x-5 gap-y-9 md:flex-nowrap flex-wrap">
              <div className="md:w-[50%] w-full">
                <Inputfild
                  type={"text"}
                  placeholder={"Name"}
                  Label={"Name"}
                  onChange={handleChange}
                  name={"name"}
                  value={instructorDetails?.name}
                  Labelclass={`${getFieldClass("name")} text-Dark_black font-medium`}
                  className={`rounded-xl md:w-full h-[70px]`}
                />
              </div>
              <div className="md:w-1/2 w-full">
                <label className={`text-sm text-black/50 block ${getFieldClass("mobileNo")}`}>
                  Mobile No.
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={
                    instructorDetails?.mobileNo
                      ? `+${instructorDetails?.country_code}${instructorDetails?.mobileNo}`
                      : ""
                  }
                  onChange={handlePhoneNumberChange}
                  enableSearch={true}
                />
              </div>
            </div>
          </div>
          <div className="md:w-[245px] w-full h-[202px] rounded-xl overflow-hidden bg-[#DAD8D0] flex items-center justify-center relative">
            {instructorDetails?.profile_picture === null ||
              instructorDetails?.profile_picture === "" ? (
              <div className={`flex items-center justify-center flex-col absolute top-0 left-0 h-full w-full bg-[#DAD8D0]`}>
                <IoCamera className="text-black/20 text-4xl" />
                <p className={`text-black/20 text-[13px] font-medium ${getFieldClass("profile_picture")}`}>
                  Add Profile Picture
                </p>
              </div>
            ) : (
              <img
                src={instructorDetails?.profile_picture || User}
                alt=""
                className={`h-full object-cover absolute top-0 left-0`}
              />
            )}
            <div className="flex items-center justify-center flex-col">
              <IoCamera className="text-black/20 text-4xl" />
              <p className="text-black text-[13px] font-medium">
                {instructorDetails?.profile_picture?.name}
              </p>
            </div>
            <input
              type="file"
              name="profile_picture"
              onChange={heandleImage}
              className={`h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer`}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-9 mt-9">
          <div>
            <Inputfild
              type={"Email"}
              placeholder={"Email"}
              Label={"Email"}
              name={"email"}
              value={instructorDetails?.email}
              onChange={handleChange}
              Labelclass={`text-Dark_black font-medium ${getFieldClass("email")}`}
              className={`rounded-xl md:w-full h-[70px] `}
            />
          </div>

          <div className="md:col-span-1 col-span-1">
            <Inputfild
              type={"date"}
              placeholder={"Add Availability"}
              Label={"Add Availability"}
              name={"availability"}
              onChange={handleChange}
              value={instructorDetails?.availability?.slice(0, 10)}
              Labelclass={`text-Dark_black font-medium ${getFieldClass("availability")}`}
              className={` rounded-xl md:w-full h-[70px]`}
            />
          </div>
          <div className="md:col-span-1 col-span-1">
            <label className={`${getFieldClass("maincategory")} text-sm text-black/50 block`}>
              Select Your Main Category
            </label>
            <div className="Profile">
              <Select
                onChange={handleChangeCategory}
                options={category_list}
                defaultValue={instructorDetails?.maincategory}
                value={instructorDetails?.maincategory || ""}
                style={{ with: "100%" }}
              />
            </div>
          </div>
          <div className="md:col-span-1 col-span-1">
            <label className={`${getFieldClass("category")} text-sm text-black/50 block`}>
              Select Your Sub Category
            </label>
            <div className="Profile">
              <Select
                onChange={handleChangeSubCategory}
                options={Sub_category_list}
                isMulti
                // defaultValue={instructorDetails?.category}
                value={instructorDetails?.category || ""}
                onMenuOpen={() => { }}
                style={{ with: "100%" }}
              />
            </div>
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className={`${getFieldClass("bio")} text-sm text-black block font-medium`}>
              Add Bio
            </label>
            <textarea
              onChange={handleChange}
              name={"bio"}
              value={instructorDetails?.bio}
              placeholder={"Write about you"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Inputfild
              type={"text"}
              placeholder={"Add tagline"}
              Label={"Add tagline"}
              name={"tagline"}
              onChange={handleChange}
              className={`rounded-xl md:w-full h-[70px]`}
              Labelclass={`${getFieldClass("tagline")} text-Dark_black font-medium`}
              value={instructorDetails?.tagline}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className={`${getFieldClass("tagline")} text-sm text-black block font-medium`}>
              Add your Experience
            </label>
            <textarea
              name={"experience"}
              onChange={handleChange}
              placeholder={"Add experience here"}
              value={instructorDetails?.experience}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div>
            <label className={`${getFieldClass("trainingHistory")} text-sm text-black block font-medium`}>
              Add Training History
            </label>
            <textarea
              name={"trainingHistory"}
              onChange={handleChange}
              value={instructorDetails?.trainingHistory}
              placeholder={"Add Training History"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div>
            <label className={`${getFieldClass("certifications")} text-sm text-black block font-medium`}>
              Add your Certifications
            </label>
            <textarea
              name={"certifications"}
              onChange={handleChange}
              value={instructorDetails?.certifications}
              placeholder={"Add your Certifications"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Inputfild
              type={"text"}
              placeholder={"Add Keywords"}
              Label={"Add Keywords"}
              name={"keywords"}
              onChange={handleChange}
              value={instructorDetails?.keywords}
              Labelclass={`${getFieldClass("keywords")} text-Dark_black font-medium`}
              className={`rounded-xl md:w-full h-[70px]`}
            />
          </div>

          <div className="md:col-span-2 col-span-1">
            <label className={`${getFieldClass("idProof")} text-sm text-black block font-medium`}>
              Upload ID Proof (Aadhar Card/Driving License/Instructor
              Certificate)
            </label>
            <div className="h-[200px] rounded-xl bg-[#DAD8D0] flex items-center justify-center relative mt-1">
              {instructorDetails?.idProof === null ||
                instructorDetails?.idProof === "" ? (
                <div className="flex items-center justify-center flex-col">
                  <MdCloudUpload className="text-black/20 text-4xl" />
                  <p className={` text-black/20 text-[13px] font-medium text-center`}>
                    Upload ID Proof (Aadhar Card/Driving License/Instructor
                    Certificate) here
                  </p>
                </div>
              ) : (
                <img
                  src={instructorDetails?.idProof || User}
                  alt=""
                  className="h-full text-center object-cover absolute top-0 left-1/2 -translate-x-1/2"
                />
              )}
              {instructorDetails?.idProof.name && (
                <div className="flex items-center justify-center flex-col">
                  <MdCloudUpload className="text-black/20 text-4xl" />
                  <p className="text-black text-[13px] font-medium text-center">
                    {instructorDetails?.idProof.name}
                  </p>
                </div>
              )}
              <input
                type="file"
                name="idProof"
                // value={instructorDetails.idProof}
                onChange={heandleImage}
                className={`h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer`}
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-9 mt-[75px]">
          <h2 className="md:col-span-2 col-span-1 text-2xl text-black font-semibold">
            Hourly Rates
          </h2>
          <div>
            <label className={`text-sm text-black/50 block ${getFieldClass("firstFreeSessionHourlyRate")}`}>
              Do you want to give first free session?
            </label>
            <div className="Profile">
              <Select
                onChange={handleChangefirstFree}
                options={optionsForYesNo}
                defaultValue={instructorDetails?.firstFreeSessionHourlyRate}
                value={instructorDetails?.firstFreeSessionHourlyRate || ""}
                style={{ width: "100%" }}
                placeholder="Select Yes or No"
              />
            </div>
          </div>
          <div>
            <label className={`${getFieldClass("classTypeFirstFreeSession")} text-sm text-black/50 block`}>
              Class Type for first free session (Online/Face-to-Face)
            </label>
            <div className="Profile">
              <Select
                onChange={handleChangeClassType}
                options={options}
                defaultValue={instructorDetails?.classTypeFirstFreeSession}
                value={instructorDetails?.classTypeFirstFreeSession || ""}
                style={{ width: "100%" }}
                placeholder="Select Class Type"
              />
            </div>
          </div>
          <div>
            <Inputfild
              type={"number"}
              placeholder={"Add hourly rates here"}
              value={instructorDetails?.privateSessionOnlineHourlyRate}
              Label={"Private Class Online Rate"}
              name={"privateSessionOnlineHourlyRate"}
              onChange={handleChange}
              Labelclass={`text-Dark_black font-medium ${getFieldClass("privateSessionOnlineHourlyRate")}`}
              className={`rounded-xl md:w-full h-[70px] `}
            />
          </div>
          <div>
            <Inputfild
              type={"number"}
              placeholder={"Add hourly rates here"}
              Label={"Private Class Face To Face Rate"}
              name={"privateSessionFaceToFaceHourlyRate"}
              onChange={handleChange}
              value={instructorDetails?.privateSessionFaceToFaceHourlyRate}
              Labelclass={`text-Dark_black font-medium ${getFieldClass("privateSessionFaceToFaceHourlyRate")}`}
              className={`rounded-xl md:w-full h-[70px]`}
            />
          </div>
        </div>
        <div className="mt-16 flex justify-end">
          <NormalBtn
            text={"Save Info & Create Profile"}
            onClick={handleSaveProfile}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
