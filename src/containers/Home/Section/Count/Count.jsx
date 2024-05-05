import React from "react";
import CountUp from "react-countup";

const Count = () => {
  return (
    <>
      <div className='section'>
        <div className='container mx-auto px-4'>
          <div className='rounded-lg text-center grid grid-flow-row md:grid-flow-col auto-rows-auto md:auto-cols-auto gap-4 -top-14 relative bg-white p-8 shadow-lg'>
            <div className='text-center'>
              <CountUp
                duration={10}
                className='counter text-3xl flex justify-center'
                end={494268}
              />
              <span className='block mt-2'>Total Pencari Kerja</span>
            </div>
            <div className='text-center'>
              <CountUp
                duration={10}
                className='counter text-3xl flex justify-center'
                end={51037}
              />
              <span className='block mt-2'>Total Pemberi Kerja</span>
            </div>
            <div className='text-center'>
              <CountUp
                duration={10}
                className='counter text-3xl flex justify-center'
                end={205246}
              />
              <span className='block mt-2'>Total Lowongan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
