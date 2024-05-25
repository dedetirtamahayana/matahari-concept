import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";

const Project = () => {
  const data = [
    {
      nama: "Project X",
      image: "/project.png",
      link: "/lovera",
    },
    {
      nama: "Project X",
      image: "/project.png",
      link: "tautan_2",
    },
    {
      nama: "Project X",
      image: "/project.png",
      link: "/lovera",
    },
    {
      nama: "Project X",
      image: "/project.png",
      link: "tautan_2",
    },
    {
      nama: "Project X",
      image: "/project.png",
      link: "/lovera",
    },
    {
      nama: "Project X",
      image: "/project.png",
      link: "tautan_2",
    },
    {
      nama: "Project X",
      image: "/project.png",
      link: "/lovera",
    },
    {
      nama: "Project X",
      image: "/project.png",
      link: "tautan_2",
    },
  ];
  return (
    <div className='section bg-blue-gray-100 ' id='project'>
      <div className='container py-10 lg:py-24 px-0 w-[90%] md:w-[100%] mx-auto '>
        <div className='product'>
          <div className='heading text-center'>
            <h2 className='text-5xl uppercase custom-text'>Project</h2>
            <Typography className='lg:w-[900px] mx-auto custom-text'>
              The project division is a group of individuals within an
              organization assembled to plan, execute, and manage projects
              related to aluminum-based products or processes. These teams are
              consisting of professionals with diverse skills and expertise
              necessary to successfully complete the project like building,
              residence and another project.
            </Typography>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-5'>
              {data.map((item, i) => (
                <Card key={i} className='border shadow-lg rounded-none'>
                  <CardBody className='p-0 flex justify-center items-center'>
                    <Link href={item.link}>
                      <img src={item.image} alt='' className='md:w-[278px]' />
                    </Link>
                  </CardBody>
                  <CardFooter>
                    <Typography className='text-black font-semibold'>
                      {item.nama}
                    </Typography>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
