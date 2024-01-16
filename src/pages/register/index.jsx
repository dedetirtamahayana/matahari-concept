import React from "react";
import { Input, Button } from "@material-tailwind/react";

const Index = () => {
  return (
    <div className='container-register mx-auto'>
      {/* <div className='header'>
        <h1 className='text-center py-6'>SIJAIM</h1>
      </div> */}

      <div className='pt-16 sm:py-10'>
        <div className='illustrator image-login-container fixed top-30 mx-auto hidden sm:block'>
          <img
            className='image-signup ml-20'
            src='/bg-register.png'
            alt='Background'
          />
        </div>
        <div className='box register-form relative ml-0 mr-0 sm:ml-6 md:ml-0'>
          <div className='px-6 mb-10 sm:p-8 border-2 border-gray-300 rounded-lg bg-white'>
            <div className='mb-5'>
              <h4 className='text-xl font-bold'>Pendaftaran Akun</h4>
              <div className='mt-2 text-sm'>
                Sudah memiliki akun?
                <a href='/auth/login' className='text-primary font-bold'>
                  Masuk
                </a>
              </div>
            </div>
            <form action=''>
              <div>
                <div className='form-group mt-5'>
                  <div className='mb-2'>
                    <label htmlFor='username' className='text-sm'>
                      Nomor Induk Kependudukan (No. KTP)
                    </label>
                  </div>
                  <Input
                    variant='outlined'
                    label='Masukan Nomor Induk Kependudukan (No. KTP)'
                    placeholder='Masukan Nomor Induk Kependudukan (No. KTP)'
                  />
                </div>
                <div className='form-group mt-5'>
                  <div className='mb-2'>
                    <label htmlFor='username' className='text-sm'>
                      Nama lengkap
                    </label>
                  </div>
                  <Input
                    variant='outlined'
                    label='Masukan Nama lengkap'
                    placeholder='Masukan Nama lengkap'
                  />
                </div>
                <div className='form-group mt-5'>
                  <div className='mb-2'>
                    <label htmlFor='username' className='text-sm'>
                      Nama ibu kandung
                    </label>
                  </div>
                  <Input
                    variant='outlined'
                    label='Masukan Nama ibu kandung'
                    placeholder='Masukan Nama ibu kandung'
                  />
                </div>
              </div>
              <div className='mt-2 text-xs text-gray-500 mb-6'>
                Demi alasan keamanan, maka kamu wajib mengisi nama ibu kandung
                untuk memvalidasi kepemilikan KTP.
              </div>
              <div>
                <Button fullWidth className='bg-primaryBtn hover:bg-blue-500'>
                  Berikutnya
                </Button>
              </div>
              <div className='mt-3 text-xs text-gray-500 mb-6'>
                Dengan melakukan pendaftaran, saya setuju dengan Kebijakan
                Privasi dan Syarat & Ketentuan Kemnaker RI.
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <footer className='container-fluid hidden mt-14 sm:block text-center text-grey-500 text-sm fixed bottom-0 left-0 right-0 z-10 py-6 bg-white'>
        ©2024 SIJAIM
      </footer> */}
    </div>
  );
};

export default Index;
