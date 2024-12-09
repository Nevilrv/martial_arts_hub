import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
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
              <IoLogoInstagram />
            </div>
          </div>
          <div>
            <h2 className="text-black text-xl font-medium">About</h2>
            <p className="text-[15px] text-black/50">Who we are</p>
            <p className="text-[15px] text-black/50">Why choose us</p>
            <p className="text-[15px] text-black/50">Our Categories</p>
          </div>
          <div>
            <h2 className="text-black text-xl font-medium">Support</h2>
            <p className="text-[15px] text-black/50">Contact Us</p>
            <p className="text-[15px] text-black/50">Privacy Policy</p>
            <p className="text-[15px] text-black/50">Terms & Conditions</p>
            <p className="text-[15px] text-black/50">Frequently Asked Questions</p>
          </div>
          <div className="md:w-auto w-full">
            <h2 className="text-xl font-medium">Want to stay updated?</h2>
            <p className="text-[15px] text-black/50">Subscribe to our newsletter</p>
            <div className="relative">
              <input type="email" className="md:w-[300px] w-full h-[50px] bg-white border border-[#54535680] pl-6 rounded-full focus:outline-none pr-[70px]" placeholder="Enter Email" />
              <button className="h-[50px] w-[68px] bg-black rounded-full text-white absolute top-0 right-0">Join</button>
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
