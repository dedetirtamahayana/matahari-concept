import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";
import { HiOutlineCloud } from "react-icons/hi";
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { BsHandThumbsUp, BsLightningCharge } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { TbHeartHandshake } from "react-icons/tb";

const Service = () => {
  const data = [
    {
      nama: "WEATHERPROOF",
      image: (
        <HiOutlineCloud className='w-20 h-20 text-black' strokeWidth={1.5} />
      ),
      text: "Designed to withstand various weather conditions, from sunlight and heat to rain, snow and strong winds",
    },
    {
      nama: "BEST SERVICE",
      image: <HiOutlineWrenchScrewdriver className='w-20 h-20 text-black' />,
      text: "Commitment to product quality and the best service is our motto",
    },
    {
      nama: "AFFORDABLE",
      image: <HiOutlineCurrencyDollar className='w-20 h-20  text-black' />,
      text: "High quality does not necessarily equal higher costs",
    },
    {
      nama: "FASTER",
      image: <BsLightningCharge className='w-20 h-20  text-black' />,
      text: "We prioritize delivering our products to our customers on time",
    },
    {
      nama: "TERMITE PROOF",
      image: <BsHandThumbsUp className='w-20 h-20  text-black' />,
      text: "The power of termite attacks is a thing of the past when you buy our products",
    },
    {
      nama: "ECO - FRIENDLY",
      image: (
        <LuHeartHandshake className='w-20 h-20  text-black' strokeWidth={1.5} />
      ),
      text: "We are committed to producing our products with environmentally friendly materials and resources",
    },
  ];
  return (
    <div className='section'>
      <div className='container py-10 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
        <div className='product'>
          <div className='heading text-center'>
            <h2 className='text-5xl uppercase custom-text'>
              A few things we’re great at
            </h2>
            <Typography className='lg:w-[900px] mx-auto custom-text my-3'>
              With a focus on sustainable practices and eco-friendly solutions,
              our aluminum craftsmanship not only contributes to the beauty of
              your spaces but also aligns with a greener, more conscious future.
              From concept to creation, we pride ourselves on precision
              engineering, ensuring that every detail is meticulously crafted to
              exceed expectations.
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 py-5'>
              {data.map((item, i) => (
                <Card key={i} className='border shadow-lg rounded-lg'>
                  <CardBody className='p-4 grid justify-center items-center'>
                    <div className='mx-auto'>{item.image}</div>
                    <Typography className='text-black font-semibold pt-5 pb-2 custom-text '>
                      {item.nama}
                    </Typography>

                    <Typography className='text-black custom-text'>
                      {item.text}
                    </Typography>
                  </CardBody>
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
