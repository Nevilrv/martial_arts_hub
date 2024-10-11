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

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [instructorDetails, setInstructorDetails] = useState({
    email: JSON.parse(localStorage.getItem("email")),
    name: "",
    country_code: "+91",
    mobileNo: "",
    profile_picture: "",
    category: "Boxing",
    availability: "",
    bio: "",
    tagline: "",
    experience: "",
    trainingHistory: "",
    certifications: "",
    keywords: "",
    idProof: "",
    firstFreeSessionHourlyRate: "",
    classTypeFirstFreeSession: "",
    privateSessionOnlineHourlyRate: "",
    privateSessionFaceToFaceHourlyRate: "",
  });
  console.log("🚀 ~ Profile ~ instructorDetails:", instructorDetails);
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
    const formData = new FormData();
    formData.append("email", instructorDetails.email);
    formData.append("name", instructorDetails.name);
    formData.append("country_code", instructorDetails.country_code);
    formData.append("mobileNo", instructorDetails.mobileNo);
    formData.append("profile_picture", instructorDetails.profile_picture);
    formData.append("category", instructorDetails.category);
    formData.append("availability", instructorDetails.availability);
    formData.append("bio", instructorDetails.bio);
    formData.append("tagline", instructorDetails.tagline);
    formData.append("experience", instructorDetails.experience);
    formData.append("trainingHistory", instructorDetails.trainingHistory);
    formData.append("certifications", instructorDetails.certifications);
    formData.append("keywords", instructorDetails.keywords);
    formData.append("idProof", instructorDetails.idProof);
    formData.append(
      "firstFreeSessionHourlyRate",
      instructorDetails.firstFreeSessionHourlyRate
    );
    formData.append(
      "classTypeFirstFreeSession",
      instructorDetails.classTypeFirstFreeSession
    );
    formData.append(
      "privateSessionOnlineHourlyRate",
      instructorDetails.privateSessionOnlineHourlyRate
    );
    formData.append(
      "privateSessionFaceToFaceHourlyRate",
      instructorDetails.privateSessionFaceToFaceHourlyRate
    );
    setLoading(true);
    const result = await InstructorProfile(formData);
    if (result?.success === true) {
      setLoading(false);
      toast.success(result?.message);
      navigate(Routing.InstructorDashboard);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const getinstructorDetails = async () => {
    setLoading(true);
    const result = await Get_Instructor_Details();
    if (result?.success === true) {
      setLoading(false);
      console.log(result.data, "======>getinstructorDetails");
      setInstructorDetails({
        email: result.data.email,
        name: result.data.name,
        country_code: "+91",
        mobileNo: result.data.mobileNo,
        profile_picture: result.data.profile_picture,
        category: result.data.category,
        availability: result.data.availability,
        bio: result.data.bio,
        tagline: result.data.tagline,
        experience: result.data.experience,
        trainingHistory: result.data.trainingHistory,
        certifications: result.data.certifications,
        keywords: result.data.keywords,
        idProof: result.data.idProof,
        firstFreeSessionHourlyRate: result.data.firstFreeSessionHourlyRate,
        classTypeFirstFreeSession: result.data.classTypeFirstFreeSession,
        privateSessionOnlineHourlyRate:
          result.data.privateSessionOnlineHourlyRate,
        privateSessionFaceToFaceHourlyRate:
          result.data.privateSessionFaceToFaceHourlyRate,
      });
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  useEffect(() => {
    getinstructorDetails();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-12 px-3 lg:px-20">
        <FaArrowLeft
          className="text-2xl cursor-pointer"
          onClick={() => navigate(Routing.InstructorLogin)}
        />
        <div className="flex items-center justify-between gap-6 md:flex-nowrap flex-wrap">
          <div className="w-full">
            <h1 className="text-4xl font-semibold mt-6">Add Information!</h1>
            <p className="text-[15px] text-black/70 mt-1">
              Please fill below details to create your profile in{" "}
              <span className="font-bold">martial arts hub</span> as an
              Instructor!
            </p>
            <div className="mt-10">
              <Inputfild
                type={"text"}
                placeholder={"Name"}
                Label={"Name"}
                onChange={handleChange}
                name={"name"}
                value={instructorDetails.name}
                Labelclass={"text-Dark_black font-medium"}
                className={"rounded-xl md:w-full h-[70px]"}
              />
            </div>
          </div>
          <div className="md:w-[245px] w-full h-[202px] rounded-xl overflow-hidden bg-[#DAD8D0] flex items-center justify-center relative">
            {instructorDetails?.profile_picture === null ||
            instructorDetails?.profile_picture === "" ? (
              <div className="flex items-center justify-center flex-col absolute top-0 left-0 h-full w-full bg-[#DAD8D0]">
                <IoCamera className="text-black/20 text-4xl" />
                <p className="text-black/20 text-[13px] font-medium">
                  Add Profile Picture
                </p>
              </div>
            ) : (
              <img
                src={instructorDetails.profile_picture}
                alt=""
                className="h-full object-cover absolute top-0 left-0"
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
              className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
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
              value={instructorDetails.email}
              onChange={handleChange}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"number"}
              placeholder={"Mobile No."}
              Label={"Mobile No."}
              name={"mobileNo"}
              onChange={handleChange}
              value={instructorDetails.mobileNo}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <Inputfild
              type={"date"}
              placeholder={"Add Availability"}
              Label={"Add Availability"}
              name={"availability"}
              onChange={handleChange}
              value={instructorDetails.availability.slice(0, 10)}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className={`text-sm text-black block font-medium`}>
              Add Bio
            </label>
            <textarea
              onChange={handleChange}
              name={"bio"}
              value={instructorDetails.bio}
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
              className={"rounded-xl md:w-full h-[70px]"}
              Labelclass={"text-Dark_black font-medium"}
              value={instructorDetails.tagline}
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className={`text-sm text-black block font-medium`}>
              Add your Experience
            </label>
            <textarea
              name={"experience"}
              onChange={handleChange}
              placeholder={"Add experience here"}
              value={instructorDetails.experience}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div>
            <label className={`text-sm text-black block font-medium`}>
              Add Training History
            </label>
            <textarea
              name={"trainingHistory"}
              onChange={handleChange}
              value={instructorDetails.trainingHistory}
              placeholder={"Add Training History"}
              className={`bg-[#DAD8D0] focus:outline-none placeholder:text-black/25 text-[17px] px-6 w-full h-[150px] rounded-xl p-6`}
            />
          </div>
          <div>
            <label className={`text-sm text-black block font-medium`}>
              Add your Certifications
            </label>
            <textarea
              name={"certifications"}
              onChange={handleChange}
              value={instructorDetails.certifications}
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
              value={instructorDetails.keywords}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>

          <div className="md:col-span-2 col-span-1">
            <label className={`text-sm text-black block font-medium`}>
              Upload ID Proof (Aadhar Card/Driving License/Instructor
              Certificate)
            </label>
            <div className="h-[200px] rounded-xl bg-[#DAD8D0] flex items-center justify-center relative mt-1">
              {instructorDetails?.idProof === null ||
              instructorDetails?.idProof === "" ? (
                <div className="flex items-center justify-center flex-col">
                  <MdCloudUpload className="text-black/20 text-4xl" />
                  <p className="text-black/20 text-[13px] font-medium text-center">
                    Upload ID Proof (Aadhar Card/Driving License/Instructor
                    Certificate) here
                  </p>
                </div>
              ) : (
                  <img
                    src={instructorDetails.idProof}
                    alt=""
                    className="h-full text-center object-cover absolute top-0 left-1/2 -translate-x-1/2"
                  />
              )}
              {instructorDetails?.idProof.name && (
                <div className="flex items-center justify-center flex-col">
                  <MdCloudUpload className="text-black/20 text-4xl" />
                  <p className="text-black text-[13px] font-medium text-center">
                    {instructorDetails.idProof.name}
                  </p>
                </div>
              )}
              <input
                type="file"
                name="idProof"
                // value={instructorDetails.idProof}
                onChange={heandleImage}
                className="h-full w-full absolute top-0 left-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-9 mt-[75px]">
          <h2 className="md:col-span-2 col-span-1 text-2xl text-black font-semibold">
            Hourly Rates
          </h2>
          <div>
            <Inputfild
              type={"text"}
              placeholder={"Add hourly rates here"}
              Label={"Do you want to give first free session?"}
              name={"firstFreeSessionHourlyRate"}
              onChange={handleChange}
              value={instructorDetails.firstFreeSessionHourlyRate}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"text"}
              onChange={handleChange}
              placeholder={"eg. Online"}
              Label={
                "Class Type for first free session (Online/Face-to-Face/Both)"
              }
              name={"classTypeFirstFreeSession"}
              value={instructorDetails.classTypeFirstFreeSession}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"number"}
              placeholder={"eg. Online"}
              value={instructorDetails.privateSessionOnlineHourlyRate}
              Label={
                "Class Type for Private Lesson (1-on-1) (Online/Face-to-Face/Both)"
              }
              name={"privateSessionOnlineHourlyRate"}
              onChange={handleChange}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
            />
          </div>
          <div>
            <Inputfild
              type={"number"}
              placeholder={"Add hourly rates here"}
              Label={"Do you want to give first free session?"}
              name={"privateSessionFaceToFaceHourlyRate"}
              onChange={handleChange}
              value={instructorDetails.privateSessionFaceToFaceHourlyRate}
              Labelclass={"text-Dark_black font-medium"}
              className={"rounded-xl md:w-full h-[70px]"}
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
