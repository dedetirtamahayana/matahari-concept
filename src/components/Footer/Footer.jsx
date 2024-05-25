import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-navbarcolor px-[5%] pt-[5%]'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
          <div className='col-span-4'>
            <Typography className='text-4xl text-white font-bold pb-3'>
              Matahari Concept
            </Typography>
            <hr className='border-t-4 border-black w-[80px]'></hr>
            <div className='mt-4 md:mt-0'>
              <div className='text-white my-4 pt-8'>
                <Typography className='mb-3'>
                  Jl. Imam Bonjol Perum Pesona Wisata Blok IB No. 6, Kecamatan
                  Denpasar Barat, Kota Denpasar, Bali, 80119
                </Typography>
                <Typography className='mb-3'>
                  Jl. Kebo Iwa Gg. Belimbing No. 4, Kecamatan Denpasar Barat,
                  Kota Denpasar, Bali, 80117
                </Typography>
                <Typography className='mb-3'>
                  Jl. Raya Garuda No. 55, Perumahan Rewwin Waru Sidoarjo
                </Typography>
                <div className='grid button-group gap-4 my-4'>
                  <Link href={"https://wa.me/6289685698718"}>
                    <Typography className='flex gap-3 items-center '>
                      <FaWhatsapp className='w-5 h-5' />
                      +62 896 856 987 18
                    </Typography>
                  </Link>
                  <Link href={"https://wa.me/62818350025"}>
                    <Typography className='flex gap-3 items-center '>
                      <FaWhatsapp className='w-5 h-5' />
                      +62 818 350 025
                    </Typography>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='our-products col-span-4 flex justify-start lg:justify-center'>
            <div className='text-white'>
              <h2 className='font-semibold divide-x- text-4xl pb-3'>
                Our Products
              </h2>
              <hr className='border-t-4 border-black w-[80px]'></hr>
              <div className='grid grid-cols-2 gap-14'>
                <div>
                  <ul className='pt-8'>
                    <li className='my-3'>
                      <Link href={"/lovera"}>Lovera</Link>
                    </li>
                    <li className='my-3'>
                      <Link href={"/giano"}>Giano</Link>
                    </li>
                    <li className='my-3'>
                      <Link href={"/aldora"}>Aldora</Link>
                    </li>
                    <li className='my-3'>
                      <Link href={"/sequra"}>Sequra</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='pt-8'>
                    <li className='my-3'>
                      <Link href={"/foldora"}>Foldora</Link>
                    </li>
                    <li className='my-3'>
                      <Link href={"/trento"}>Trento</Link>
                    </li>
                    <li className='my-3'>
                      <Link href={"/porta"}>Porta</Link>
                    </li>
                    <li className='my-3'>
                      <Link href={"/duratri"}>Duratri</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='maps col-span-4 flex justify-start lg:justify-center'>
            <div className='text-white'>
              <h2 className='font-semibold divide-x-2 text-4xl pb-3 '>
                Reach Us
              </h2>
              <hr className='border-t-4 border-black w-[80px]'></hr>

              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15775.521766806896!2d115.1884464!3d-8.7029025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24185583174ad%3A0xf9deef6ede272b4f!2sAtap%20Aluminium%20Lovera%20Bali%20%7C%20Matahari%20Concept!5e0!3m2!1sid!2sid!4v1714917703526!5m2!1sid!2sid'
                style={{ border: 0, width: "350px", height: "300px" }}
                allowFullScreen=''
                aria-hidden='false'
                tabIndex='0'
                className='pt-8'
              ></iframe>
            </div>
          </div>
        </div>
        <div className='fixed bottom-20 right-0 mt-4 mr-4 z-50'>
          <Link href={"https://wa.me/6289685698718"}>
            <button className='w-16 h-16 bg-green-400 text-white  rounded-full flex items-center justify-center'>
              <FaWhatsapp className='w-9 h-9' />
            </button>
          </Link>
        </div>
        <hr className='my-8 border-blue-gray-50' />
        <Typography color='white' className='text-center font-normal pb-8'>
          © 2024{" "}
          <Link href={"/"} className='text-blue-400'>
            Matahari Concept
          </Link>
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
