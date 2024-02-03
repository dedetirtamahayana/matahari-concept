import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Layanan = () => {
  return (
    <div className='section py-10 lg:py-20 bg-gray-200'>
      <div className='container mx-auto'>
        <div className='lg:text-center'>
          <h2 className='text-3xl my-4'>Kami mendengar dan memperhatikan mu</h2>
          <Typography className=''>
            Kami hadir untuk membantu kamu - kamu di sektor non formal, mikro
            bahkan penyandang disabilitas untuk menemukan pekerjaan
          </Typography>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-12'>
          <Card className='mt-6 w-auto mx-auto'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <img src='/mikro.jpg' alt='card-image' />
            </CardHeader>
            <CardBody className='lg:h-48'>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                Lowongan Pekerjaan Mikro
              </Typography>
              <Typography>
                Bagi kamu yang membutuhkan pekerjaan di sektor non profesional
                dan mikro, klik tombol di bawah untuk mencari pekerjaan di
                sektor non profesional dan mikro.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button className='bg-primaryBtn'>Read More</Button>
            </CardFooter>
          </Card>
          <Card className='mt-6 w-auto mx-auto'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <img src='/disabilitas.jpg' alt='card-image' />
            </CardHeader>
            <CardBody className='lg:h-48'>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                Lowongan Disabilitas
              </Typography>
              <Typography>
                Temukan lowongan kerja sesuai keahlian kamu untuk penyandang
                disabilitas
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button className='bg-primaryBtn'>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
