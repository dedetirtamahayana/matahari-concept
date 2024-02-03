import { Button } from "@material-tailwind/react";
import React from "react";
import {
  FaFireFlameCurved,
  FaEarthAsia,
  FaUserGraduate,
} from "react-icons/fa6";
export const Populer = () => {
  return (
    <div className='section py-10 md:pt-10 pb-20'>
      <div className='container mx-auto'>
        <h1 className='py-4 text-3xl'>Pekerjaan Populer</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <Button
            className='p-4 rounded-lg border border-red-900 text-red-800 bg-white 
          flex items-center justify-center hover:bg-red-900 hover:text-white 
          transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            <FaFireFlameCurved className='mr-2 ' /> Aktif Merekrut
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Admin & Human Resource
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Marketing
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Design
          </Button>
          <Button
            className='p-4 rounded-lg border border-green-700 text-green-700 bg-white 
          flex items-center justify-center hover:bg-green-700 hover:text-white 
          transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            <FaEarthAsia className='mr-2 ' /> WFH/Remote
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Front End Developer
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            UI/UX
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Live Streamer
          </Button>
          <Button
            className='p-4 rounded-lg border border-blue-600 text-blue-600 bg-white 
          flex items-center justify-center hover:bg-blue-700 hover:text-white 
          transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            <FaUserGraduate className='mr-2 ' /> Fresh Graduate
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Content Moderator
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Akutansi
          </Button>
          <Button
            className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
            transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
          >
            Media & Communication
          </Button>
        </div>
      </div>
    </div>
  );
};
