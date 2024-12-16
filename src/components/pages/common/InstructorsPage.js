import React, { useEffect, useState } from "react";
import InstructorsCard from "./Instructors_Card";
import { GetInstructors, GetLikesChek, InstructorLike } from "../../services/student/Homepage/Homepage";
import { toast } from "react-toastify";
import Spinner from "../../layouts/Spinner";
import { Routing } from "../../shared/Routing";
import { useNavigate, useParams } from "react-router-dom";

const InstructorsPage = () => {
  const [Instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Like, setLike] = useState(false);
  const navigate = useNavigate();
  const {maincategory} = useParams()

  const getInstructors = async () => {
    setLoading(true);
    const result = await GetInstructors(maincategory||null);
    if (result?.success === true) {
      setLoading(false);
      setInstructors(result.data);
    } else {
      toast.error("message")
      setLoading(false);
    }
  };

  useEffect(() => {
    getInstructors();
    // eslint-disable-next-line
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
      CheckLikes(id)
      getInstructors()
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        localStorage.clear();
        navigate(Routing.Initial);
        toast.error("Please Login");
      }
      setLoading(false);
    }
  };

  const CheckLikes = async (id) => {
    setLoading(true);
    const result = await GetLikesChek(JSON.parse(localStorage.getItem("_id")));
    if (result?.success === true) {
      setLoading(false);
      result.data.forEach((data) => {
        if (data.instructorId === id) {
          setLike(true);
        }
      });
    } else {
      if (
        result?.message === "Invalid token, Please Log-Out and Log-In again"
      ) {
        localStorage.clear();
        navigate(Routing.Initial);
        toast.error("Please Login");
      }
      setLoading(false);
    }
  };



  return (
    <>
      {loading && <Spinner />}
      <section className=" pb-20 px-3 lg:px-8">
        <h2 className="font-medium text-[32px]">Our Instructors</h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-6 grid-cols-1 mt-10 gap-y-10">
          {Instructors.map((items, i) => (
            <InstructorsCard data={items} HeandleLike={()=>HeandleLike(items.instructorId)} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default InstructorsPage;
