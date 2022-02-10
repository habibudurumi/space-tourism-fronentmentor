/** @format */

const Title = ({ number, title }) => {
  return (
    <div className='lg:ml-28  sm:ml-0 lg:mt-36 md:ml-8 md:mt-24 sm:mt-[88px] '>
      <h5 className='font-condensed tracking-wider lg:text-2xl md:text-xl text-white uppercase lg:text-left md:text-left sm:text-center'>
        <span className='text-slate-400 mr-4 z-0'>{number}</span>
        {title}
      </h5>
    </div>
  );
};

export default Title;
