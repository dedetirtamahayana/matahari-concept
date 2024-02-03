import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaBriefcase, FaRegClock, FaPeriscope } from "react-icons/fa6";
import axios from "axios";

const Lowongan = () => {
  return (
    <>
      <div className='section py-10 lg:py-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:auto-cols-max md:lg:grid-flow-col '>
            <div>
              <h2 className='text-3xl mb-4'>Lowongan Unggulan</h2>
              <Typography className='m-0'>
                Berikut merupakan lowongan - lowongan kerja terpopuler
                berdasarkan peminat.
              </Typography>
            </div>
            <div className='items-end flex mt-4 lg:mt-0'>
              <Button className='bg-primaryBtn'>Lihat Semua Lowongan</Button>
            </div>
          </div>
          <div className=' mt-6 lg:mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='rounded-lg bg-white p-6 shadow-xl'>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-xl'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Engineering - Software
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaRegClock />
                      Full Time
                    </Typography>
                    <Typography>Gaji Dirahasiakan</Typography>
                  </div>
                </div>
                <div className='border-t grid grid-cols-2 mt-4 pt-4 text-gray-400'>
                  <Typography className='justify-self-start'>
                    3 jam yang lalu
                  </Typography>
                  <Typography className='justify-self-end'>
                    3 lowongan
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-xl'>PT.Panasonic</h5>

                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Engineering - Software
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaRegClock />
                      Full Time
                    </Typography>
                    <Typography>Gaji Dirahasiakan</Typography>
                  </div>
                </div>
                <div className='border-t grid grid-cols-2 mt-4 pt-4 text-gray-400'>
                  <Typography className='justify-self-start'>
                    3 jam yang lalu
                  </Typography>
                  <Typography className='justify-self-end'>
                    3 lowongan
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-xl'>PT.Panasonic</h5>

                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Engineering - Software
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaRegClock />
                      Full Time
                    </Typography>
                    <Typography>Gaji Dirahasiakan</Typography>
                  </div>
                </div>
                <div className='border-t grid grid-cols-2 mt-4 pt-4 text-gray-400'>
                  <Typography className='justify-self-start'>
                    3 jam yang lalu
                  </Typography>
                  <Typography className='justify-self-end'>
                    3 lowongan
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-xl'>PT.Panasonic</h5>

                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Engineering - Software
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaRegClock />
                      Full Time
                    </Typography>
                    <Typography>Gaji Dirahasiakan</Typography>
                  </div>
                </div>
                <div className='border-t grid grid-cols-2 mt-4 pt-4 text-gray-400'>
                  <Typography className='justify-self-start'>
                    3 jam yang lalu
                  </Typography>
                  <Typography className='justify-self-end'>
                    3 lowongan
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lowongan;
