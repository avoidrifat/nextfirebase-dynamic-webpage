// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const HoverableText = ({ initialText, hoverText }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [text, setText] = useState(initialText);

//   const handleMouseOver = () => {
//     setIsHovered(true);
//     setText(hoverText);
//   };

//   const handleMouseOut = () => {
//     setIsHovered(false);
//     setText(initialText);
//   };

//   return (
//     <h1
//       className="relative"
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//     >
//       <motion.span
//         initial={{ y: 0, opacity: 1 }}
//         animate={{ y: isHovered ? -50 : 0, opacity: isHovered ? 0 : 1 }}
//         transition={{ duration: 0.3 }}
//         // style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//         style={{ position: "absolute", top: 0, left: 0 }}
//       >
//         {text}
//       </motion.span>
//       <motion.span
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: isHovered ? 0 : 50, opacity: isHovered ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         // style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%" }}
//         style={{ position: "absolute", top: 0, left: 0, color:"dimgray"}}
//       >
//         {hoverText}
//       </motion.span>
//     </h1>
//   );
// };

// export default HoverableText;
import React, { useEffect } from "react";
import Image from "next/image";
import MobileImage from "/public/images/image1.png";
import DashBoard from "/public/images/image.png";
import BlackBar from "/public/images/image3.webp";
import styles from "./Test.module.css";
import AOS from "aos";
import { BsArrowRight } from "react-icons/bs";
import "aos/dist/aos.css";

const CardTest = () => {
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
    <>
      <div className={`flex justify-between  `}>
        <div
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
      </div>
    </>
  );
};

export default CardTest;
