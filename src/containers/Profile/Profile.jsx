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
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import EditProfileForm from "./modal/EditProfileForm";
import FormPendidikan from "./modal/FormPendidikan";
import FormFilePendidikan from "./modal/FromFilePendidikan";
import FormPekerjaan from "./modal/FormPekerjaan";
import { FaPlus, FaFilePen } from "react-icons/fa6";
import swal from "sweetalert";

const Profile = () => {
  const router = useRouter();
  const token = auth.getToken();
  const [data, setData] = useState(null);
  const { userId } = router.query;
  const [open, setOpen] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const fileInputRef = useRef(null);

  const fetchGetData = async () => {
    try {
      const response = await axios.get(
        `http://103.27.206.237:10102/api/pelamar/profile/${userId}`,
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);
    uploadImage(file);
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("pelamar_id", userId);
      formData.append("jenis", "1");
      formData.append("file", file);

      const response = await axios.post(
        `http://103.27.206.237:10102/api/guest/pelamar/uploadFile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      swal({
        title: "Anda berhasil Login",
        text: "Silahkan klik tombol berikut",
        icon: "success",
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    fetchGetData();
  }, []);

  if (!data) {
    return <Loading />;
  }
  const imageUrl = `http://103.27.206.237:10102/storage${data.foto_profile}`;
  console.log(imageUrl);
  console.log(data.alamat);

  return (
    <>
      <StickyNavbar />
      <div className='section py-8'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
            <div className='grid grid-cols-1 lg:col-span-3 items-center'>
              <div className='lg:flex items-start'>
                <Avatar
                  src={imageUrl}
                  alt='avatar'
                  className='w-full lg:w-auto cursor-pointer'
                  size='xl'
                  onClick={handleAvatarClick}
                />
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  className='hidden'
                />

                <div className='lg:flex flex-col lg:ml-4'>
                  <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div className='lg:col-span-2 flex items-center justify-between'>
                      <h2 className='text-2xl font-bold '>
                        {data.nama ? data.nama : "Juki Tobing"}
                      </h2>
                      <Typography
                        className='text-primaryBtn cursor-pointer flex items-center'
                        onClick={handleOpen}
                      >
                        <FaFilePen className='mr-2' />
                        Edit info dasar
                      </Typography>
                      <Dialog
                        open={open}
                        handler={handleOpen}
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0.9, y: -100 },
                        }}
                        className='h-[42rem] overflow-y-scroll m-6'
                      >
                        <DialogHeader>INFORMASI DASAR</DialogHeader>
                        <DialogBody className='item center justify-center'>
                          <div className='flex justify-center items-center'>
                            <Avatar
                              src={imageUrl}
                              alt='avatar'
                              className='w-full lg:w-auto cursor-pointer'
                              size='xl'
                              onClick={handleAvatarClick}
                            />
                            <input
                              ref={fileInputRef}
                              type='file'
                              accept='image/*'
                              className='hidden'
                            />
                          </div>
                          <div className='flex justify-center items-center pt-4'>
                            <EditProfileForm
                              userId={userId}
                              token={token}
                              handleClose={() => setOpen(false)}
                            />
                          </div>
                        </DialogBody>
                        <DialogFooter></DialogFooter>
                      </Dialog>
                    </div>
                    <div className=' grid gap-2'>
                      <Typography className='text-sm text-gray-500'>
                        WHATSAPP NUMBER
                        <span className='block text-black text-sm'>
                          {data.no_tlp ? data.no_tlp : "08718313813"}
                        </span>
                      </Typography>
                      <Typography className='text-sm text-gray-500'>
                        Alamat
                        <span className='block text-black text-sm'>
                          {data.alamat
                            ? data.alamat
                            : "Jl. Pemuda Bingung No.12"}
                        </span>
                      </Typography>
                      <Typography className='text-sm text-gray-500'>
                        Tempat Tanggal Lahir
                        <span className='block text-black text-sm'>
                          {data.tempat_lahir ? data.tempat_lahir : "Denpasar"},{" "}
                          {data.tanggal_lahir
                            ? data.tanggal_lahir
                            : "2000-02-3"}
                        </span>
                      </Typography>
                      <Typography className='text-sm text-gray-500'>
                        Status Perkawinan
                        <span className='block text-black text-sm'>
                          {data.status_perkawinan
                            ? data.status_perkawinan
                            : "Belom Kawin"}
                        </span>
                      </Typography>
                    </div>
                    <div className=' grid gap-2'>
                      <Typography className='text-sm text-gray-500'>
                        EMAIL
                        <span className='block text-black text-sm'>
                          {data.email ? data.email : "JukiGanteng@gmai.com"}
                        </span>
                      </Typography>

                      <Typography className='text-sm text-gray-500'>
                        Jenis Kelamin
                        <span className='block text-black text-sm'>
                          {data.jenis_kelamin
                            ? data.jenis_kelamin
                            : "Laki-Laki"}
                        </span>
                      </Typography>
                      <Typography className='text-sm text-gray-500'>
                        PENGALAMAN KERJA
                        <span className='block text-black text-sm'>
                          s4324324
                        </span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border rounded-lg shadow-lg p-5 col-span-2 items-center'>
              <h2>Kelengkapan Pofile</h2>
              <div className='flex items-center'>
                <FaPlus className='mr-2 text-primaryBtn my-0' />
                <FormPendidikan userId={userId} token={token} className='m-0' />
              </div>

              <div className='flex items-center'>
                <FaPlus className='mr-2 text-primaryBtn my-0' />
                <FormFilePendidikan userId={userId} token={token} />
              </div>
              <div className='flex items-center'>
                <FaPlus className='mr-2 text-primaryBtn my-0' />
                <FormPekerjaan userId={userId} token={token} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
