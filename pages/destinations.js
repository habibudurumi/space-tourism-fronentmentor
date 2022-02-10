/** @format */

import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Data from "../data.json";
import Image from "next/image";
import { useState } from "react";

const destinations = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
  const title = `pick your destination`;
  const data = Data.destinations;
  const { images, name, description, distance, travel } = data[value];
  return (
    <div className='lg:h-screen lg:w-full md:w-full sm:w-full md:h-fit bg-destination-desktop bg-no-repeat bg-cover box-border'>
      <Navbar />
      <Title title={title} number='01' />
      <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-1 sm:flex sm:justify-center sm:flex-col sm:items-center lg:mt-20 sm:mt-20 md:w-full'>
        <div className='flex lg:justify-center sm:justify-center items-center  md:justify-center lg:w-[320px] sm:w-[170px] md:w-[320px] md:mx-auto lg:ml-24 sm:mx-auto'>
          <Image src={images.png} width={320} height={320} alt={name} />
        </div>
        <div className='lg:inline-block md:flex md:justify-center lg:justify-start md:flex-col md:items-center'>
          <ul className='flex md:mx-auto md:mt-12 sm:justify-center lg:justify-start md:justify-start lg:mt-0 sm:mt-16'>
            {data.map((title, i) => {
              const { id, name } = title;
              return (
                <li
                  key={id}
                  onClick={() => setValue(i)}
                  className={`text-white font-condensed uppercase lg:mx-4 md:mx-4 sm:mx-2 tracking-widest font-normal pb-1 border-y-2 border-transparent hover:border-b-light-blue cursor-pointer hover:border-opacity-50 z-10 ${
                    i === value && "border-b-white"
                  }`}>
                  {name}
                </li>
              );
            })}
          </ul>
          <h4 className='font-bellefair lg:text-left md:text-left lg:text-8xl md:text-7xl sm:text-center sm:text-[56px] text-white uppercase lg:mt-4 md:mt-10 sm:mt-8'>
            {name}
          </h4>
          <p
            className='text-white lg:text-left md:text-center sm:text-center
          sm:text-[15px] lg:w-445 md:w-573 sm:w-[327px] md:text-base lg:text-lg lg:mx-0 md:mx-0 sm:mx-auto'>
            {description}
          </p>
          <div className='lg:w-445 md:w-573 sm:w-[325px] h-px bg-light-blue opacity-25 mt-8 lg:mx-0 md:mx-0 sm:mx-auto'></div>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 text-white w-445 lg:py-4 md:py-8 sm:py-8 sm:grid-cols-1'>
            <div className='flex lg:justify-start flex-col md:justify-center md:items-center sm:justify-center sm:items-center lg:items-start lg:mt-0 md:mt-0 sm:mt-4'>
              <h6 className='text-4 font-condensed uppercase text-light-blue'>
                avg. distance
              </h6>
              <p className='font-bellefair text-2xl uppercase'>{distance}</p>
            </div>
            <div className='flex lg:justify-start flex-col sm:justify-center sm:items-center md:justify-center md:items-center lg:items-start lg:mt-0 md:mt-0 sm:mt-4'>
              <h6 className='text-4 font-condensed uppercase text-light-blue'>
                est. travel time
              </h6>
              <p className='font-bellefair text-2xl uppercase'>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default destinations;
