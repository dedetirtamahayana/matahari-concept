import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { StickyNavbar } from "@/components/Header";
import Loading from "@/components/Loading/Loading";
import Count from "@/components/Count/Count";
import Footer from "@/components/Footer/Footer";
import { Typography, Button, Input } from "@material-tailwind/react";
import auth from "@/utils/auth";
import {
  FaBriefcase,
  FaRegClock,
  FaPeriscope,
  FaUserGroup,
} from "react-icons/fa6";
import { useRouter } from "next/router";

const ViewLowongan = () => {
  const [data, setLowonganList] = useState([]);
  const [filteredLowonganList, setFilteredLowonganList] = useState([]);
  const [sektor, setSektor] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = auth.getToken();
  const router = useRouter();
  const scrollRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { sektorId } = router.query;
  const [selectedCategory, setSelectedCategory] = useState(sektorId);

  useEffect(() => {
    fetchData();
    fetchDataSektor();
  }, [sektorId]);
  console.log(sektorId);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://103.27.206.237:10102/api/guest/lowongan/all"
      );

      setLowonganList(response.data);
      setFilteredLowonganList(response.data);
      console.log("data", response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

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
      setSektor(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const formatIdr = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const fetchTimeDifference = (createdAt) => {
    const diffInMs = new Date() - new Date(createdAt);
    const diffInHours = diffInMs / (1000 * 60 * 60); // milliseconds to hours
    if (diffInHours >= 24) {
      const diffInDays = Math.floor(diffInHours / 24); // hours to days
      const remainingHours = Math.round(diffInHours % 24); // remaining hours
      return `${diffInDays} hari, ${remainingHours} jam`;
    } else {
      return `${Math.round(diffInHours)} jam`;
    }
  };

  const handleSearchFilter = () => {
    if (!data) return;

    const filteredBySearch = searchQuery
      ? data.filter(
          (lowongan) =>
            lowongan.lowongan &&
            lowongan.lowongan.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data;

    setFilteredLowonganList(filteredBySearch);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    const filteredByCategory = categoryId
      ? data.filter((lowongan) => lowongan.sektor_sub_id === categoryId)
      : data;

    setFilteredLowonganList(filteredByCategory);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(sektor);
  if (loading || !data || !sektor) {
    return <Loading />;
  }

  return (
    <>
      <StickyNavbar />
      <Count />
      <div className='section py-6'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='text-3xl pb-4'>Kategori lowongan pekerjaan</h2>
            <Typography className='text-gray-600'>
              Pilih kategori lowonga kerja favorit kamu di bawah ini dan temukan
              lowongan idaman kamu
            </Typography>
          </div>
          <div className='grid grid-cols-6 gap-4 my-10'>
            {sektor.map((item, key) => (
              <div
                className='rounded-lg shadow-lg border p-4 '
                key={item.id}
                onClick={() => handleCategoryFilter(item.id)}
              >
                <Typography className='pb-5'>{item.sektor}</Typography>
                <Typography>{item.deskripsi}</Typography>
              </div>
            ))}
          </div>

          <div className=''>
            <h2 className='text-3xl pb-4' ref={scrollRef}>
              Temukan lowongan pekerjaan favoritmu
            </h2>
            <div className='mb-4'>
              <Input
                type='text'
                placeholder='Cari lowongan pekerjaan'
                label='Cari lowongan pekerjaan'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearchFilter();
                  }
                }}
              />
            </div>
            <div>
              <button onClick={() => handleCategoryFilter(null)}>
                Semua Lowongan
              </button>
              <button onClick={() => handleCategoryFilter(1)}>
                Kategori 1
              </button>
              <button onClick={() => handleCategoryFilter(2)}>
                Kategori 2
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {filteredLowonganList.map((item, key) => (
                <div
                  className='rounded-lg bg-white p-6 shadow-xl'
                  key={item.id}
                >
                  <div className='content-lowongan grid gap-3 auto-cols-max grid-flow-col'>
                    <div className=''>
                      {item.perusahaan && item.perusahaan.foto_profile ? ( // Tambahkan pengecekan ini
                        <img
                          src={`http://103.27.206.237:10102/storage${item.perusahaan.foto_profile}`}
                          alt=''
                          className='w-20 h-20 rounded-full'
                        />
                      ) : (
                        <img
                          src='./job.png'
                          alt=''
                          className='w-20 h-20 rounded-full'
                        />
                      )}
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
                  <div className='flex justify-end'>
                    <Button
                      className='bg-primaryBtn'
                      onClick={() =>
                        router.push({
                          pathname: "/lowongan/[lowonganId]",
                          query: { lowonganId: item.id },
                        })
                      }
                    >
                      Detail
                    </Button>
                  </div>

                  <div className='border-t grid grid-cols-2 mt-4 pt-4 text-gray-400'>
                    <Typography className='justify-self-start text-sm flex gap-3 items-center'>
                      <FaRegClock />
                      {fetchTimeDifference(item.created_at)} yang lalu
                    </Typography>
                    <Typography className='justify-self-end text-sm flex gap-3 items-center'>
                      <FaUserGroup />
                      {item.jumlah_lowongan} orang
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewLowongan;
