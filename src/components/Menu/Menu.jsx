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
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import auth from "@/utils/auth";
import swal from "sweetalert";

export function MainMenu() {
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
      if (offset > 80) {
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
          <Menu>
            <MenuHandler>
              <div>
                <Avatar
                  src='https://docs.material-tailwind.com/img/face-2.jpg'
                  alt='avatar'
                  size='md'
                />
              </div>
            </MenuHandler>
            <MenuList className='flex flex-col gap-2'>
              <MenuItem className='flex items-center gap-4 py-2 pl-2 pr-8'>
                <Avatar
                  variant='circular'
                  alt='tania andrew'
                  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                />
                <div className='flex flex-col gap-1'>
                  <Typography
                    variant='small'
                    color='gray'
                    className='font-semibold'
                  >
                    Tania send you a message
                  </Typography>
                  <Typography className='flex items-center gap-1 text-sm font-medium text-blue-gray-500'>
                    13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className='flex items-center gap-4 py-2 pl-2 pr-8'>
                <Avatar
                  variant='circular'
                  alt='natali craig'
                  src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80'
                />
                <div className='flex flex-col gap-1'>
                  <Typography
                    variant='small'
                    color='gray'
                    className='font-semibold'
                  >
                    Natali replied to your email.
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className='flex items-center gap-4 py-2 pl-2 pr-8'>
                <Avatar
                  variant='circular'
                  alt='paypal'
                  src='https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png'
                />
                <div className='flex flex-col gap-1'>
                  <Typography
                    variant='small'
                    color='gray'
                    className='font-semibold'
                  >
                    You&apos;ve received a payment.
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
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
      <Navbar className='navbar top-0 z-10 h-max max-w-full rounded-none bg-col backdrop-blur-none border-none backdrop-saturate-100 bg-opacity-100 shadow-none px-4 py-2 lg:px-8 lg:py-2 bg-navbarcolor'>
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
                <div className='space-x-4'>
                  {user && user.user.role_id === 2 ? (
                    <Button
                      variant='text'
                      size='sm'
                      className='hidden lg:inline-block text-white border border-white hover:bg-white hover:text-primaryBtn'
                      onClick={() => router.push("/postlowongan")}
                    >
                      <span>Post Lowongan </span>
                    </Button>
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
    </div>
  );
}
