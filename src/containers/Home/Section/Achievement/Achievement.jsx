import React from "react";
import CountUp from "react-countup";

const Achievement = () => {
  return (
    <div className='section-achievement'>
      <div className='container py-10 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
        <div className='text-center'>
          <h2 className='text-5xl'>Achievement</h2>
        </div>
        <div className=' text-center grid grid-flow-row md:grid-flow-col auto-rows-auto md:auto-cols-auto gap-4  relative p-8 '>
          <div className='text-center rounded-lg shadow-lg border p-7 bg-white'>
            <CountUp
              duration={10}
              className='counter text-3xl flex justify-center'
              end={494268}
            />
            <span className='block mt-2'>RESIDENCE</span>
          </div>
          <div className='text-center rounded-lg shadow-lg border p-7 bg-white'>
            <CountUp
              duration={10}
              className='counter text-3xl flex justify-center'
              end={51037}
            />
            <span className='block mt-2'>PROJECT</span>
          </div>
          <div className='text-center rounded-lg shadow-lg border p-7 bg-white'>
            <CountUp
              duration={10}
              className='counter text-3xl flex justify-center'
              end={205246}
            />
            <span className='block mt-2'>HAPPY CUSTOMERS</span>
          </div>
          <div className='text-center rounded-lg shadow-lg border p-7'>
            <CountUp
              duration={10}
              className='counter text-3xl flex justify-center'
              end={205246}
            />
            <span className='block mt-2'>EMPLOYEE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
