import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

const navListMenuItems = [
  {
    title: "Lovera",
    description: "Adjustable Roofing System",
    icon: UserGroupIcon,
    link: "product/lovera",
  },
  {
    title: "Giano",
    description: "Premium Doors & Windows",
    icon: Bars4Icon,
    link: "product/giano",
  },
  {
    title: "Aldora",
    description: "Garage Door",
    icon: SunIcon,
    link: "product/aldora",
  },
  {
    title: "Sequra",
    description: "Security Screen Doors & Windows",
    icon: GlobeAmericasIcon,
    link: "product/sequra",
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

const projectListMenuItems = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    icon: TagIcon,
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    icon: RectangleGroupIcon,
  },
];

function NavListMenu({ isSticky }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = (items) => {
    return items.map(({ icon, title, description, link }, key) => (
      <a href={link} key={key}>
        <MenuItem className='flex items-center gap-3 rounded-lg'>
          <div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant='h6'
              color='blue-gray'
              className='flex items-center text-sm font-bold'
            >
              {title}
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs !font-medium text-blue-gray-500'
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ));
  };

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className={`flex items-center gap-2 py-2 px-4 font-medium text-black custom-text `}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <a href='#product'>Product</a>

              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
            {renderItems(navListMenuItems)}
          </ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>
          {renderItems(navListMenuItems)}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function ProjectListMenu({ isSticky }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = (items) => {
    return items.map(({ icon, title, description, link }, key) => (
      <a href='#' key={key}>
        <MenuItem className='flex items-center gap-3 rounded-lg'>
          <div className='flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 '>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant='h6'
              color='blue-gray'
              className='flex items-center text-sm font-bold'
            >
              {title}
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs !font-medium text-blue-gray-500'
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ));
  };

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className={`flex items-center gap-2 py-2 px-4 font-medium text-black custom-text `}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <a href='#project'>Project</a>

              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
            {renderItems(projectListMenuItems)}
          </ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>
          {renderItems(projectListMenuItems)}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ isSticky }) {
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 '>
      <NavListMenu isSticky={isSticky} />
      <ProjectListMenu isSticky={isSticky} />

      <Typography
        as='a'
        href='/our-story'
        variant='small'
        className={`font-medium text-black custom-text `}
      >
        <ListItem className='flex items-center gap-2 py-2 lg:px-4 custom-text'>
          Our Story
        </ListItem>
      </Typography>
      <Typography
        as='a'
        href='/contact-us'
        variant='small'
        className={`font-medium text-black `}
      >
        <ListItem className='flex items-center gap-2 py-2 lg:px-4 custom-text'>
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function MenuInternal() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      <div
        className={`absolute w-full z-50 transition-colors duration-500 ${
          isSticky ? "sticky bg-blue-gray-100 bg-opacity-0" : "bg-white"
        }`}
        style={{
          backgroundColor: isSticky ? "white" : "#cfd8dc",
          transition: "background-color 0.5s ease-out",
        }}
      >
        <div>
          <div className='container px-0'>
            <Navbar className=' top-0 h-auto w-full rounded-none text-white bg-transparent backdrop-blur-none border-none backdrop-saturate-100 bg-opacity-100 shadow-none p-3 lg:px-0 lg:py-2 '>
              <div className='flex items-center justify-between text-blue-gray-900 '>
                <Link href={"/"}>
                  <img src='/logo.png' className='w-24 h-24' alt='' href='/' />
                </Link>
                <div className='hidden lg:block'>
                  <NavList isSticky={isSticky} />
                </div>
                <IconButton
                  variant='text'
                  color={isSticky ? "black" : "white"}
                  className='lg:hidden'
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className='h-6 w-6' strokeWidth={2} />
                  ) : (
                    <Bars3Icon className='h-6 w-6' strokeWidth={2} />
                  )}
                </IconButton>
              </div>
              <Collapse open={openNav} className='bg-white'>
                <NavList isSticky={isSticky} />
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
