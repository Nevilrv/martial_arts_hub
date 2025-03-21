import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { Subscribe } from "../services/Admin/ContactUs/ContactUs";
import { Routing } from "../shared/Routing";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const [isOpen, SetisOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const handlesubcribe = async () => {
    setLoading(true);
    const body = {
      fullName: "",
      email: email,
      message: ""
    };
    const result = await Subscribe(body)
    if (result?.success === true) {
      setLoading(false);
      setEmail("")
      // toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };

  const handleScroll = (elementId) => {
    if (window.location.pathname !== Routing.Initial) {
      navigate(Routing.Initial);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); 
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  
  return (
    <>
      {loading && <Spinner />}
      <footer className="px-3 lg:px-8 pt-16 pb-1" name="Contact_Us">
        <div className="flex items-start justify-between flex-wrap gap-y-10">
          <div>
            <h2 className="font-extrabold text-lg leading-[21.6px] tracking-[-1px]">
              martial arts hub.
            </h2>
            <p className="max-w-[245px] text-sm text-black/50">
              Created by martial artists for martial artists.
            </p>
            <div className="flex items-center gap-5 mt-4">
              <FaFacebookF />
              <FaTwitter />
              <a href="https://www.instagram.com/martialartshub.co?igsh=MXAzdzRneDNldGU1OQ==" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-black text-xl font-medium">About</h2>
            <p className="text-[15px] hover:text-black text-black/50 cursor-pointer" onClick={() => { handleScroll('WhoWeAre'); navigate(Routing.Initial) }}>Who we are</p>
            <p className="text-[15px] hover:text-black text-black/50 cursor-pointer" onClick={() => { handleScroll('WhyJoinUs') }}>Why Join Us</p>
            <p className="text-[15px] hover:text-black text-black/50 cursor-pointer" onClick={() => navigate(`/instructors/all`)}>Instructors</p>
          </div>
          <div>
            <h2 className="text-black text-xl font-medium">Support</h2>
            <p className="text-[15px] hover:text-black text-black/50 cursor-pointer" onClick={() => { handleScroll('gta') }}>Contact Us</p>
            <p className="text-[15px] hover:text-black text-black/50 cursor-pointer">Privacy Policy</p>
            <p className="text-[15px] hover:text-black text-black/50 cursor-pointer">Terms & Conditions</p>
            <p className="text-[15px] hover:text-black text-black/50 cursor-pointer" onClick={() => { handleScroll('FAQ') }}>Frequently Asked Questions</p>
          </div>
          <div className="md:w-auto w-full">
            <h2 className="text-xl font-medium">Want to stay updated?</h2>
            <p className="text-[15px] text-black/50">Subscribe to our newsletter</p>
            <div className="relative">
              <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="md:w-[300px] w-full h-[50px] bg-white border border-[#54535680] pl-6 rounded-full focus:outline-none pr-[70px]" placeholder="Enter Email" />
              <button onClick={() => { handlesubcribe() }} className="h-[50px] w-[68px] bg-black rounded-full text-white absolute top-0 right-0">Join</button>
            </div>
          </div>
        </div>
        <div className="mt-[131px] mb-1">
          <p className="text-center text-sm">
            © Copyright 2024 - <span className="font-bold">martial arts hub.</span>, All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
