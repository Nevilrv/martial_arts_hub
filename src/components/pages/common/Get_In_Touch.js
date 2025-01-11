import React, { useState } from 'react'
import { Envelop } from '../../../assets/icon'
import { Contact_Us } from '../../services/Admin/ContactUs/ContactUs';
import { toast } from 'react-toastify';
import Spinner from '../../layouts/Spinner';

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [contactdata, setcontactdata] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setcontactdata({
      ...contactdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleConatct = async () => {
    setLoading(true);
    const body = {
      fullName: contactdata.fullName,
      email: contactdata.email,
      message: contactdata.message
    };
    const result = await Contact_Us(body)
    if (result?.success === true) {
      setLoading(false);
      setcontactdata({
        fullName: "",
        email: "",
        message: ""
      });
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <section className="py-[40px] px-3 lg:px-8 bg-black">
        <div className="flex items-center justify-between flex-wrap">
          <div>
            <h2 className="text-[40px] text-white">
              Get in touch with us anytime!
            </h2>
            <p className="text-white/50 text-lg mt-3">
              You can always send us a email or message. <br /> We will be happy
              to help you out.
            </p>
            <div className="flex align-center gap-4 mt-12">
              <div className="flex items-center justify-center h-[52px] w-[52px] rounded-full border border-white/50">
                <Envelop />
              </div>
              <div>
                <h3 className="text-white text-base">Shoot us an email</h3>
                <p className="text-white/50 text-base">yourcompany@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col gap-5 md:mt-0 mt-14 md:w-auto w-full">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={contactdata.fullName}
              onChange={handleChange}
              className="bg-transparent border border-white/30 text-lg placeholder:text-lg placeholder:text-white/50 text-white py-5 pl-8 md:min-w-[485px] w-full  rounded-2xl"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={contactdata.email}
              onChange={handleChange}
              className="bg-transparent border border-white/30 text-lg placeholder:text-lg placeholder:text-white/50 text-white py-5 pl-8 md:min-w-[485px] w-full rounded-2xl"
            />
            <textarea
              placeholder="Enter your message here"
              name="message"
              value={contactdata.message}
              onChange={handleChange}
              className="bg-transparent border border-white/30 text-lg placeholder:text-lg placeholder:text-white/50 text-white py-5 pl-8 md:min-w-[485px] w-full rounded-2xl min-h-[150px]"
            ></textarea>
            <button onClick={() => { handleConatct() }} className="md:w-[485px] w-full h-[70px] font-medium rounded-full bg-white text-black flex items-center justify-center text-xl mt-5">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInTouch
