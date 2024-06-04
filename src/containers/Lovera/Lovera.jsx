import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Gallery from "@/components/Gallery/Gallery";
import {
  FaBug,
  FaStar,
  FaSun,
  FaTrophy,
  FaCheck,
  FaPaintRoller,
} from "react-icons/fa6";

import Footer from "@/components/Footer/Footer";
import { MenuInternal } from "@/components/Menu/Menu";
import { StickyNavbar } from "@/components/Header/index";

const Lovera = () => {
  const images = [
    {
      src: "/lovera-1.jpg",
      title: "Image 1",
    },
    {
      src: "/lovera-2.jpg",
      title: "Image 2",
    },
    {
      src: "/lovera-3.jpg",
      title: "Image 3",
    },
    {
      src: "/lovera-4.jpg",
      title: "Image 4",
    },
    {
      src: "/lovera-5.jpg",
      title: "Image 5",
    },
    {
      src: "/lovera-6.jpg",
      title: "Image 6",
    },
    {
      src: "/lovera-7.jpg",
      title: "Image 7",
    },
    {
      src: "/lovera-8.jpg",
      title: "Image 8",
    },
  ];

  const color = [
    {
      src: "/black.jpg",
      alt: "Image 1",
    },
    {
      src: "/brown.jpg",
      alt: "Image 1",
    },
    {
      src: "/cream.jpg",
      alt: "Image 1",
    },
    {
      src: "/green.jpg",
      alt: "Image 1",
    },
    {
      src: "/grey.jpg",
      alt: "Image 1",
    },
    {
      src: "/magnolia.jpg",
      alt: "Image 1",
    },
    {
      src: "/white.jpg",
      alt: "Image 1",
    },
  ];

  return (
    <>
      <MenuInternal />
      <div className='section-1 mx-auto'>
        <div className='w-full bg-titlecolor'>
          <div className='pt-[104px] text-center grid justify-center items-center'>
            <div className='p-8'>
              <div className='p-8'>
                <img
                  src='/lovera-title.png'
                  className='w-80 h-auto mb-5'
                  alt=''
                />
              </div>
              <div className='flex justify-center items-center'>
                <Typography className='text-2xl font-semibold'>
                  ADJUSTABLE ROOFING SYSTEM
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='container py-8 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='image flex justify-center items-center'>
              <Card className='w-[80%] -translate-x-0 translate-y-5 lg:translate-y-0 md:w-[616px] md:items-center  md:max-h-[476px] overflow-hidden lg:translate-x-7 shadow-xl z-10'>
                <CardBody color='transparent' className='m-0 rounded-none p-0'>
                  <img
                    src='/lovera.jpg'
                    alt='lovera'
                    className='object-cover md:w-[616px] md:h-[476px] items-center text-center'
                  />
                </CardBody>
              </Card>
            </div>
            <div className='about flex justify-center'>
              <Card className='lg:w-[616px] h-auto p-10 md:py-24 md:px-32 shadow-lg lg:-translate-x-7 border '>
                <CardBody className='p-0'>
                  <Typography
                    variant='h5'
                    color='blue-gray'
                    className='mb-2 text-black text-lg text-center md:text-left custom-text'
                  >
                    Unveiling your horizon with LOVERA
                  </Typography>
                  <h2 className='text-4xl text-center md:text-left md:text-[42px] text-black font-opensans font-light mb-5 custom-text'>
                    Seamlessly combines{" "}
                    <em className='custom-text font-semibold '>durability </em>{" "}
                    and{" "}
                    <em className='custom-text font-semibold'>flexibility </em>{" "}
                    for roofing system
                  </h2>
                  <Typography className='text-black text-center md:text-left'>
                    Lovera, an innovative aluminum Adjustable Roofing System.
                    Lovera not only provides robust protection against the
                    elements but also offers the unique ability to adapt to
                    changing weather conditions. Its cutting-edge design allows
                    users to effortlessly adjust the roofing system, ensuring
                    optimal comfort and functionality.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className='section-2 mx-auto bg-titlecolor'>
        <div className='container py-8 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
          <div className='lg:w-[80%] mx-auto'>
            <h2 className='text-center text-[42px]'>
              Premium Adjustable Roofing System
            </h2>
            <Typography className='text-center'>
              Embrace a new era of versatility and style with Lovera, where
              precision engineering meets aesthetic appeal in the realm of
              roofing solutions.
            </Typography>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-7'>
            <div className='grid grid-cols-2 lg:grid-cols-2  gap-2 justify-center items-center'>
              <div className='flex flex-col'>
                <div className='p-4'>
                  <FaTrophy className='w-[50px] h-[50px] mb-2 text-blue-400' />
                  <Typography>HIGH QUALITY</Typography>
                </div>
                <div className='p-4'>
                  <FaBug className='w-[50px] h-[50px] mb-2 text-blue-400' />
                  <Typography>TERMITE FREE</Typography>
                </div>
                <div className='p-4'>
                  <FaStar className='w-[50px] h-[50px] mb-2 text-blue-400' />
                  <Typography>10 YEARS POWDER COAT GUARANTEE</Typography>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='p-4'>
                  <FaSun className='w-[50px] h-[50px] mb-2 text-blue-400' />
                  <Typography>ANTI RUST</Typography>
                </div>
                <div className='p-4'>
                  <FaPaintRoller className='w-[50px] h-[50px] mb-2 text-blue-400' />
                  <Typography>POWDER COATED SURFACE</Typography>
                </div>
                <div className='p-4'>
                  <FaCheck className='w-[50px] h-[50px] mb-2 text-blue-400' />
                  <Typography>1 YEARS ACCESSORIES GUARANTEE</Typography>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <img
                src='/lovera-content.jpg'
                className='w-[566px] h-auto'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='section-4 mx-auto '>
        <div className='container py-8 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-7'>
            <div className='flex justify-center items-center'>
              <img src='/lovera-spec.jpg' className='w-[458px] h-auto' alt='' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 '>
              <div>
                <h3 className='text-4xl mb-4'>Specification</h3>
                <ul className='list-none p-0'>
                  <li className='mb-4 text-xl'>1. Leaf</li>
                  <li className='mb-4 text-xl'>2. End Cover</li>
                  <li className='mb-4 text-xl'>3. Supporting Hollow Frame</li>
                  <li className='mb-4 text-xl'>4. Adjustable Hollow Frame</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-5 mx-auto bg-titlecolor'>
        <div className='container py-8 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-7'>
            <div className='flex flex-col justify-center items-center lg:items-start'>
              <h2 className='text-[42px] mb-4 text-center lg:text-left'>
                Pallets
              </h2>
              <Typography className='text-center lg:text-left'>
                With a rich spectrum of color options, Lovera ensures you can
                find the perfect hue to complement your taste and match any
                aesthetic.
              </Typography>
            </div>
            <div className='flex justify-center items-center'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {color.map((data, i) => (
                  <img src={data.src} alt={data.alt} key={i}></img>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery images={images} />
      <Footer />
    </>
  );
};

export default Lovera;
