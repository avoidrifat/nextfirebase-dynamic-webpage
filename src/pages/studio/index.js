/* eslint-disable @next/next/no-img-element */
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
import React, { useEffect } from "react";
import BlackBar from "/public/images/image3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiLoader } from "react-icons/bi";
import NavTest from "@/Components/Navbar/Navtest";
import getStudioData from "@/GetApi/GetStudioData";

const Studio = () => {
  const [data]=getStudioData();

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
      <div
        className="mt-40 text-left"
        data-aos-duration="1500"
      >
        <h1 data-aos="fade-up" className="font-medium text-8xl">
           {data.headerTitle}
        </h1>
        <p data-aos="fade-up" className="w-8/12 mt-6 text-3xl font-medium leading-10 tracking-wide">
        {data.paragraph}
        </p>
      </div>
      <div className="w-full h-[570px] mt-36 overflow-hidden">
        <div className="relative w-full h-full transform scale-100">
          <img
            data-aos="fade-up"
            className="absolute top-0 left-0 object-cover w-full h-full rounded-3xl "
            src={data.url}
            alt={BlackBar}
          />
        </div>
      </div>
      <div data-aos="fade-up" className="mb-12 mt-36">
        <p className="text-2xl font-normal tracking-wide mt-28 ">
        {data.desc1}
          <span className="text-gray-500">&nbsp;
          </span>

        </p>
      </div>
      <div data-aos="fade-up" className="flex flex-row justify-between gap-28 h-[145px] mt-36">
        <h1 className="w-1/2 text-6xl leading-tight ">
          Research & <br />
          Brand Strategy
        </h1>
        <ul className="w-1/2 text-2xl leading-9 list-disc ">
          <li className="pl-4">Brand Strategy</li>
          <li className="pl-4">Research & Insights</li>
          <li className="pl-4">Content Marketing</li>
          <li className="pl-4">User Experience Research</li>
        </ul>
      </div>
      <div data-aos="fade-up" className="mt-36 flex flex-row justify-between gap-28 h-[235px]">
        <h1 className="w-1/2 text-6xl leading-tight ">
          Creative <br />
          Direction & <br />
          Design
        </h1>
        <ul className="w-1/2 text-2xl list-disc">
          <li className="pl-4">Web Design</li>
          <li className="pl-4">UX & UI Design</li>
          <li className="pl-4">Brand Identity</li>
          <li className="pl-4">Interaction Design</li>
          <li className="pl-4">Video Production</li>
          <li className="pl-4">Animation</li>
          <li className="pl-4">Illustration</li>
        </ul>
      </div>

      <div data-aos="fade-up" class=" border-[1px] border-zinc-900 h-[400px] mt-36 justify-center items-center ">
        <div className="flex flex-row items-center justify-center">
          <div className="flex justify-center w-[297px] h-[200px] items-center border-b-2 border-r-2 border-zinc-900">
            <BiLoader className="fill-zinc-600" size={50} />
          </div>
          <div className="flex justify-center items-center w-[297px] h-[200px] border-b-2 border-r-2 border-zinc-900">
            <p className="text-3xl font-semibold text-zinc-600">Ziggo</p>
          </div>
          <div className="flex justify-center items-center w-[297px] h-[200px] border-b-2 border-r-2 border-zinc-900">
            <BiLoader className="fill-zinc-600" size={50} />
          </div>
          <div className="flex justify-center items-center w-[297px] h-[200px] border-b-2 border-zinc-900">
            <p className="text-3xl font-semibold text-zinc-600">Ziggo</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex justify-center items-center w-[297px] h-[200px] border-r-2 border-zinc-900">
            <p className="text-3xl font-semibold text-zinc-600">Ziggo</p>
          </div>
          <div className="flex justify-center items-center w-[297px] h-[200px] border-r-2 border-zinc-900">
            <BiLoader className="fill-zinc-600" size={50} />
          </div>
          <div className="flex justify-center items-center w-[297px] h-[200px] border-r-2 border-zinc-900">
            <p className="text-3xl font-semibold text-zinc-600">Ziggo</p>
          </div>
          <div className="flex justify-center items-center w-[297px] h-[200px]">
            <BiLoader className="fill-zinc-600" size={50} />
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="mt-32">
        <p className="text-6xl font-medium leading-tight tracking-[-0.02em]">
        {data.desc2}
           <span className="text-gray-500"></span> <br/>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Studio;
