import React from "react";
import { Typography } from "@material-tailwind/react";
const Mitra = () => {
  return (
    <>
      <div className='section bg-gray-200 py-10 md:py-20'>
        <div className='container mx-auto'>
          <div className='content gap-3 grid grid-cols-1 md:grid-cols-2'>
            <div className='col-span-1'>
              <h1 className='text-3xl'>
                Daftar mitra job portal yang telah bekerja sama
              </h1>
              <Typography>
                Lihat lowongan - lowongan kerja di mitra job portal kami yang
                diminati banyak orang.
              </Typography>
            </div>
            <div className='col-span-1'>
              <div className='grid grid-cols-2 gap-4 md:grid-cols-3 items-center justify-center text-center'>
                <div className='rounded-lg bg-white p-3 flex items-center justify-center w-40 h-20 mx-auto'>
                  <img src='/sun-recruit.png' alt='' className='mx-auto' />
                </div>
                <div className='rounded-lg bg-white p-3 flex items-center justify-center w-40 h-20 mx-auto'>
                  <img src='/job-portal-id.png' alt='' className='mx-auto' />
                </div>
                <div className='rounded-lg bg-white p-3 flex items-center justify-center w-40 h-20 mx-auto'>
                  <img
                    src='/hired-today.png'
                    alt=''
                    className='w-20 h-20 mx-auto '
                  />
                </div>
                <div className='rounded-lg bg-white p-3 flex items-center justify-center w-40 h-20 mx-auto'>
                  <img src='/kalibrr.png' alt='' className='mx-auto' />
                </div>
                <div className='rounded-lg bg-white p-3 flex items-center justify-center w-40 h-20 mx-auto'>
                  <img src='/relasio-com.png' alt='' className='mx-auto' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mitra;
