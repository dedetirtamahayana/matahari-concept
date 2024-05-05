import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";

const Service = () => {
  const data = [
    {
      nama: "WEATHERPROOF",
      image: "/project.png",
      link: "/lovera",
    },
    {
      nama: "BEST SERVICE",
      image: "/project.png",
      link: "tautan_2",
    },
    {
      nama: "AFFORDABLE",
      image: "/project.png",
      link: "/lovera",
    },
    {
      nama: "FASTER",
      image: "/project.png",
      link: "tautan_2",
    },
    {
      nama: "TERMITE PROOF",
      image: "/project.png",
      link: "/lovera",
    },
    {
      nama: "ECO- FRIENDLY",
      image: "/project.png",
      link: "tautan_2",
    },
  ];
  return (
    <div className='section'>
      <div className='container py-10 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
        <div className='product'>
          <div className='heading text-center'>
            <h2 className='text-5xl uppercase'>A few things we’re great at</h2>
            <Typography className='lg:w-[900px] mx-auto'>
              With a focus on sustainable practices and eco-friendly solutions,
              our aluminum craftsmanship not only contributes to the beauty of
              your spaces but also aligns with a greener, more conscious future.
              From concept to creation, we pride ourselves on precision
              engineering, ensuring that every detail is meticulously crafted to
              exceed expectations.
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 py-5'>
              {data.map((item, i) => (
                <Card key={i} className='border shadow-lg rounded-none'>
                  <CardBody className='p-0 flex justify-center items-center'>
                    <Link href={item.link}>
                      <img src={item.image} alt='' className='md:w-[278px]' />
                    </Link>
                  </CardBody>
                  <CardFooter>
                    <Typography className='text-black font-semibold'>
                      {item.nama}
                    </Typography>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
