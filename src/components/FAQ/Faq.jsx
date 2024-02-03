import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaWhatsapp, FaPhoneFlip, FaEnvelope } from "react-icons/fa6";

const Faq = () => {
  return (
    <div className='selection py-10 lg:py-16'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl mb-3'>Masih punya pertanyaan?</h2>
          <Typography className='mb-3'>
            Kamu masih bingung atau punya pertanyaan lebih lanjut, kami siap
            membantu kamu!
          </Typography>
          <Button className='bg-primaryBtn my-9'>FAQ</Button>
        </div>
        <div className='border-t border-t-black pt-9 '>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='mx-auto flex flex-col items-center'>
              <div className='flex items-center w-72 my-4'>
                <FaEnvelope className='mr-4' fontSize='1.5em' />
                <div>
                  <label>Email</label>
                  <Typography>
                    <a href='#' className=''>
                      @kemnaker.go.id
                    </a>
                  </Typography>
                </div>
              </div>
            </div>

            <div className='mx-auto flex flex-col items-center'>
              <div className='flex items-center w-72 my-4'>
                <FaWhatsapp className='mr-4' fontSize='1.5em' />
                <div>
                  <label>Whatsapp</label>
                  <Typography>
                    <a href='#' className=''>
                      +62 811-8712-018
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
            <div className='mx-auto flex flex-col items-center'>
              <div className='flex items-center w-72 my-4'>
                <FaPhoneFlip className='mr-4' fontSize='1.5em' />
                <div>
                  <label>Call Center</label>
                  <Typography>
                    <a href='#' className=''>
                      +62 811-8712-018
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
