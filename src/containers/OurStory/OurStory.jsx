import Footer from "@/components/Footer/Footer";
import { MenuInternal } from "@/components/Menu/Menu";
import { Typography } from "@material-tailwind/react";
import React from "react";

const OurStory = () => {
  return (
    <>
      <MenuInternal />
      <div className='section-1 bg-titlecolor'>
        <div className='container py-10 lg:py-8 px-0 w-[90%] md:w-[100%] mx-auto '>
          <div className='ourstory'>
            <h2 className='text-5xl text-center custom-text'>Our Story</h2>
          </div>
        </div>
      </div>
      <div className='section-2'>
        <div className='container py-10 lg:py-20 px-0 w-[90%] md:w-[100%] mx-auto '>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='lg:ml-[20%] lg:my-[10%]'>
              <h4 className='mb-5 text-xl custom-text'>Our Story</h4>
              <hr className='border-t-4 border-blue-400 w-[80px] mb-5'></hr>
              <Typography className='mb-4 custom-text'>
                On March 14, 1987, PT. Matahari Concept opened its doors to the
                public for the first time. Specializing in the application of
                aluminum doors and windows, our company had two business
                objectives:
              </Typography>
              <Typography className='mb-4 custom-text'>
                1. To be the best choice in aluminium and metal based products.
              </Typography>
              <Typography className='mb-4 custom-text'>
                2. Build an organization based on commitment, excellence and
                integrity.
              </Typography>
              <Typography className='custom-text'>
                Matahari Concept began receiving recognition in the 90s when it
                introduced its own aluminium product line under the same two
                principles. While the times have changed, believing and
                practicing these philosophies have allowed our company to
                operate stably and at the same time to continuously expand in
                Indonesia. We have become a manufacturer and applicator of
                premium and economy aluminium doors & windows, security screen
                doors and windows, garage doors, curtain walls, canopies, shower
                screens, and aluminium composite panel.
              </Typography>
            </div>
            <div className='mt-5 lg:mt-0 lg:ml-[10%]'>
              <img
                src='our-story.jpg'
                alt='our-story'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurStory;
