import { Typography } from "@material-tailwind/react";
import React from "react";

const Product = () => {
  return (
    <div className='section '>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
