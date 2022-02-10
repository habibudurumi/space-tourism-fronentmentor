/**
 * /* eslint-disable @next/next/no-img-element
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

const crew = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
  const title = `meet your crew`;
  const data = Data.crew;

  const { name, images, role, bio } = data[value];
  return (
    <div className='lg:h-screen lg:w-screen md:h-fit md:w-full sm:full bg-crew-desktop bg-cover bg-no-repeat'>
      <Navbar />
      <Title title={title} number='02' />

      <div className='lg:ml-28 mt-12 lg:text-left md:text-center text-white'>
        <div className='md:hidden lg:hidden  sm:flex justify-center items-center flex-col'>
          <Image
            src={images.webp}
            width={300}
            height={300}
            alt={name}
            className='lg:absolute md:block bottom-0 right-36  w-fit object-contain h-4/5 sm:w-[200px]'
          />
          <div className='lg:hidden md:hidden sm:w-[325px] h-px bg-light-blue opacity-25  sm:mx-auto'></div>
          <div className='lg:hidden md:hidden flex justify-center items-center mt-8'>
            {data.map((circle, i) => {
              return (
                <div
                  key={circle.id}
                  onClick={() => setValue(i)}
                  className={`w-4 h-4 bg-white bg-opacity-50 rounded-full mr-4 hover:bg-light-blue cursor-pointer pointer-events-auto z-10 ${
                    value === i && "bg-opacity-100"
                  }`}></div>
              );
            })}
          </div>
        </div>
        <h4 className='font-bellefair lg:text-3xl md:text-2xl sm:text-xl  py-6 uppercase text-slate-400 sm:text-center lg:text-left'>
          {role}
        </h4>
        <h2 className='font-bellefair lg:text-5xl md:text-4xl sm:text-2xl uppercase sm:text-center lg:text-left'>
          {name}
        </h2>
        <p className='font-regular lg:w-444 md:w-458 sm:w-[327px] lg:m-0 md:mx-auto sm:mx-auto sm:text-center  lg:text-lg md:text-base lg:text-left md:text-center lg:mt-4 md:mt-8 sm:mt-10 text-light-blue sm:pb-8'>
          {bio}
        </p>
        <div className='lg:flex lg:justify-start md:flex  sm:hidden lg:mt-6 md:mt-8 md:justify-center'>
          {data.map((circle, i) => {
            return (
              <div
                key={circle.id}
                onClick={() => setValue(i)}
                className={`w-4 h-4 bg-white bg-opacity-50 rounded-full mr-4 hover:bg-light-blue cursor-pointer ${
                  value === i && "bg-opacity-100"
                }`}></div>
            );
          })}
        </div>
      </div>
      <div className='md:flex md:justify-center lg:absolute bottom-0 right-36 w-fit object-contain h-4/5 sm:hidden'>
        <Image src={images.webp} height={300} width={460} alt={name} />
      </div>
    </div>
  );
};

export default crew;
