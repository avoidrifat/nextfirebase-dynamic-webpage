import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import getHomeData from '@/GetApi/GetHomeData';

const Hero = () => {

    const [homedata]=getHomeData();

    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
                <div className="bg-black pt-36" data-aos="fade-up" data-aos-duration="1500">
                <div
                    className="tracking-wide text-left lg:w-5/12 md:w-7/12"
                >
                    <p className="text-2xl">
                        {homedata.header1}
                    </p>
                </div>
                <div className="mt-8 lg:flex">
                    <h1 className="font-medium sm:text-xl md:text-4xl lg:text-8xl">{homedata.headerTitle}</h1>
                    <div className="justify-end lg:flex-col lg:flex ">
                        <p className="tracking-tight">{homedata.email}</p>
                        <p className="font-normal leading-6 tracking-tight text-right text-gray-500 ">Scroll
                            to
                            explore</p>
                    </div>
                </div>
            </div>
            {/* <CardTest /> */}
        </>
  )
}

export default Hero