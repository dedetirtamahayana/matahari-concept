import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  const navList = (
    <ul className='m-3 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal text-black lg:text-white'
      >
        <a href='#' className='flex items-center'>
          OUR STORY
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal text-black lg:text-white'
      >
        <a href='#' className='flex items-center'>
          CONTACT US
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className='max-h-auto w-full relative'>
      <div
        className={`absolute w-full z-50 ${isSticky ? "bg-navbarcolor" : ""}`}
      >
        <Navbar
          className={`navbar top-0 h-auto max-w-full rounded-none bg-transparent backdrop-blur-none border-none backdrop-saturate-100 bg-opacity-100 shadow-none p-3 lg:px-8 lg:py-2 ${
            isSticky ? "sticky" : ""
          } ${isSticky ? "bg-navbarcolor" : "bg-transparent"}`}
        >
          <div className='flex items-center justify-between text-blue-gray-900'>
            <img
              src='/user.png'
              alt=''
              className='w-14'
              onClick={() => router.push("/")}
            />
            <div className='flex items-center gap-4'>
              <div className='mr-4 hidden lg:block'>{navList}</div>

              <IconButton
                variant='text'
                className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    className='h-6 w-6'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav} className='bg-white'>
            {navList}
          </Collapse>
        </Navbar>
      </div>
      <div className='relative overflow-hidden'>
        <div className='relative'>
          <Carousel
            className='overflow-hidden h-100% md:h-[700px]'
            showStatus={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            showArrows={false}
          >
            <div className='relative h-full w-full flex items-center justify-center'>
              <img
                src='/disabilitas.jpg'
                alt='image 1'
                className='h-full w-full object-cover bg-right'
              />
              <div className='absolute inset-0 grid h-full w-full items-center bg-black/50'>
                <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
              </div>
            </div>
            <div className='relative h-full w-full flex items-center justify-center'>
              <img
                src='/disabilitas.jpg'
                alt='image 2'
                className='h-full w-full object-cover bg-right'
              />
              <div className='absolute inset-0 grid h-full w-full items-center bg-black/50'>
                <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
              </div>
            </div>
            <div className='relative h-full w-full  flex items-center'>
              <img src='/job.png' alt='image 2' className='bg-cover' />
              <div className='absolute inset-0 grid h-full w-full items-center bg-black/50'>
                <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
              </div>
            </div>
            <div className='relative h-full w-full  flex items-center'>
              <img src='/mikro.jpg' alt='image 2' className='bg-cover' />
              <div className='absolute inset-0 grid h-full w-full items-center bg-black/50'>
                <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'></div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center mt-10 lg:mt-0 gap-3 '>
          <Typography
            variant='h1'
            className=' text-xl md:text-4xl lg:text-3xl text-white'
          >
            Welcome To Matahari Concept
          </Typography>
          <Typography
            variant='lead'
            color='white'
            className='text-sm lg:text-lg text-white w-[80%] lg:w-[900px]'
          >
            where artistry meets precision in the world of aluminum
            craftsmanship. As pioneers in the industry, we embark on a journey
            to redefine spaces and elevate designs through the exceptional
            versatility of aluminum. At Trimitra, we understand that each
            project is a unique canvas, waiting to be adorned with the perfect
            blend of functionality and aesthetic brilliance
          </Typography>
        </div>
      </div>
    </div>
  );
}
