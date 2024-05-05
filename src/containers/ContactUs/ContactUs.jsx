import Footer from "@/components/Footer/Footer";
import { MenuInternal } from "@/components/Menu/Menu";
import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const ContactUs = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  function Icon({ id, open }) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className={`${
          id === open ? "rotate-180" : ""
        } h-[50px] w-[50px] transition-transform bg-blue-400 p-4 text-white  lg:-mr-6`}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
        />
      </svg>
    );
  }
  return (
    <>
      <MenuInternal />
      <div className='section-1 bg-titlecolor'>
        <div className='container py-10 lg:py-8 px-0 w-[90%] md:w-[100%] mx-auto '>
          <div className='ourstory'>
            <h2 className='text-5xl text-center'>Contact Us</h2>
          </div>
        </div>
      </div>
      <div className='section-2 bg-titlecolor'>
        <div className='container py-10 lg:py-7 px-0 w-[90%] md:w-[100%] mx-auto '>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='my-3 '>
              <h4 className='mb-5 text-4xl text-center'>Product</h4>

              <Typography className='mb-4 text-center'>
                Product division aims to be a one-stop destination for
                homeowners seeking quality products and solutions to improve,
                secure, and beautify their residential properties, catering
                specifically to the needs and preferences of the small to middle
                residential market segment.
              </Typography>
              <div className='text-black'>
                <Accordion
                  open={open === 1}
                  icon={<Icon id={1} open={open} />}
                  className='bg-gray-200 pl-6 mt-2'
                >
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className='text-sm'
                  >
                    AGENTS JABODETABEK
                  </AccordionHeader>
                  <AccordionBody className='text-black'>
                    <div className='mb-3'>
                      <Typography className='font-bold'>
                        Jakarta Barat
                      </Typography>
                      <Typography>
                        PT. Chanaka Mitra Abadi (Bpk. Mino Ong)
                      </Typography>
                      <Typography>Jl. Raya Puri Kembangan No. 34 </Typography>
                      <Typography>Telp: 021-5805622 / 92022936</Typography>
                      <Typography>HP: 0816-1941-689</Typography>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  icon={<Icon id={2} open={open} />}
                  className='bg-gray-200 pl-6 mt-2'
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className='text-sm'
                  >
                    AGENTS NON JABODETABEK
                  </AccordionHeader>
                  <AccordionBody className='text-black'>
                    <div className='mb-3'>
                      <Typography className='font-bold'>
                        Jakarta Barat
                      </Typography>
                      <Typography>
                        PT. Chanaka Mitra Abadi (Bpk. Mino Ong)
                      </Typography>
                      <Typography>Jl. Raya Puri Kembangan No. 34 </Typography>
                      <Typography>Telp: 021-5805622 / 92022936</Typography>
                      <Typography>HP: 0816-1941-689</Typography>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>

            <div className='my-3 text-center'>
              <h4 className='mb-5 text-4xl'>Project</h4>

              <Typography className='mb-4'>
                Working closely with real estate developers and contractors,
                this part of the division offers customized solutions and design
                services to meet the specific requirements and preferences of
                each project. This may involve architectural design, engineering
                services, and value engineering to optimize project outcomes.
              </Typography>
              <Link href='mailto: marketing@trimitrakm.com' passHref>
                <Button variant='contained' className='bg-blue-400'>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
