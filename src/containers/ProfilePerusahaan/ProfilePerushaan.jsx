import Footer from "@/components/Footer/Footer";
import { StickyNavbar } from "@/components/Header";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import auth from "@/utils/auth";
import axios from "axios";
import Loading from "@/components/Loading/Loading";
import "react-datepicker/dist/react-datepicker.css";
import {
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { MainMenu } from "@/components/Menu/Menu";
import { CustomLayoutTabs } from "@/components/Tab/Tab";

const ProfilePerusahaan = () => {
  const router = useRouter();
  const token = auth.getToken();
  const [data, setData] = useState(null);
  const { perusahaanId } = router.query;
  const [open, setOpen] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);
  const fileInputRef = useRef(null);
  const bannerInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState("html");
  const dataTab = [
    {
      label: "Dashboard",
      value: "dashboard",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Profile",
      value: "profile",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Settings",
      value: "settings",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  useEffect(() => {
    // Memuat data hanya jika perusahaanId telah ada
    if (perusahaanId) {
      fetchGetData();
    }
  }, [perusahaanId]);

  const fetchGetData = async () => {
    try {
      const response = await axios.get(
        `http://103.27.206.237:10102/api/perusahaan/profile/${perusahaanId}`,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };
  const handleBannerClick = () => {
    bannerInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);
    uploadImage(file);
  };
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    setBannerFile(file);
    uploadBanner(file);
  };
  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("perusahaan_id", perusahaanId);
      formData.append("jenis", "foto_profile");
      formData.append("file", file);

      const response = await axios.post(
        `http://103.27.206.237:10102/api/guest/perusahaan/uploadFile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      // Perbarui data setelah berhasil mengunggah gambar
      await fetchGetData();

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const uploadBanner = async (file) => {
    try {
      const formData = new FormData();
      formData.append("perusahaan_id", perusahaanId);
      formData.append("jenis", "foto_latar");
      formData.append("file", file);

      const response = await axios.post(
        `http://103.27.206.237:10102/api/guest/perusahaan/uploadFile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      // Perbarui data setelah berhasil mengunggah gambar
      await fetchGetData();

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!data) {
    return <Loading />;
  }

  const imageUrl = `http://103.27.206.237:10102/storage${data.foto_profile}`;
  const bannerUrl = `http://103.27.206.237:10102/storage${data.foto_latar}`;
  console.log(data.alamat);

  // Menampilkan halaman hanya jika data sudah diterima
  return (
    <>
      <MainMenu />
      <div className='section'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
            <div className='col-span-4 rounded-lg shadow-lg'>
              <div>
                <input
                  ref={bannerInputRef}
                  type='file'
                  accept='image/*'
                  onChange={handleBannerChange}
                  className='hidden'
                />
                <img
                  src={bannerUrl}
                  alt=''
                  className='w-full lg:w-auto cursor-pointer'
                  onClick={handleBannerClick} // Menghubungkan klik pada gambar dengan fungsi handleBannerClick
                />
              </div>
              <div className='-mt-16 px-6'>
                <Avatar
                  src={imageUrl}
                  alt='avatar'
                  className='w-full lg:w-auto cursor-pointer'
                  size='xxl'
                  onClick={handleAvatarClick}
                />
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  className='hidden'
                />
              </div>
              <div className='p-6 border-b'>
                <div>
                  <h2 className='text-3xl capitalize mb-2'>{data.nama}</h2>
                  <Typography className='capitalize text-gray-600  mb-2 '>
                    {data.deskripsi}
                  </Typography>
                  <Typography className='capitalize text-gray-600 text-sm  mb-2 '>
                    {data.alamat}
                  </Typography>
                </div>
              </div>
              <div className='p-6 border-b'>
                <Tabs value={activeTab}>
                  <TabsHeader
                    className='rounded-none border-b border-blue-gray-50 bg-transparent p-0'
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                  >
                    {dataTab.map(({ label, value }) => (
                      <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                      >
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody>
                    {dataTab.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                        {desc}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
                <CustomLayoutTabs></CustomLayoutTabs>
              </div>
            </div>
            <div className='col-span-2'>
              <Typography>{data.nama}</Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePerusahaan;
