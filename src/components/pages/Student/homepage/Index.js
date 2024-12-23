import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  ArtsJourney,
  HeandWithDots,
  NoteIcon,
  VerifyUser,
} from "../../../../assets/icon";
import CategoriesSection from "../../common/Categories_Section";
import Instructors from "../../common/Instructors";
import GetInTouch from "../../common/Get_In_Touch";
import SignUp from "../Signup/SignUp";
import Login from "../Login/Login";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Create_discipline,
  GetInstructors,
  InstructorLike,
} from "../../../services/student/Homepage/Homepage";
import { toast } from "react-toastify";
import Spinner from "../../../layouts/Spinner";
import { Routing } from "../../../shared/Routing";
import { CiSearch } from "react-icons/ci";
import InstructorsCard from "../../common/Instructors_Card";
import { Category_List } from "../../../services/Admin/Discipline_Centre/Discipline_Centre";

const AskedQuestions = [
  {
    title: "What age groups can participate in martial arts classes?",
    body: "For now our classes are designed for adults only.",
  },
  {
    title: "Do I need any prior experience to join?",
    body: "For now our classes are designed for adults only.",
  },
  {
    title: "What should I wear to my first class?",
    body: "For now our classes are designed for adults only.",
  },
  {
    title: "How often should I attend classes to see progress?",
    body: "For now our classes are designed for adults only.",
  },
  {
    title: "Is martial arts training safe?",
    body: "For now our classes are designed for adults only.",
  },
];

const Who_we_are = [
  {
    title: "online platform",
    body: "Welcome to Martial Arts Hub, the global online platform for martial artists of all levels. We connect practitioners who want to learn and improve themselves with top-notch instructors who are passionate about sharing their knowledge and helping others. Our personalized guidance is tailored to fit your unique needs, whether you prefer the convenience of online sessions or the hands-on experience of face-to-face training.",
  },
  {
    title: "At Martial Arts Hub",
    body: "But we don't stop there. At Martial Arts Hub, we believe in holistic improvement. That's why we also offer access to nutritionists, strength and conditioning coaches, physiotherapists, and sports psychologists. Our diverse network of experts ensures you have the comprehensive support you need to excel in every aspect of your martial arts journey. Wherever you are based in the world, you can join us at Martial Arts Hub and unlock your full potential. Your path to excellence starts here.",
  },
];

const Why_Join_Us = [
  {
    title: "Expert Instructors",
    body: "Our highly qualified instructors bring years of experience and passion to every class.",
  },
  {
    title: "Diverse Styles",
    body: "We offer a variety of martial arts styles, including Karate, Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.",
  },
  {
    title: "Supportive Community",
    body: "Join a welcoming and encouraging community that fosters growth and camaraderie.",
  },
  {
    title: "Holistic Development",
    body: "Our programs focus on physical fitness, mental resilience, and building confidence.",
  },
  {
    title: "Flexible Training",
    body: "We provide classes for all ages and skill levels, ensuring everyone can find their perfect fit.",
  },
  {
    title: "Community Focus",
    body: "Join a community dedicated to your personal growth and excellence.",
  },
];

const Index = () => {
  const [openId, setOpenId] = useState("");
  const [Who_we_are_Id, setWho_we_are_Id] = useState("");
  const [Why_Join_Us_Id, setWhy_Join_Us_Id] = useState("");
  const [searchInstructor, setSearchInstructor] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [discipline, setdiscipline] = useState({
    disciplineName: "",
    description: "",
    userId: JSON.parse(localStorage.getItem("_id")),
    userType: JSON.parse(localStorage.getItem("Role")),
  });
  const [Instructorsdata, setInstructorsdata] = useState([]);
  const [filteredInstructor, setFilteredInstructor] = useState([]);
  const [category_list, Set_Category_List] = useState([]);
  const [openModel, setOpenModel] = useState(true);

  const [Like, setLike] = useState(false);

  const getInstructors = async () => {
    setLoading(true);
    const result = await GetInstructors();
    if (result?.success === true) {
      setLoading(false);
      setInstructorsdata(result.data);
    } else {
      toast.error("message");
      setLoading(false);
    }
  };

  const HeandleLike = async (id) => {
    setLoading(true);
    const result = await InstructorLike(
      id,
      JSON.parse(localStorage.getItem("_id"))
    );
    if (result?.success === true) {
      setLoading(false);
      setLike(!Like);
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        toast.error("Please Login");
      }
      setLoading(false);
    }
  };

  const heandleChange = (e) => {
    const trimmedValue = e.target.value.trim();
    setdiscipline({ ...discipline, [e.target.name]: trimmedValue });
  };

  const Creatediscipline = async () => {
    setLoading(true);
    const result = await Create_discipline(discipline);
    if (result?.success === true) {
      setLoading(false);
      setdiscipline({ description: "", disciplineName: "" });
    } else {
      toast.error(result.message);
      setLoading(false);
    }
  };

 

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const { pathname } = useLocation();

  const isLogin = JSON.parse(localStorage.getItem("is_login"));
  const Logintype = JSON.parse(localStorage.getItem("Role"));

  const HeandleSearch = () => {
    setFilteredInstructor(
      Instructorsdata.filter((Instructor) =>
        Instructor.name.toLowerCase().includes(searchInstructor.toLowerCase())
      )
    );
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

  useEffect(() => {
    getInstructors();
    Get_Category_List();
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      {/* Hero section start */}
      <section className="md:py-space pb-10" name="home">
        <h1 className="sm:text-[70px] text-[47px] text-center font-extrabold">
          martial arts hub.
        </h1>
        <p className="text-[22px] text-center max-w-[669px] mx-auto leading-[31.9px] px-2">
          The place to begin or elevate your martial arts journey. Created by
          martial artists for martial artists.
        </p>
        {!isLogin && (
          <div className="flex justify-center items-center mt-9 flex-wrap gap-y-3">
            <button
              onClick={() => navigate(Routing.StudentSignup)}
              className="bg-transparent h-[60px] text-white hover:text-black text-xl leading-8 px-7 py-4 rounded-full flex justify-center items-center relative after:absolute after:bg-black after:h-full after:w-full after:bottom-0 after:left-0 hover:after:h-0 after:transition-[2s] after:-z-20 overflow-hidden border border-black"
            >
              Start Today
            </button>
            <button
              onClick={() => navigate(Routing.StudentLogin)}
              className="ml-3 relative bg-transparent h-[60px] border border-black text-black text-xl leading-8 px-7 py-4 rounded-full flex justify-center items-center after:absolute after:bg-black after:h-0 after:w-full after:top-0 after:left-0 hover:after:h-full after:transition-[2s] after:-z-20 hover:text-white overflow-hidden"
            >
              Already a Member
            </button>
          </div>
        )}
        {Logintype !== "Instructor" && isLogin && (
          <div className="flex items-center gap-4 justify-center flex-wrap mt-9">
            <div className="relative">
              <input
                type="text"
                className="w-full h-[60px] md:w-[450px] mx-auto border border-black/30 bg-transparent rounded-full placeholder:text-black/40 pl-[55px] pr-3 focus:outline-none"
                placeholder="Search person"
                onChange={(e) => setSearchInstructor(e.target.value)}
              />
              <CiSearch className="absolute top-1/2 -translate-y-1/2 left-6 text-2xl" />
            </div>
            <button
              onClick={() => HeandleSearch()}
              className="bg-transparent h-[55px] text-white hover:text-black text-xl leading-8 px-7 py-4 rounded-full flex justify-center items-center relative after:absolute after:bg-black after:h-full after:w-full after:bottom-0 after:left-0 hover:after:h-0 after:transition-[2s] after:-z-20 overflow-hidden border border-black"
            >
              Find Instructor
            </button>
          </div>
        )}
        {searchInstructor !== "" ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-6 grid-cols-1 mt-10 gap-y-10 lg:px-8">
            {filteredInstructor.map((items, i) => (
              <InstructorsCard data={items} HeandleLike={HeandleLike} key={i} />
            ))}
          </div>
        ) : null}
      </section>
      {/* Hero section start */}
      {/* Services section start */}
      <section className="bg-black px-3 gap-y-12 lg:px-8 py-[76px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {category_list.map((category) => (
          <div
            className="flex flex-col justify-between items-center cursor-pointer h-[187px]"
            onClick={() => navigate(`/instructors/${category.maincategory}`)}
          >
            <img src={category.maincategoryImage} alt="" className="w-[52px] h-[52px] object-contain" />
            <div className="h-[123px] overflow-hidden flex flex-col justify-end">
              <h2 className="text-white text-[22px] leading-[26.4px] text-center">
                {category.maincategory}
              </h2>
              <p className="text-white/50 text-[13px] leading-[18.2px] text-center max-w-[195px] mt-2 break-words mx-auto line-clamp-3">
                {category.maincategoryDescription}
              </p>
            </div>
          </div>
        ))}
      </section>
      {/* Categories section start */}
      <CategoriesSection />
      <section className="px-3 lg:px-8">
        <div className="py-14 md:px-14 px-3 bg-gay-300 rounded-2xl">
          <div className="flex items-center justify-between flex-wrap gap-y-5">
            <div>
              <h2 className="text-white text-[32px] font-semibold">
                Can't see your Categories?
              </h2>
              <p className="text-lg font-light text-white max-w-[429px] mt-3">
                Can't find your martial art Categories in our list? Don't worry!
                Simply notify us, and we'll make every effort to add it to our
                offerings.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:w-auto w-full">
              <input
                type="text"
                name="disciplineName"
                value={discipline.disciplineName}
                onChange={heandleChange}
                className="border border-white/30 md:w-[485px] w-full h-[50px] rounded-full px-8 focus:outline-none bg-gay-100/10 placeholder:text-white/50 text-white"
                placeholder="Enter Categorie’s name"
              />
              <textarea
                className="border border-white/30 md:w-[485px] w-full h-[90px] rounded-2xl px-8 focus:outline-none bg-gay-100/10 placeholder:text-white/50 text-white pt-4"
                placeholder="Description"
                name="description"
                value={discipline.description}
                onChange={heandleChange}
              ></textarea>
              <div className="flex items-center justify-end">
                <button
                  className="py-2 px-6 bg-black text-white rounded-full"
                  onClick={() => Creatediscipline()}
                >
                  Notify Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* we are section start */}
      <section className="py-20 px-3 lg:px-8" name="about">
        <h2 className="Titile">martial arts hub.</h2>
        <div className="-mt-7">
          <h2 className="text-black text-[40px] font-medium leading-10 text-center">
            Who we are
          </h2>
          <p className="text-center max-w-[1052px] text-lg text-black/50 mx-auto mt-4 sm:block hidden">
            Welcome to Martial Arts Hub, the global online platform for martial
            artists of all levels. We connect practitioners who want to learn
            and improve themselves with top-notch instructors who are passionate
            about sharing their knowledge and helping others. Our personalized
            guidance is tailored to fit your unique needs, whether you prefer
            the convenience of online sessions or the hands-on experience of
            face-to-face training.
          </p>
          <p className="text-center max-w-[991px] text-lg text-black/50 mx-auto mt-4 sm:block hidden">
            But we don't stop there. At Martial Arts Hub, we believe in holistic
            improvement. That's why we also offer access to nutritionists,
            strength and conditioning coaches, physiotherapists, and sports
            psychologists. Our diverse network of experts ensures you have the
            comprehensive support you need to excel in every aspect of your
            martial arts journey. Wherever you are based in the world, you can
            join us at Martial Arts Hub and unlock your full potential. Your
            path to excellence starts here.
          </p>
          <div className="sm:hidden block">
          {Who_we_are.map((question, index) => (
            <div
              key={index}
              className="bg-white/50 py-6 md:px-10 px-5 rounded-xl mt-5"
            >
              <h2 id={`accordion-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 dark:border-gray-700 dark:text-gray-400 gap-3 focus:outline-none"
                  onClick={() => handleToggle(index)}
                  aria-expanded={openId === index}
                  aria-controls={`accordion-body-${index}`}
                >
                  <span>{question.title}</span>
                  <svg
                    className={`w-3 h-3 ${
                      openId === index ? "" : "rotate-180"
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              {openId === index && (
                <div
                  id={`accordion-body-${index}`}
                  aria-labelledby={`accordion-heading-${index}`}
                >
                  <div className="py-2 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-black/50">{question.body}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="relative bg-transparent h-[50px] border border-black/50 text-white text-lg leading-8 px-4 py-4 rounded-full flex justify-center items-center after:absolute after:bg-black after:h-full after:w-full after:top-0 after:left-0 hover:after:h-0 after:transition-[2s] after:-z-20 hover:text-black overflow-hidden group mt-4">
              Learn more
              <IoIosArrowRoundForward className="text-white text-2xl group-hover:text-black  rotate-[-46deg]" />
            </button>
          </div>
        </div>
      </section>
      {/* Ready to Learn section start */}
      <section className="bg-black py-[107px] px-3 lg:px-8">
        <h2 className="text-[40px] text-white font-medium text-center">
          Ready to Learn?
        </h2>
        <p className="text-xl text-center text-white/50 mt-5">
          Ready to learn martial arts but need some direction? Don’t worry,
          we've got you covered.
        </p>
        <p className="text-xl text-center text-white/50 mt-5 max-w-screen-lg mx-auto">
          Join Us online classes and learn from world-class martial arts
          instructors. Train at your own pace and master the art of self-defense
          or message our instructors for personalized guidance.
        </p>
        <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
          <button className="px-6 py-3 text-black flex items-center bg-white rounded-full text-lg font-medium">
            Start Today
            <IoIosArrowRoundForward className="text-black text-2xl group-hover:text-black  rotate-[-46deg]" />
          </button>
          <button className="px-6 py-3 text-white flex items-center bg-transparent border border-white rounded-full text-lg font-medium">
            Learn more
            <IoIosArrowRoundForward className="text-white text-2xl rotate-[-46deg]" />
          </button>
        </div>
      </section>
      {/* Join Us section start */}
      <section className="md:py-space py-20 px-3 lg:px-8">
        <h2 className="text-center text-[40px] font-medium">Why Join Us</h2>
        <div className="sm:block hidden">
          <div className="h-[420px] w-[420px] bg-gay-400/15 rounded-full mt-[188px] mx-auto  items-center justify-center relative lg:flex hidden">
            <div className="h-[285px] w-[285px] bg-primary rounded-full border-2 flex items-center justify-center">
              <h2 className="text-black text-[28px] font-bold tracking-[-1px]">
                martial arts hub.
              </h2>
            </div>
            <div className="absolute top-[-23%] left-[-50%]">
              <div className="w-[325px] h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Expert Instructors
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Our highly qualified instructors bring years of experience and
                  passion to every class.
                </p>
                <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                  1.
                </div>
              </div>
            </div>
            <div className="absolute top-[-23%] right-[-50%]">
              <div className="w-[325px] h-[160px] bg-black rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Diverse Styles
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  We offer a variety of martial arts styles, including Karate,
                  Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.
                </p>
                <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] left-2">
                  2.
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-73%]">
              <div className="w-[325px] h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Supportive Community
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Join a welcoming and encouraging community that fosters growth
                  and camaraderie.
                </p>
                <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-[-13px]">
                  3.
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-23%] right-[-50%]">
              <div className="w-[325px] h-[160px] bg-black rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Holistic Development
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Our programs focus on physical fitness, mental resilience, and
                  building confidence.
                </p>
                <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-[-15px] left-8">
                  4.
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-23%] left-[-50%]">
              <div className="w-[325px] h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Flexible Training
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  We provide classes for all ages and skill levels, ensuring
                  everyone can find their perfect fit.
                </p>
                <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-[-15px] right-8">
                  5.
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[-73%]">
              <div className="w-[325px] h-[160px] bg-black rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Community Focus
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Join a community dedicated to your personal growth and
                  excellence.
                </p>
                <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-[-13px]">
                  6.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden grid md:grid-cols-2 grid-cols-1 gap-5 mt-[50px]">
            <div className="h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative sm:pl-8 px-3">
              <h2 className="text-white text-xl font-semibold">
                Expert Instructors
              </h2>
              <p className="text-white/50 text-[13px] max-w-[255px]">
                Our highly qualified instructors bring years of experience and
                passion to every class.
              </p>
              <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                1.
              </div>
            </div>
            <div className="h-[160px] bg-black rounded-3xl pt-[35px] relative sm:pl-8 px-3">
              <h2 className="text-white text-xl font-semibold">
                Diverse Styles
              </h2>
              <p className="text-white/50 text-[13px] max-w-[255px]">
                We offer a variety of martial arts styles, including Karate,
                Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.
              </p>
              <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                2.
              </div>
            </div>
            <div className="h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative sm:pl-8 px-3">
              <h2 className="text-white text-xl font-semibold">
                Supportive Community
              </h2>
              <p className="text-white/50 text-[13px] max-w-[255px]">
                Join a welcoming and encouraging community that fosters growth
                and camaraderie.
              </p>
              <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                3.
              </div>
            </div>
            <div className="h-[160px] bg-black rounded-3xl pt-[35px] relative sm:pl-8 px-3">
              <h2 className="text-white text-xl font-semibold">
                Holistic Development
              </h2>
              <p className="text-white/50 text-[13px] max-w-[255px]">
                Our programs focus on physical fitness, mental resilience, and
                building confidence.
              </p>
              <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                4.
              </div>
            </div>
            <div className="h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative sm:pl-8 px-3">
              <h2 className="text-white text-xl font-semibold">
                Flexible Training
              </h2>
              <p className="text-white/50 text-[13px] max-w-[255px]">
                We provide classes for all ages and skill levels, ensuring
                everyone can find their perfect fit.
              </p>
              <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                5.
              </div>
            </div>
            <div className="h-[160px] bg-black rounded-3xl pt-[35px] relative sm:pl-8 px-3">
              <h2 className="text-white text-xl font-semibold">
                Community Focus
              </h2>
              <p className="text-white/50 text-[13px] max-w-[255px]">
                Join a community dedicated to your personal growth and
                excellence.
              </p>
              <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                6.
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden block">
        {Why_Join_Us.map((question, index) => (
            <div
              key={index}
              className="bg-white/50 py-6 md:px-10 px-5 rounded-xl mt-5"
            >
              <h2 id={`accordion-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 dark:border-gray-700 dark:text-gray-400 gap-3 focus:outline-none"
                  onClick={() => setWhy_Join_Us_Id(index)}
                  aria-expanded={Why_Join_Us_Id === index}
                  aria-controls={`accordion-body-${index}`}
                >
                  <span>{question.title}</span>
                  <svg
                    className={`w-3 h-3 ${
                      Why_Join_Us_Id === index ? "" : "rotate-180"
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              {Why_Join_Us_Id === index && (
                <div
                  id={`accordion-body-${index}`}
                  aria-labelledby={`accordion-heading-${index}`}
                >
                  <div className="py-2 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-black/50">{question.body}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Instructors section start */}
      <Instructors />
      {/* Download the App */}
      {/* <section className="bg-black py-[107px] px-3 lg:px-8">
        <h2 className="text-[40px] text-white font-medium text-center">
          Download the App to Get more{" "}
          <span className="border-b border-white">Benefits</span>
        </h2>
        <p className="text-[22px] text-center text-white/50 mt-5 max-w-[820px] mx-auto">
          Join us and begin your journey towards ultimate fitness, where you
          will feel empowered, stronger, healthier, and more confident than ever
          before.
        </p>
        <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
          <button className="px-6 py-3 text-black flex items-center bg-white rounded-full text-lg font-medium">
            Get the App
            <IoIosArrowRoundForward className="text-black text-2xl group-hover:text-black  rotate-[-46deg]" />
          </button>
        </div>
      </section> */}
      {/* Work section start */}
      <section>
        <div className="px-3 lg:px-8 py-space pt-[10px]">
          <h2 className="text-black text-[40px] text-center">
            How does it Work?
          </h2>
          <p className="text-black/50 text-lg text-center">
            Below are the steps of how to join as a student:
          </p>
          <div className="mt-12">
            <div className="flex items-center md:justify-between justify-center dotes-border relative flex-wrap gap-y-10">
              <div>
                <div className="h-[192px] w-[192px] rounded-full bg-gay-200 flex items-center justify-center">
                  <NoteIcon />
                </div>
                <h2 className="text-xl text-center mt-4 max-w-[205px]">
                  Sign Up
                </h2>
                <p className="text-sm text-black/70 max-w-[214px] mx-auto text-center mt-1">
                  Quickly create your account and join our martial arts
                  community.
                </p>
              </div>
              <div>
                <div className="h-[192px] w-[192px] rounded-full bg-gay-200 flex items-center justify-center">
                  <VerifyUser />
                </div>
                <h2 className="text-xl text-center mt-4 max-w-[205px]">
                  Get Verified
                </h2>
                <p className="text-sm text-black/70 max-w-[214px] mx-auto text-center mt-1">
                  Complete our simple verification for a safe and secure
                  training environment.
                </p>
              </div>
              <div>
                <div className="h-[192px] w-[192px] rounded-full bg-gay-200 flex items-center justify-center">
                  <HeandWithDots />
                </div>
                <h2 className="text-xl text-center mt-4 max-w-[205px]">
                  Choose your instructor/coach
                </h2>
                <p className="text-sm text-black/70 max-w-[214px] mx-auto text-center mt-1">
                  Select from our experienced instructors to match your style
                  and goals.
                </p>
              </div>
              <div>
                <div className="h-[192px] w-[192px] rounded-full bg-gay-200 flex items-center justify-center">
                  <ArtsJourney />
                </div>
                <h2 className="text-xl text-center mt-4 max-w-[205px]">
                  Begin your martial arts journey
                </h2>
                <p className="text-sm text-black/70 max-w-[214px] mx-auto text-center mt-1">
                  Start training, learn, and achieve your goals with our
                  supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gay-300 px-3 lg:px-8 py-12">
          <div className="flex items-center justify-between flex-wrap gap-y-5">
            <p className="max-w-[960px] text-white text-[22px] font-light">
              <span className="font-semibold">
                Join our network of martial arts professionals
              </span>{" "}
              and empower students with your knowledge. Enjoy the benefits of
              online teaching with a dedicated support system.
            </p>
            <button className="px-6 py-5 text-black flex items-center bg-white rounded-full text-lg font-medium">
              Lead the Way
              <IoIosArrowRoundForward className="text-black text-2xl group-hover:text-black  rotate-[-46deg]" />
            </button>
          </div>
        </div>
      </section>
      {/* Frequently Asked start */}
      <section className="py-space px-3 lg:px-8">
        <h2 className="text-black text-[40px] text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-black/50 text-lg text-center max-w-[750px] mx-auto">
          Welcome to our FAQ section! Here, you'll find answers to common
          questions about our martial arts classes, training, and what to
          expect.
        </p>

        <div className="mt-12">
          {AskedQuestions.map((question, index) => (
            <div
              key={index}
              className="bg-white/50 py-6 md:px-10 px-5 rounded-xl mt-5"
            >
              <h2 id={`accordion-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 dark:border-gray-700 dark:text-gray-400 gap-3 focus:outline-none"
                  onClick={() => setWho_we_are_Id(index)}
                  aria-expanded={Who_we_are_Id === index}
                  aria-controls={`accordion-body-${index}`}
                >
                  <span>{question.title}</span>
                  <svg
                    className={`w-3 h-3 ${
                      Who_we_are_Id === index ? "" : "rotate-180"
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              {Who_we_are_Id === index && (
                <div
                  id={`accordion-body-${index}`}
                  aria-labelledby={`accordion-heading-${index}`}
                >
                  <div className="py-2 border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-black/50">{question.body}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <GetInTouch />
      {pathname === "signup" ? (
        <SignUp open={openModel} onClose={setOpenModel} />
      ) : pathname === "login" ? (
        <Login open={openModel} onClose={setOpenModel} />
      ) : null}
    </>
  );
};

export default Index;
