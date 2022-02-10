/**
 * /* eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */

/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Data from "../data.json";
import Image from "next/image";
import { useState } from "react";

const technology = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const title = `space launch 101`;
  const data = Data.technology;

  const { name, images, description } = data[value];
  return (
    <div className='bg-technology-desktop lg:h-screen lg:w-full relative sm:full md:w-full'>
      <Navbar />
      <Title title={title} number='03' />
      <div className='p-0 md:mt-8 sm:mt-8 lg:hidden'>
        <Image
          src={`${images.landscape}`}
          height={300}
          width={1000}
          alt={name}
          className=' lg:hidden md:block md:w-full lg:bottom-20 md:object-cover'
        />
      </div>
      <div className=''>
        <div className='flex lg:ml-28 lg:mt-20 md:mt-10 lg:flex-row md:flex-col sm:flex-col sm:mt-10 '>
          <div className='lg:block md:flex md:items-center sm:flex md:justify-center sm:items-center sm:justify-center'>
            {data.map((number, i) => {
              return (
                <div
                  key={number.id}
                  onClick={() => setValue(i)}
                  className={`lg:w-20 lg:h-20 md:w-14 md:h-14 sm:h-[40px] sm:w-[40px] border-opacity-50 border border-white rounded-full font-bellefair lg:text-3xl md:text-2xl text-white flex justify-center items-center hover:bg-light-blue hover:text-dark-blue lg:mb-4 md:mx-2 sm:mx-4 cursor-pointer pointer-events-auto z-10 ${
                    value === i && "bg-white text-dark-blue"
                  }`}>
                  <h4 className='sm:text-xl md:text-2xl lg:text-3xl'>
                    {number.id}
                  </h4>
                </div>
              );
            })}
          </div>

          <div className='lg:ml-20 lg:block md:flex md:flex-col sm:flex-col md:items-center md:justify-center sm:justify-center sm:items-center lg:mt-0 md:mt-10 sm:mt-8 md:pb-12'>
            <h5 className='font-condensed md:text-base sm:text-[15px] tracking-wider text-light-blue uppercase sm:text-center lg:text-left md:text-center'>
              the terminology...
            </h5>
            <h2 className='font-bellefair md:text-5xl sm:text-2xl text-white uppercase my-4 sm:text-center lg:text-left md:text-left'>
              {name}
            </h2>
            <p className='lg:w-445 md:w-458 sm:w-[327px] sm:mx-auto md:mx-0 lg:mx-0 md:text-center sm:text-center md:text-base sm:text-[15px] lg:text-left font-regular lg:text-lg text-light-blue sm:pb-8 md:pb-0 lg:pb-0'>
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className='absolute lg:right-0 lg:bottom-16 md:hidden sm:hidden lg:block'>
        <Image
          src={images.portrait}
          height={350}
          width={300}
          alt={name}
          className='md:hidden sm:hidden'
        />
      </div>
    </div>
  );
};

export default technology;
