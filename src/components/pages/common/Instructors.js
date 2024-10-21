import React, { useEffect, useState } from "react";
import InstructorsCard from "./Instructors_Card";
import Slider from "react-slick";
import { GetInstructors } from "../../services/student/Homepage/Homepage";
import Spinner from "../../layouts/Spinner";

const Instructors = () => {
  const [Instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

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
      console.log(result.data, "========>Instructors data");
      setInstructors(result.data);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <section className="md:py-space pb-20 px-3 lg:px-8">
        <h2 className="font-medium text-[32px]">Our Instructors</h2>
        <Slider {...settings} className="mt-5 slider-2 relative">
          {Instructors.map((items, i) => (
            <InstructorsCard data={items} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Instructors;
