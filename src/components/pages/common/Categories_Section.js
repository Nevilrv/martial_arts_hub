import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import CategoriesCard from "./Categories_Card";
import { Category_Sub_List } from "../../services/Admin/Discipline_Centre/Discipline_Centre";
import { toast } from "react-toastify";
import Spinner from "../../layouts/Spinner";

const CategoriesSection = () => {
  const [category_list, Set_Category_List] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [FindCategorie, SetFindCategorie] = useState("");
  const [Loading, setLoading] = useState(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: true,
        },
      },
    ],
  };

  const Get_Sub_Cgory_List = async () => {
    setLoading(true);
    const result = await Category_Sub_List();
    if (result?.success === true) {
      setLoading(false);
      Set_Category_List(result.data);
      setFilteredCategories(result.data);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  useEffect(() => {
    Get_Sub_Cgory_List();
    // eslint-disable-next-line
  }, []);

  const handleSearch = () => {
    if (FindCategorie === "") {
      setFilteredCategories(category_list); // If search is empty, show the full list
    } else {
      const filtered = category_list.filter(
        (item) =>
          item.categoryName &&
          item.categoryName.toLowerCase().includes(FindCategorie.toLowerCase())
      );
      setFilteredCategories(filtered); // Show the filtered results
    }
  };
  
  useEffect(() => {
    handleSearch(); // Call handleSearch whenever FindCategorie changes
    // eslint-disable-next-line
  }, [FindCategorie, category_list]); // Make sure to include category_list in dependencies if it can change
  

  return (
    <>
      {Loading && <Spinner />}
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
                value={FindCategorie}
                onChange={(e) => {
                  SetFindCategorie(e.target.value);
                }}
              />
              <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl" />
              <button
                className="px-4 py-3 h-[50px] bg-black text-white text-base rounded-full absolute top-0 right-0"
                onClick={handleSearch}
              >
                Find
              </button>
            </div>
          </div>
          <Slider {...settings} className="mt-5 slider-1">
            {filteredCategories?.map((items, i) => (
              <CategoriesCard data={items} key={i} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
