import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between mb-28 mt-36">
      <div className="w-7/12 ">
        <h2 className="mb-8 text-2xl font-normal leading-normal tracking-wide font-dm-sans">
          We specialize in crafting exceptional digital experiences to help our
          clients achieve their business goals.
        </h2>
        <button
          type="button"
          className="px-[18px] py-[10px] m-1 text-black bg-white rounded-full border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
        >
          Get For Free
        </button>
      </div>
      <div className="w-4/12 ">
        <p className="text-[10px] cursor-pointer mb-7">EXPLORE</p>
        <div className="flex flex-row items-start justify-between ">
          <div className="items-start justify-between w-1/2 ">
            <p className="mt-1 cursor-pointer">Work</p>
            <p className="mt-2 cursor-pointer">Studio</p>
            <p className="mt-2 cursor-pointer">Contact</p>
          </div>
          <div className="items-start w-1/2 ">
            <p className="mt-1 cursor-pointer">Twitter</p>
            <p className="mt-2 cursor-pointer">Dribble</p>
            <p className="mt-2 cursor-pointer">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
