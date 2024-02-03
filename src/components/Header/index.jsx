import React, { useState, useEffect } from "react";
import {
  Navbar,
  Select,
  Input,
  Option,
  Typography,
  IconButton,
  Button,
  Collapse,
} from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import auth from "@/utils/auth";
export function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  const handleLogout = () => {
    swal({
      title: "Anda berhasil Logout",
      text: "Silahkan klik tombol berikut",
      icon: "success",
    }).then(() => {
      auth.logout();
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mt-0 flex flex-col gap-2 p-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-norm transition-all duration-300 text-black md:text-white'
      >
        <a
          href='#'
          className='relative after:bg-white after:absolute after:h-[0.1em] after:w-full after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer mb-1'
        >
          Beranda
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-norm transition-all duration-300 text-black md:text-white'
      >
        <a
          href='#'
          className='relative after:bg-white after:absolute after:h-[0.1em] after:w-full after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer mb-1'
        >
          Lowongan
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-norm transition-all duration-300 text-black md:text-white'
      >
        <a
          href='#'
          className='relative after:bg-white after:absolute after:h-[0.1em] after:w-full after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer mb-1'
        >
          Proyek
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-norm transition-all duration-300 text-black md:text-white'
      >
        <a
          href='#'
          className='relative after:bg-white after:absolute after:h-[0.1em] after:w-full after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer mb-1'
        >
          Perusahaan
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-norm transition-all duration-300 text-black md:text-white'
      >
        <a
          href='#'
          className='relative after:bg-white after:absolute after:h-[0.1em] after:w-full after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer mb-1'
        >
          Ulasan
        </a>
      </Typography>
      <div className='flex items-center gap-x-1 lg:hidden'>
        {user && user.token ? (
          <Button variant='gradient' color='red' onClick={() => handleLogout()}>
            Logout
          </Button>
        ) : (
          <>
            <Button
              fullWidth
              variant='text'
              size='sm'
              className='bg-white text-primaryBtn border border-primaryBtn transition-all duration-300'
              onClick={() => router.push("/login")}
            >
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              size='sm'
              className='bg-primaryBtn transition-all duration-300'
              onClick={() => router.push("/register")}
            >
              <span>Sign in</span>
            </Button>
          </>
        )}
      </div>
    </ul>
  );

  return (
    <div className='max-h-auto w-full'>
      <Navbar
        className={`sticky navbar top-0 z-10 h-max max-w-full rounded-none bg-col backdrop-blur-none border-none backdrop-saturate-100 bg-opacity-100 shadow-none px-4 py-2 lg:px-8 lg:py-2 ${
          isSticky ? "bg-navbarcolor" : "bg-transparent"
        }`}
      >
        <div className='flex items-center justify-between text-blue-gray-900'>
          <Typography
            as='a'
            href='#'
            className='mr-4 cursor-pointer py-1.5 font-medium text-white'
          >
            Logo
          </Typography>
          <div className='mr-4 hidden lg:block'>{navList}</div>
          <div className='flex items-center justify-center gap-4 text-white h-12'>
            <div className='flex items-center gap-x-1'>
              {user && user.token ? (
                <Button
                  variant='gradient'
                  className='hidden lg:block'
                  color='red'
                  onClick={() => handleLogout()}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    variant='text'
                    size='sm'
                    className='hidden lg:inline-block text-white border border-white'
                    onClick={() => router.push("/login")}
                  >
                    <span>Log In</span>
                  </Button>
                  <Button
                    size='sm'
                    className='hidden lg:inline-block bg-white text-primaryBtn'
                    onClick={() => router.push("/register")}
                  >
                    <span>Sign in</span>
                  </Button>
                </>
              )}
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav} className='bg-white text-white '>
          {navList}
        </Collapse>
      </Navbar>
      <div className='mx-auto banner-section relative'>
        <div className='container-banner mx-auto px-4 max-w-4xl'>
          <div className='banner-content text-white'>
            <h1 className='text-3xl  lg:w-3/5'>
              Temukan Pekerjaan Favoritmu Dengan Mudah #AyoKerja
            </h1>
            <Typography className='w-auto lg:w-3/5 mb-6 lg:mb-12'>
              Cari pekerjaan yang tepat untuk profesi kamu, mulai dari lowongan
              kerja hingga beragam proyek. #KerjaUntukKejayaanBangsa
            </Typography>
            <form className=' w-full lg:grid lg:grid-cols-1  lg:w-3/4 lg:grid-flow-col lg:auto-cols-max px-4 md:px-5 py-2 bg-white rounded-md'>
              <div className='my-3 lg:my-0'>
                <Input
                  variant='standard'
                  label='Cari Lowongan'
                  placeholder='Standard'
                  className='border-none px-4 pt-2 md:col-span-2 '
                  labelProps={{
                    className: "px-4  after:border-none",
                  }}
                />
              </div>
              <div className='my-3 lg:my-0 mx-4 '>
                <Select
                  variant='standard'
                  label='Pilih Lokasi'
                  className='border-none  pt-2 '
                  labelProps={{
                    className: "after:border-none",
                  }}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <Option value='html'>Material Tailwind HTML</Option>
                  <Option value='react'>Material Tailwind React</Option>
                  <Option value='vue'>Material Tailwind Vue</Option>
                  <Option value='angular'>Material Tailwind Angular</Option>
                  <Option value='svelte'>Material Tailwind Svelte</Option>
                </Select>
              </div>
              <div className='block lg:flex items-center lg:justify-end'>
                <Button
                  size='lg'
                  className='p-4 bg-primaryBtn flex items-center justify-center w-full'
                >
                  <FaMagnifyingGlass className='text-white text-base' />
                </Button>
              </div>
            </form>
            <span>Ingin mencari lowongan secara spesifik? Klik di sini!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
