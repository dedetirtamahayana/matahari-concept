import React, { useState, useEffect } from "react";
import {
  Navbar,
  Select,
  Input,
  Option,
  IconButton,
  Button,
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import auth from "@/utils/auth";
import swal from "sweetalert";
import PostLowongan from "@/containers/PostLowongan/PostLowongan";

const MenuPler = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const { user } = useSelector((state) => state.login) || {};

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
      setIsSticky(offset > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = (
    <ul className='mt-0 flex flex-col gap-2 p-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {/* Tambahkan item navigasi di sini */}
    </ul>
  );

  return (
    <>
      <div className='max-h-auto w-full'>
        <Navbar
          className={`sticky navbar top-0 z-10 h-max max-w-full rounded-none bg-col backdrop-blur-none border-none backdrop-saturate-100 bg-opacity-100 shadow-none px-4 py-2 lg:px-8 lg:py-2 ${
            isSticky ? "bg-navbarcolor" : "bg-transparent"
          }`}
        >
          <div className='flex items-center justify-between text-blue-gray-900'>
            <Typography
              as='a'
              href='/'
              className='mr-4 cursor-pointer py-1.5 font-medium text-white'
            >
              Logo
            </Typography>
            <div className='mr-4 hidden lg:block'>{navList}</div>
            <div className='flex items-center justify-center gap-4 text-white h-12'>
              <div className='flex items-center gap-x-1'>
                {user && user.token ? (
                  <div className='space-x-4'>
                    {user && user.user.role_id === 2 ? (
                      <PostLowongan />
                    ) : (
                      <Button
                        variant='text'
                        size='sm'
                        className='hidden lg:inline-block text-white border border-white hover:bg-white hover:text-primaryBtn'
                      >
                        <span>Portofolio </span>
                      </Button>
                    )}

                    <Menu className='w-72 mt-3'>
                      <MenuHandler>
                        <Avatar src='/user.png' alt='avatar' size='md' />
                      </MenuHandler>
                      <MenuList className='flex flex-col gap-2'>
                        <MenuItem className='flex items-center gap-4 py-2 pl-2 pr-8'>
                          <Avatar
                            variant='circular'
                            alt='tania andrew'
                            src='/user.png'
                          />
                          <div className='flex flex-col gap-1'>
                            <Typography
                              variant='small'
                              color='gray'
                              className='font-semibold'
                            >
                              {user.data.nama}
                            </Typography>
                            <Typography className='flex items-center gap-1 text-sm font-medium text-blue-gray-500'>
                              dedemahayana@gmail.com
                            </Typography>
                          </div>
                        </MenuItem>
                        {user && user.user.role_id === 2 ? (
                          <MenuItem
                            onClick={() =>
                              router.push({
                                pathname: "/perusahaan/[perusahaanId]",
                                query: { perusahaanId: user.data.id },
                              })
                            }
                          >
                            Profile Perusahaan
                          </MenuItem>
                        ) : (
                          <MenuItem
                            onClick={() =>
                              router.push({
                                pathname: "/profile/[userId]",
                                query: { userId: user.data.id },
                              })
                            }
                          >
                            Profile
                          </MenuItem>
                        )}
                        <MenuItem>Pengaturan</MenuItem>
                        <MenuItem className='border-t' onClick={handleLogout}>
                          Logout
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
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
                Cari pekerjaan yang tepat untuk profesi kamu, mulai dari
                lowongan kerja hingga beragam proyek. #KerjaUntukKejayaanBangsa
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
    </>
  );
};

export default MenuPler;
