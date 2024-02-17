import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import auth from "@/utils/auth";

export const Populer = () => {
  const [sektors, setSektors] = useState([]);
  const token = auth.getToken();
  const router = useRouter();

  useEffect(() => {
    fetchDataSektor();
  }, []);

  const fetchDataSektor = async () => {
    try {
      const response = await axios.get(
        "http://103.27.206.237:10102/api/master/sektor",
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      setSektors(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSektorClick = (sektorId) => {
    router.push(`/view-lowongan?sektorId=${sektorId}`);
  };

  return (
    <div className='section py-10 md:pt-10 pb-20'>
      <div className='container mx-auto'>
        <h1 className='py-4 text-3xl'>Pekerjaan Populer</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {sektors.map((sektor) => (
            <Button
              key={sektor.id}
              className='p-4 rounded-lg border border-black bg-white text-black justify-center items-center md:flex hidden
              transition ease-in-out delay-160  hover:-translate-y-1 hover:scale-80 duration-300'
              onClick={() => handleSektorClick(sektor.id)}
            >
              {sektor.sektor}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
