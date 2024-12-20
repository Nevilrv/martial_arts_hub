import React, { useEffect, useState } from "react";
import InstructorsCard from "./Instructors_Card";
import Slider from "react-slick";
import {
  GetInstructors,
  InstructorLike,
} from "../../services/student/Homepage/Homepage";
import Spinner from "../../layouts/Spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Instructors = () => {
  const [Instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Like, setLike] = useState(false);
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // eslint-disable-next-line
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  const getInstructors = async () => {
    setLoading(true);
    const result = await GetInstructors();
    if (result?.success === true) {
      setLoading(false);
      setInstructors(result.data);
    } else {
      toast.error("message");
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstructors();
  }, []);

  const HeandleLike = async (id) => {
    setLoading(true);
    const result = await InstructorLike(
      id,
      JSON.parse(localStorage.getItem("_id"))
    );
    if (result?.success === true) {
      setLoading(false);
      setLike(!Like);
      getInstructors()
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        toast.error("Please Login");
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <section className="md:py-space pb-20 px-3 lg:px-8">
        <h2 className="font-medium text-[32px]">Our Instructors</h2>
        <Slider {...settings} className="mt-5 slider-2 relative">
          {Instructors.map((items, i) => (
            <InstructorsCard data={items} HeandleLike={()=>HeandleLike(items.instructorId)} key={i} />
          ))}
        </Slider>
        <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate(`/instructors/all`)}
          className="bg-transparent h-[55px] text-white hover:text-black text-xl leading-8 px-7 py-4 rounded-full flex justify-center items-center relative after:absolute after:bg-black after:h-full after:w-full after:bottom-0 after:left-0 hover:after:h-0 after:transition-[2s] after:-z-20 overflow-hidden border border-black"
        >
          View More
        </button>
        </div>
      </section>
    </>
  );
};

export default Instructors;
