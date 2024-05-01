import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-navbarcolor py-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div>
              <img
                src='https://docs.material-tailwind.com/img/logo-ct-dark.png'
                alt='logo-ct'
                className='w-10'
              />
              <div className='mt-4 md:mt-0'>
                <div className='text-white my-4'>
                  <Typography>
                    With our rich industrial expertise and knowledge, we have
                    earned expertise in manufacturing a range in all type of
                    Aluminium Fabrication products and services including
                    Resincial, Commercial as well as Industrial.
                  </Typography>
                  <div className='flex button-group gap-4 my-4'>
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
                </div>
              </div>
            </div>

            <div className='our-products flex justify-start lg:justify-center'>
              <div className='text-white'>
                <h2 className='font-semibold divide-x-2 '>OUR PRODUCTS</h2>
                <hr className='border-t-4 border-black w-[80px]'></hr>
                <ul className='pt-8'>
                  <li className='my-3'>
                    <Link href={"/products"}>Aluminium Fabrication</Link>
                  </li>
                  <li className='my-3'>
                    <Link href={"/products"}>Aluminium Fabrication</Link>
                  </li>
                  <li className='my-3'>
                    <Link href={"/products"}>Aluminium Fabrication</Link>
                  </li>
                  <li className='my-3'>
                    <Link href={"/products"}>Aluminium Fabrication</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='maps flex justify-start lg:justify-center'>
              <div className='text-white'>
                <h2 className='font-semibold divide-x-2 '>REACH US</h2>
                <hr className='border-t-4 border-black w-[80px]'></hr>

                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0829254820746!2d115.2339847519619!3d-8.68366422446635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xad78f1ff66b638d2!2sSMK%20TI%20Bali%20Global%20Denpasar!5e0!3m2!1sid!2sid!4v1714563366378!5m2!1sid!2sid'
                  frameBorder='0'
                  style={{ border: 0, width: "250px", height: "300px" }}
                  allowFullScreen=''
                  aria-hidden='false'
                  tabIndex='0'
                  className='pt-8'
                ></iframe>
              </div>
            </div>

            <div className='get-in-touch flex justify-start lg:justify-center'>
              <div className='text-white'>
                <h2 className='font-semibold divide-x-2 '>GET IN TOUCH</h2>
                <hr className='border-t-4 border-black w-[80px]'></hr>
                <ul className='pt-8'>
                  <li className='my-3'>
                    <Typography>
                      906, Wagodia Gidc Rd, Vadodara, Gujarat 391760
                    </Typography>
                  </li>
                  <li className='my-3'>
                    <Link
                      target='_blank'
                      href={"https://aluminiumwork.in/sales@aluminiumwork.in"}
                    >
                      sales@matahariconcept.in
                    </Link>
                  </li>
                  <li className='my-3'>
                    <Link target='_blank' href={"https://wa.me/9662037300"}>
                      +91 9662 037300
                    </Link>
                  </li>
                </ul>
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
