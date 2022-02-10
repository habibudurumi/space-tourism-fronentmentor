/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import Logo from "../public/assets/shared/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import Open from "../public/assets/shared/icon-hamburger.svg";
import Image from "next/image";
import Close from "../public/assets/shared/icon-close.svg";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [menubtn, setMenubtn] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const menu = [
    { id: 1, url: "/", text: "home", number: "00" },
    { id: 2, url: "/destinations", text: "destinations", number: "01" },
    { id: 3, url: "/crew", text: "crew", number: "02" },
    { id: 4, url: "/technology", text: "technology", number: "03" },
  ];

  const { id } = menu[value];
  return (
    <div className='relative  lg:top-8 md:top-0 md:right-0 flex w-full  box-border'>
      <div className='absolute left-8 lg:top-2 md:top-4 sm:top-4'>
        <Image src={Logo} width={42} height={42} alt='logo' />
      </div>
      <div className='flex absolute right-0'>
        <div className='lg:block h-px w-473 bg-white md:hidden sm:hidden opacity-30  -mr-4 my-auto z-40'></div>
        <div className='sm:absolute lg:hidden md:hidden hover:scale-110 right-8 top-6 z-30 cursor-pointer'>
          <Image
            src={!menubtn ? Open : Close}
            height={24}
            width={24}
            onClick={() => setMenubtn(!menubtn)}
            alt='hamburger'
          />
        </div>
        <div className=''>
          <ul
            className={`sm:bg-dark-blue md:bg-light-blue lg:bg-light-blue lg:px-16 md:px-10 sm:px-20 lg:h-fit md:h-fit sm:h-screen sm:w-fit lg:w-fit sm:block sm:relative lg:flex-row md:flex-row sm:flex-col flex lg:flex md:flex  sm:top-0 lg:bg-opacity-30 md:bg-opacity-30 sm:bg-opacity-70 backdrop-blur-sm transitioin-all ease-in-out duration-700 lg:pt-0 md:pt-0 sm:pt-10 z-20 pointer-events-auto ${
              menubtn ? "sm:top-0 " : "sm:top-[-1000px] md:top-0 lg:top-0"
            }`}>
            {menu.map((link, i) => {
              console.log(value);
              return (
                <li
                  onClick={() => {
                    setValue(i);
                    setMenubtn(false);
                  }}
                  key={link.id}
                  className={`lg:mr-16 md:mr-9 lg:py-4 md:py-4 sm:py-8  border-transparent lg:border-y-2 md:border-y-2 lg:hover:border-b-2 md:hover:border-b-2 hover:border-b-light-blue hover:border-b-opacity-80 cursor-pointer sm:hover:text-light-blue z-10 ${
                    i == value && "border-b-white"
                  }`}>
                  <Link href={link.url}>
                    <a className='text-white font-condensed tracking-wider uppercase '>
                      <span className=' mr-2 lg:inline-block font-bold tracking-wider md:hidden'>
                        {link.number}
                      </span>
                      {link.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
