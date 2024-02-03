import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@material-tailwind/react";
import { FaBriefcase, FaRegClock, FaPeriscope } from "react-icons/fa6";
import { Rating, Typography } from "@material-tailwind/react";

const Unggulan = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='section py-10 lg:py-20 bg-gray-300'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:auto-cols-max md:lg:grid-flow-col '>
            <div>
              <h2 className='text-3xl mb-4 '>Perusahaan Unggulan</h2>
              <Typography className='m-0'>
                Berikut merupakan perusahaan - perusahaan unggulan yang ada.
              </Typography>
            </div>
            <div className='items-end flex mt-4 lg:mt-0'>
              <Button className='bg-primaryBtn'>Lihat Semua Perusahaan</Button>
            </div>
          </div>
          <div className='slider mt-6 lg:py-12'>
            <Slider {...settings}>
              <div className='rounded-lg bg-white p-6 shadow-xl'>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
              <div className='rounded-lg bg-white p-6 shadow-xl '>
                <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                  <div className=''>
                    <img src='/panasonic.png' alt='' />
                  </div>
                  <div className='flex-grow'>
                    <h5 className='text-lg'>PT.Panasonic</h5>
                    <Typography className='flex gap-3 my-3 items-center '>
                      <FaPeriscope />
                      Bekasi
                    </Typography>
                    <Typography className='flex gap-3 my-3 items-center'>
                      <FaBriefcase />
                      Education & Training
                    </Typography>
                  </div>
                </div>
                <div className='border-t mt-4 pt-4 text-gray-400 flex items-center  gap-2 '>
                  <Rating value={4} readonly />
                  <Typography
                    color='blue-gray'
                    className='font-medium text-blue-gray-500'
                  >
                    (4.0)
                  </Typography>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unggulan;
