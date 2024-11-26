import React from "react";
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import CategoriesCard from "./Categories_Card";
import Boxing from "../../../assets/images/Boxing.png"
import Judo from "../../../assets/images/Judo.png"
import BrazilianJitsu from "../../../assets/images/BrazilianJitsu.png"
import Wrestling from "../../../assets/images/Wrestling.png"


const CategoriesSection = () => {
  const data = [
    {
      images:Wrestling,
      className: "Wrestling",
      details:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
    },
    {
      images:BrazilianJitsu,
      className: "Brazilian Jiu Jitsu",
      details:
        "A ground-based martial art emphasizing submissions and positional control using leverage and technique.",
    },
    {
      images:Judo,
      className: "Judo",
      details:
        "A Japanese martial art focused on throws, joint locks, and pins, teaching how to use an opponent's force against them.",
    },
    {
      images:Boxing,
      className: "Boxing",
      details:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
    },
    {
      images:Wrestling,
      className: "Wrestling",
      details:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
    },
    {
      images:BrazilianJitsu,
      className: "Brazilian Jiu Jitsu",
      details:
        "A ground-based martial art emphasizing submissions and positional control using leverage and technique.",
    },
    {
      images:Judo,
      className: "Judo",
      details:
        "A Japanese martial art focused on throws, joint locks, and pins, teaching how to use an opponent's force against them.",
    },
    {
      images:Boxing,
      className: "Boxing",
      details:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
    },
    
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false
        },
      },
    ],
  };
  return (
    <>
      <section className="md:py-space py-10">
        <div className="px-3 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-y-3">
            <h2 className="md:text-[32px] text-[23px] font-medium leading-10">
              Explore our Categories
            </h2>
            <div className="relative">
              <input
                type="text"
                className="md:w-[315px] w-full h-[50px] border border-black/80 rounded-full bg-transparent placeholder:text-[15px] placeholder:text-black/40 pl-[44px] pr-[52px]"
                placeholder="Search Category"
              />
              <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl" />
              <button className="px-4 py-3 h-[50px] bg-black text-white text-base rounded-full absolute top-0 right-0">
                Find
              </button>
            </div>
          </div>
          {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-5 gap-6"> */}
          <Slider {...settings} className="mt-5 slider-1" >
            {data.map((items, i) => (
              <CategoriesCard data={items} key={i} />
            ))}
          </Slider>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
