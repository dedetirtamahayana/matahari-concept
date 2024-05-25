import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const About = () => {
  return (
    <div className='section bg-blue-gray-100 mx-auto'>
      <div className='container py-10 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='about flex justify-center'>
            <Card className='lg:w-[616px] h-auto p-14 md:py-24 md:px-32 shadow-lg'>
              <CardBody className='p-0'>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='mb-2 text-black text-lg text-center md:text-left custom-text'
                >
                  About Matahari Concept
                </Typography>
                <h2 className='text-4xl text-center md:text-left md:text-5xl text-black font-opensans font-light mb-5 custom-text '>
                  Enjoy the best{" "}
                  <em className='custom-text font-semibold '>design</em> and{" "}
                  <em className='custom-text font-semibold'>functions </em>{" "}
                  combined together
                </h2>
                <Typography className='text-black text-center md:text-left custom-text'>
                  Welcome to our world of exceptional aluminum craftsmanship,
                  where innovation meets precision to redefine your spaces. At
                  Matahari Concept, we specialize in delivering bespoke aluminum
                  works that seamlessly blend functionality with aesthetics.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className='image flex justify-center items-center'>
            <Card className='w-[80%] -translate-x-0 -translate-y-5 lg:-translate-y-0 md:w-[616px] md:items-center  md:max-h-[476px] overflow-hidden lg:-translate-x-20 shadow-xl'>
              <CardBody color='transparent' className='m-0 rounded-none p-0'>
                <img
                  src='/about.jpg'
                  alt='about-matahari-concept'
                  className='object-cover md:w-[616px] md:h-[476px] items-center text-center'
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
