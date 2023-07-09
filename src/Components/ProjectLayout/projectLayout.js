/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "@/Components/Footer/Footer";
import NavTest from "@/Components/Navbar/Navtest";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Suitcase1 from "../../../public/images/suitcase1.png";
import Suitcase2 from "../../../public/images/suitcase2.png";
import Suitcase3 from "../../../public/images/suitcase3.png";
import { useRouter } from "next/router";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../../firebaseConfig";

const ProjectLayout = ({ children }) => {
  const router = useRouter();
  const id = router.query.project;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const databaseRef = doc(db, "projects", `${id}`);

  useEffect(() => {
    getDoc(databaseRef).then((doc) => {
      setData(doc.data());
      setLoading(false);
    });
  }, [id]);

  console.log(data);

  return (
    <>
      <NavTest />
      <div
        className="text-left mt-44"
        data-aos="fade-up"
        data-aos-duration="1700"
      >
        <h1 className="text-6xl font-medium">
          {/* Suitcase App */}
          {data.headerTitle}
        </h1>
        <p className="w-8/12 mt-6 text-3xl font-normal leading-10 tracking-wide">
          {/* Travel Smart & Safely */}
          {data.title2}
        </p>
      </div>
      <div data-aos="fade-up" className="mt-16 mb-12">
        <p className="w-9/12 text-2xl font-normal tracking-wide text-justify">
          Ziggo, the smart suitcase app that lets you control your luggage like
          a smart home! With Ziggo, you can easily lock and unlock your
          suitcase, check the battery level, and even receive notifications if
          your suitcase strays too far from you.
          {/* {data.paraTop} */}
          <span className="text-gray-500">&nbsp;</span>
        </p>
      </div>
      <div data-aos="fade-up" className="grid grid-flow-col grid-rows-1">
        <div className="text-white ">
          <p>
            {/* Client */}
            {/* {data.client} */}
            {data.row}
          </p>
          <p className="text-gray-500">
            Client Example
            {/* {data.clientex} */}
          </p>
        </div>
        <div className="text-white ">
          <p>
            Services
            {/* {data.services} */}
          </p>
          <p className="text-gray-500">
            Visual Design
            {/* {data.services1} */}
          </p>
          <p className="text-gray-500">
            UI & UX Design
            {/* {data.services2} */}
          </p>
        </div>
        <div className="text-white ">
          <p>
            Industries
            {/* {data.industries} */}
          </p>
          <p className="text-gray-500">
            Travel
            {/* {data.industriesex} */}
          </p>
        </div>
        <div className="text-white ">
          <p>Date</p>
          <p className="text-gray-500">
            January 2023
            {/* {data.date} */}
          </p>
        </div>
      </div>
      <div className="mt-24 overflow-hidden rounded-3xl  h-[600px] ">
        {data.allImages && data.allImages.length > 0 && (
          <img src={data.allImages[0]} alt="First Image" className="imgSize"/>
        )}
      </div>
      <div data-aos="fade-up" className="mt-32">
        <p className="text-2xl font-normal tracking-wide text-justify">
          Through extensive user research, we discovered that many e-bike users
          felt overwhelmed by the technology and controls on their bikes. To
          address this, we created a simple and intuitive interface that allows
          riders to easily adjust their level of assist and monitor their
          battery life. We also incorporated GPS navigation, allowing riders to
          plan their route and track their progress.
          {/* {data.paraMid} */}
          <span className="text-gray-500">&nbsp;</span>
        </p>
      </div>
      <div className="mt-32 overflow-hidden rounded-3xl  h-[600px] ">
      {data.allImages && data.allImages.length > 0 && (
          <img src={data.allImages[1]} alt="First Image" className="imgSize " />
        )}
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl  h-[600px] ">
      {data.allImages && data.allImages.length > 0 && (
          <img src={data.allImages[2]} alt="First Image" className="imgSize" />
        )}
      </div>
      <div data-aos="fade-up" className="mt-32">
        <p className="text-2xl font-normal tracking-wide text-justify">
          The end result is a user-friendly electric bicycle that makes it easy
          for riders to enjoy the benefits of e-bikes without feeling
          overwhelmed by technology. With VoltBike, riding smarter has never
          been easier!
          {/* {data.paraBot} */}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ProjectLayout;
