import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-navbarcolor py-10'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
              <img
                src='https://docs.material-tailwind.com/img/logo-ct-dark.png'
                alt='logo-ct'
                className='w-10'
              />
              <div className='mt-4 md:mt-0'>
                <div className='text-white my-4'>
                  <span className='block'>
                    Jl. Jendral Gatot Subroto Kav. 51
                  </span>
                  <span className='block'>
                    Daerah Khusus Ibukota Jakarta 12750, Indonesia
                  </span>

                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-4'>
                    <span>Telp: 021-5255733 </span>
                    <span>Call Center: 021-50816000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:self-end mt-4 md:mt-0'>
              <div className='flex flex-col items-end my-4 lg:mb-4'>
                <div className='flex button-group gap-4 mb-4'>
                  <IconButton className='rounded-full bg-white text-primaryBtn'>
                    <FaFacebookF fontSize='1.5em' />
                  </IconButton>
                  <IconButton className='rounded-full bg-white text-primaryBtn'>
                    <FaTwitter fontSize='1.5em' />
                  </IconButton>
                  <IconButton className='rounded-full bg-white text-primaryBtn'>
                    <FaInstagram fontSize='1.5em' />
                  </IconButton>
                  <IconButton className='rounded-full bg-white text-primaryBtn'>
                    <FaYoutube fontSize='1.5em' />
                  </IconButton>
                </div>
                <div>
                  <ul className='flex flex-wrap gap-y-2 gap-x-8'>
                    <li>
                      <Typography
                        as='a'
                        href='#'
                        color='white'
                        className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                      >
                        Tentang Kemnaker
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as='a'
                        href='#'
                        color='white'
                        className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                      >
                        Hubungi Kami
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        as='a'
                        href='#'
                        color='white'
                        className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                      >
                        Peta Situs
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-8 border-blue-gray-50' />
          <Typography color='white' className='text-center font-normal text-sm'>
            Kementerian Ketenagakerjaan Republik Indonesia © 2024 • Hak Cipta
            Dilindungi Undang-Undang.
          </Typography>
        </div>
      </footer>
    </>
  );
};

export default Footer;
