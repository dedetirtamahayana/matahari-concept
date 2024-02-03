import React, { useState, useEffect } from "react";
import { FaBriefcase, FaRegClock, FaPeriscope } from "react-icons/fa6";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Lowongan = () => {
  const [dataLowowngan, setData] = useState([]);
  const formatIdr = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://103.27.206.237:10102/api/guest/lowongan/all"
      );
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className='section py-10 lg:py-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:auto-cols-max md:lg:grid-flow-col '>
            <div>
              <h2 className='text-3xl mb-4'>Lowongan Unggulan</h2>
              <Typography className='m-0'>
                Berikut merupakan lowongan - lowongan kerja terpopuler
                berdasarkan peminat.
              </Typography>
            </div>
            <div className='items-end flex mt-4 lg:mt-0'>
              <Button className='bg-primaryBtn'>Lihat Semua Lowongan</Button>
            </div>
          </div>
          <div className=' mt-6 lg:mt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {dataLowowngan
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0, 6)
                .map((item) => (
                  <div className='rounded-lg bg-white p-6 shadow-xl'>
                    <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                      <div className=''>
                        <img src='/panasonic.png' alt='' />
                      </div>
                      <div className='flex-grow'>
                        <h5 className='text-xl'>{item.perusahaan?.nama}</h5>
                        <Typography className='flex gap-3 my-3 items-center '>
                          <FaPeriscope />
                          {item.perusahaan?.alamat}
                        </Typography>
                        <Typography className='flex gap-3 my-3 items-center'>
                          <FaBriefcase />
                          {item.lowongan}
                        </Typography>
                        <Typography className='flex gap-3 my-3 items-center whitespace-pre-wrap'>
                          <FaRegClock />
                          {item.tipe_perkerjaan?.tipe}
                        </Typography>
                        {item.gaji_dari && item.gaji_sampai ? (
                          <Typography>
                            {formatIdr.format(item.gaji_dari)} -{" "}
                            {formatIdr.format(item.gaji_sampai)}
                          </Typography>
                        ) : (
                          <Typography>Gaji Dirahasiakan</Typography>
                        )}
                      </div>
                    </div>
                    <div className='border-t grid grid-cols-2 mt-4 pt-4 text-gray-400'>
                      <Typography className='justify-self-start'>
                        3 jam yang lalu
                      </Typography>
                      <Typography className='justify-self-end'>
                        3 lowongan
                      </Typography>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lowongan;
