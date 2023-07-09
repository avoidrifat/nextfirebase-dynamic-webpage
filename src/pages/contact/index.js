/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Footer from "@/Components/Footer/Footer";
import React, { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import NavTest from "@/Components/Navbar/Navtest";
import getContactData from "@/GetApi/GetContactData";

const Contact = () => {
  const [data]=getContactData();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 50,
      delay: 50,
      mirror: false,
      once: true,
    });
  }, []);
  return (
    <>
      <NavTest />
      <div data-aos="fade-up" className="mt-40 text-left">
        <h1 data-aos="fade-up" className=" text-8xl">
          {data.headerTitle}
        </h1>
        <p className="w-8/12 text-3xl font-normal tracking-wider mt-7">
        {data.paragraph}
        </p>
      </div>
      <div className="flex flex-row justify-between gap-28 mt-36 ">
        <div data-aos="fade-up">
          <h1 className="text-6xl">
          {data.email}
        </h1>
          <div className="flex gap-7 mt-9">
            <a className="flex items-center gap-3 cursor-pointer">
              <span>Twitter</span>
              <BsArrowUpRight size={15} />
            </a>
            <a className="flex items-center gap-3 cursor-pointer">
              <span>Dribble</span>
              <BsArrowUpRight size={15} />
            </a>
            <a className="flex items-center gap-3 cursor-pointer">
              <span>Instagram</span>
              <BsArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" className="w-2/5 text-2xl leading-9 list-disc ">
          <p className="pl-4">
          {data.address1}
             <br />
            <span className="text-gray-500"></span>
            <br />
            <span className="text-gray-500"></span>
          </p>
          <p className="pl-4 mt-10">
          {data.address2}
            <br />
            <span className="text-gray-500"></span>
            <br />
            <span className="text-gray-500"></span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
