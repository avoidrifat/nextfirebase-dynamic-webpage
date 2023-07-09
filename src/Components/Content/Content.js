/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Image from "next/image";
import MobileImage from "/public/images/image1.png";
import DashBoard from "/public/images/image.png";
import BlackBar from "/public/images/image3.webp";
import AOS from "aos";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import "aos/dist/aos.css";
import styles from "../../Test/Test.module.css";
import getHomeData from '@/GetApi/GetHomeData';
import Link from "next/link";
import getProjectData from "@/GetApi/GetProjectData";

const Content = () => {
  const [homedata]=getHomeData();
  const [data] = getProjectData();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
      delay: 100,
      mirror: false,
      once: true,
    });
  }, []);
  return (
    <div className="mt-36">


<div className="grid grid-cols-2 grid-rows-2 gap-8">
        {data.map((d) => {
          return (
            <>
              <div className={` justify-between mt-36 `}>
                <div
                  data-aos="zoom-in"
                  className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center rounded-3xl bg-violet-200`}
                >
                  <Link href={`work/${d.id}`} className={styles.arrowBtn}>
                    <h1 className={styles.arrow}>
                      <BsArrowRight />
                    </h1>
                  </Link>

                  <div>
                    <img
                      className={`mt-5  ${styles.img} imgSize `}
                      // src={MobileImage}
                      src={d.allImages[0]}
                      alt={MobileImage}
                    />
                  </div>
                </div>
                <a className="flex items-center w-1/2 gap-3 mt-4 cursor-pointer">
                  <span className="items-start">Suitcase App </span>
                  <BsArrowUpRight size={15} />
                </a>
              </div>

              <div className={` justify-between mt-36 `}>
                <div
                  data-aos="zoom-in"
                  className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center rounded-3xl bg-violet-200`}
                >
                  <Link href={`work/${d.id}`} className={styles.arrowBtn}>
                    <h1 className={styles.arrow}>
                      <BsArrowRight />
                    </h1>
                  </Link>

                  <div>
                    <img
                      className={`mt-5  ${styles.img} imgSize `}
                      // src={MobileImage}
                      src={d.allImages[1]}
                      alt={MobileImage}
                    />
                  </div>
                </div>
                <a className="flex items-center w-1/2 gap-3 mt-4 cursor-pointer">
                  <span className="items-start">Suitcase App</span>
                  <BsArrowUpRight size={15} />
                </a>
              </div>
              <div className={` justify-between mt-36 `}>
                <div
                  data-aos="zoom-in"
                  className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center rounded-3xl bg-violet-200`}
                >
                  <Link href={`work/${d.id}`} className={styles.arrowBtn}>
                    <h1 className={styles.arrow}>
                      <BsArrowRight />
                    </h1>
                  </Link>

                  <div>
                    <img
                      className={`mt-5  ${styles.img} imgSize `}
                      // src={MobileImage}
                      src={d.allImages[1]}
                      alt={MobileImage}
                    />
                  </div>
                </div>
                <a className="flex items-center w-1/2 gap-3 mt-4 cursor-pointer">
                  <span className="items-start">Suitcase App</span>
                  <BsArrowUpRight size={15} />
                </a>
              </div>

              <div className={` justify-between mt-36 `}>
                <div
                  data-aos="zoom-in"
                  className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center rounded-3xl bg-violet-200`}
                >
                  <Link href={`work/${d.id}`} className={styles.arrowBtn}>
                    <h1 className={styles.arrow}>
                      <BsArrowRight />
                    </h1>
                  </Link>

                  <div>
                    <img
                      className={`mt-5  ${styles.img} imgSize `}
                      // src={MobileImage}
                      src={d.allImages[1]}
                      alt={MobileImage}
                    />
                  </div>
                </div>
                <a className="flex items-center w-1/2 gap-3 mt-4 cursor-pointer">
                  <span className="items-start">Suitcase App</span>
                  <BsArrowUpRight size={15} />
                </a>
              </div>
            </>
          );
        })}
      </div>

      <div data-aos="fade-up" className="mb-12 mt-36 ">
        <p className="text-3xl font-normal tracking-wide text-justify ">
        {homedata.desc}
        </p>

        <div className="w-full h-[570px] mt-36 overflow-hidden">
          <div className="relative w-full h-full transform scale-100">
            <img src={homedata.url} alt="image" className="imgSize" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;


{/* <div data-aos="zoom-in"
      className="flex justify-between h-[450px] ">
        <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-1/2 mr-6 rounded-3xl bg-violet-200">
        <div className="arrowBtn"><h1 className="arrow"><AiOutlineArrowRight/></h1></div>

          <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              className="mt-5 "
              src={MobileImage}
              alt={MobileImage}
              width={180}
              height={150}
            />
          </motion.div>
        </motion.div>
        <div
          data-aos="zoom-in"
        className="flex items-center justify-center w-1/2 ml-6 rounded-3xl bg-violet-200">
          <motion.div

            className=""
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              className=""
              src={DashBoard}
              alt={DashBoard}
              width={500}
              height={300}
            />
          </motion.div>
        </div>
      </div> */}

      {/* <div className={`lg:flex lg:justify-between  `}>
        <div
          className={`${styles.hoverdiv}  h-[450px] relative flex items-center justify-center lg:w-1/2 md:w-full lg:mr-6 md:mb-8 rounded-3xl bg-violet-200`}
        >
          <Link href="/projects/suitcase">
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>

          <div>
            <img
              className={`mt-5  ${styles.img} `}
              src={MobileImage}
              alt={MobileImage}
              width={180}
              height={150}
            />
          </div>
          </Link>
        </div>
        <div
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center lg:w-1/2 md:w-full lg:ml-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>
          <div>
            <img
              className={` ${styles.img} `}
              src={DashBoard}
              alt={DashBoard}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <a className="flex items-center w-1/2 gap-3 cursor-pointer">
          <span className="items-start">Suitcase App</span>
          <BsArrowUpRight size={15} />
        </a>
        <a className="flex items-center w-1/2 gap-3 ml-12 cursor-pointer">
          <span className="items-start">VoltBike</span>
          <BsArrowUpRight size={15} />
        </a>
      </div>

      <div className={`flex justify-between mt-10 `}>
        <div
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center w-1/2 mr-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>

          <div>
            <img
              className={` ${styles.img} `}
              src={DashBoard}
              alt={DashBoard}
              width={500}
              height={300}
            />
          </div>

        </div>
        <div
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center w-1/2 ml-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>
          <div>
            <img
              className={`mt-5  ${styles.img} `}
              src={MobileImage}
              alt={MobileImage}
              width={180}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <a className="flex items-center w-1/2 gap-3 cursor-pointer">
          <span className="items-start">Project Title</span>
          <BsArrowUpRight size={15} />
        </a>
        <a className="flex items-center w-1/2 gap-3 ml-12 cursor-pointer">
          <span className="items-start">Project Title</span>
          <BsArrowUpRight size={15} />
        </a>
      </div> */}