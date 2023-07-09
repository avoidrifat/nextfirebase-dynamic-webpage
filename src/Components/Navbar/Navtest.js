import Link from "next/link";
import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NavTest = () => {
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

  const [navbar, setNavbar] = useState(false);

  return (
    <nav data-aos="fade-down" className={` border-none lg:fixed lg:top-0 lg:z-10 lg:w-[1191px] bg-black bg-opacity-25  backdrop-filter backdrop-blur-md `}>
      <div className="justify-between lg:max-w-7xl md:items-center md:flex">
        <div className="">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-3xl font-medium text-white">oslo</h2>
            </Link>
            <div className="md:hidden md:text-center md:justify-center">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white">
                <Link href="/work">Work</Link>
              </li>
              <li className="text-white">
                <Link href="/studio">Studio</Link>
              </li>
              <li className="text-white">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="">
                <Link href="/admin"
                  type="button"
                  className="px-4 py-[.45rem] text-black bg-white rounded-full border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
                >
                  Remix
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavTest;













// import React, { useState } from "react";
// import { ImMenu } from "react-icons/im";
// import { RiCloseLine } from "react-icons/ri";

// const NavTest = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
//           <a href="https://flowbite.com/" className="flex items-center">
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
//               Flowbite
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded="false"
//             onClick={toggleMobileMenu}
//           >
//             <span className="sr-only">Open main menu</span>
//             {isMobileMenuOpen ? (
//               <RiCloseLine className="w-6 h-6" />
//             ) : (
//               <ImMenu className="w-6 h-6" />
//             )}
//           </button>
//           <div
//             className={`${
//               isMobileMenuOpen ? "block" : "hidden"
//             } w-full md:block md:w-auto`}
//             id="navbar-default"
//           >
//             {/* Mobile menu items */}
//             <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavTest;