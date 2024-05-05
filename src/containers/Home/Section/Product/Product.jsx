import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";

const Product = () => {
  const data = [
    {
      nama: "Adjustable Roofing System",
      image: "/lovera.png",
      link: "/lovera",
    },
    {
      nama: "Premium Doors & Windows",
      image: "/giano.png",
      link: "tautan_2",
    },
    {
      nama: "Garage Door",
      image: "/aldora.png",
      link: "/lovera",
    },
    {
      nama: "Security Screen Doors & Windows",
      image: "/sequra.png",
      link: "tautan_2",
    },
    {
      nama: "Adjustable Roofing System",
      image: "/lovera.png",
      link: "/lovera",
    },
    {
      nama: "Premium Doors & Windows",
      image: "/giano.png",
      link: "tautan_2",
    },
    {
      nama: "Garage Door",
      image: "/aldora.png",
      link: "/lovera",
    },
    {
      nama: "Security Screen Doors & Windows",
      image: "/sequra.png",
      link: "tautan_2",
    },
  ];
  return (
    <div className='section  '>
      <div className='container py-10 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
        <div className='product'>
          <div className='heading text-center'>
            <h2 className='text-5xl uppercase'>Product</h2>
            <Typography className='lg:w-[900px] mx-auto'>
              The Product division involved in research and development to
              improve existing products or create innovative solutions using
              aluminum. Additionally, marketing and sales efforts would be
              directed towards promoting these aluminum products to relevant
              industries and consumers.
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-5'>
              {data.map((item, i) => (
                <Card key={i} className='border shadow-lg rounded-none'>
                  <CardBody className='p-0 flex justify-center items-center'>
                    <Link href={item.link}>
                      <img src={item.image} alt='' />
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

export default Product;
