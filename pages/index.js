/** @format */

import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className='lg:bg-home-desktop md:bg-home-tablet sm:bg-home-mobile lg:w-full lg:h-screen md:w-full sm:w-full sm:h-fit md:bg-bottom sm:bg-center bg-cover bg-no-repeat'>
        <Navbar />
        <div className='lg:grid lg:grid-cols-2 md:grid-cols-1 lg:mt-60 md:mt-44 sm:mt-56 lg:pl-32 md:flex sm:flex  sm:flex-col sm:justify-center sm:items-center md:flex-col md:items-center md:justify-center '>
          <div className='text-white lg:w-445 lg:pt-12 lg:text-justify md:text-center sm:text-center'>
            <h5 className='font-condensed uppercase md:text-2xl lg:text-2xl font-light sm:text-base tracking-widest '>
              so, you want to travel to
            </h5>
            <h1 className='lg:text-9xl md:text-9xl sm:text-[80px] lg:mt-4 md:my-8 sm:my-6 lg:my-0 font-normal font-bellefair uppercase'>
              space
            </h1>
            <p
              className='font-regular lg:text-lg md:text-base sm:text-[15px]
              font-normal md:w-444 sm:w-[327px] md:text-center text-light-blue lg:text-left'>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className='md:py-16 sm:my-32 lg:my-0 lg:py-0 flex items-center justify-center w-445'>
            <div className='h-80 w-80  flex justify-center items-center cursor-pointer rounded-full hover:bg-light-blue hover:bg-opacity-30 '>
              <div className='lg:h-60 lg:w-60 md:h-60 md:w-60 sm:h-[150px] sm:w-[150px] bg-white rounded-full flex items-center justify-center'>
                <h3 className='font-bellefair lg:text-3xl sm:text-xl uppercase'>
                  explore
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
