/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/Components/Footer/Footer";
import React, { useEffect } from "react";
import MobileImage from "/public/images/image1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import styles from "../../Test/Test.module.css";
import NavTest from "@/Components/Navbar/Navtest";
import getProjectData from "@/GetApi/GetProjectData";
import Link from "next/link";
import getWorkData from "@/GetApi/GetWorkData";

const Work = () => {
  const [data] = getProjectData();
  const [datatext] = getWorkData();
  console.log(data);

  useEffect(() => {
    AOS.init({
      duration: 1700,
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
        className="mt-56 text-left"
        data-aos="fade-up"
        data-aos-duration="1700"
      >
            <div >
              <h1 className="font-medium text-8xl">{datatext.headerTitle}</h1>
              <p className="w-8/12 mt-6 text-3xl font-normal leading-10 tracking-wide">
                {datatext.header1}
              </p>
            </div>
      </div>

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

      <Footer />
    </>
  );
};

export default Work;

{
  /* <div
        data-aos="zoom-in"
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center w-1/2 ml-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>
          <div>
            <Image
              className={` ${styles.img} `}
              src={DashBoard}
              alt={DashBoard}
              width={500}
              height={300}
            />
          </div>
        </div> */
}

{
  /* <div className="flex mt-6">
        <a className="flex items-center w-1/2 gap-3 cursor-pointer">
          <span className="items-start">Suitcase App</span>
          <BsArrowUpRight size={15} />
        </a>
        <a className="flex items-center w-1/2 gap-3 ml-12 cursor-pointer">
          <span className="items-start">VoltBike</span>
          <BsArrowUpRight size={15} />
        </a>
      </div> */
}

{
  /* <div
        data-aos="zoom-in"
        className={` ${styles.hoverdiv} flex items-center justify-center w-full h-[660px] mt-20 rounded-3xl bg-violet-200`}
      >
        <div className={styles.arrowBtn}>
          <h1 className={styles.arrow}>
            <BsArrowRight />
          </h1>
        </div>
        <div>
          <Image
            className={` ${styles.img} `}
            src={WhitePage}
            alt="WhitePage"
            width="100%"
            height={600}
          />
        </div>
      </div> */
}

{
  /* <div className="mt-6 ">
        <a className="flex items-center w-1/2 gap-3 cursor-pointer">
          <span className="items-start">Suitcase App</span>
          <BsArrowUpRight size={15} />
        </a>
      </div> */
}

{
  /* <div className={`flex justify-between mt-20 `}>
        <div
        data-aos="zoom-in"
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center w-1/2 mr-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>

          <div>
            <Image
              className={`mt-5  ${styles.img} `}
              src={MobileImage}
              alt={MobileImage}
              width={180}
              height={150}
            />
          </div>
        </div>
        <div
        data-aos="zoom-in"
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center w-1/2 ml-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>
          <div>
            <Image
              className={` ${styles.img} `}
              src={DashBoard}
              alt={DashBoard}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div> */
}

{
  /* <div className="flex mt-6">
        <a className="flex items-center w-1/2 gap-3 cursor-pointer">
          <span className="items-start">Suitcase App</span>
          <BsArrowUpRight size={15} />
        </a>
        <a className="flex items-center w-1/2 gap-3 ml-12 cursor-pointer">
          <span className="items-start">VoltBike</span>
          <BsArrowUpRight size={15} />
        </a>
      </div> */
}

{
  /* <div className={`flex justify-between mt-20 `}>
        <div
        data-aos="zoom-in"
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center w-1/2 mr-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>

          <div>
            <Image
              className={`mt-5  ${styles.img} `}
              src={MobileImage}
              alt={MobileImage}
              width={180}
              height={150}
            />
          </div>
        </div>
        <div
        data-aos="zoom-in"
          className={`${styles.hoverdiv} h-[450px] relative flex items-center justify-center w-1/2 ml-6 rounded-3xl bg-violet-200`}
        >
          <div className={styles.arrowBtn}>
            <h1 className={styles.arrow}>
              <BsArrowRight />
            </h1>
          </div>
          <div>
            <Image
              className={` ${styles.img} `}
              src={DashBoard}
              alt={DashBoard}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div> */
}

{
  /* <div className="flex mt-6">
        <a className="flex items-center w-1/2 gap-3 cursor-pointer">
          <span className="items-start">Suitcase App</span>
          <BsArrowUpRight size={15} />
        </a>
        <a className="flex items-center w-1/2 gap-3 ml-12 cursor-pointer">
          <span className="items-start">VoltBike</span>
          <BsArrowUpRight size={15} />
        </a>
      </div> */
}
