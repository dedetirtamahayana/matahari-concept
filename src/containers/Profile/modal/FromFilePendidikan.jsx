import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Textarea,
  Typography,
  Input,
} from "@material-tailwind/react";
import swal from "sweetalert";
import axios from "axios";
import { FaUpload } from "react-icons/fa6";

const FormPendidikan = ({ userId, token }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = selectedFile;
    const jenis = e.target.jenis.value;
    const keterangan = e.target.keterangan.value;

    try {
      const formData = new FormData();
      formData.append("pelamar_id", userId);
      formData.append("jenis", jenis);
      formData.append("keterangan", keterangan);
      formData.append("file", file);

      const response = await axios.post(
        "http://103.27.206.237:10102/api/guest/pelamar/uploadFile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      swal({
        title: "File berhasil diunggah",
        text: "File pendidikan berhasil diunggah.",
        icon: "success",
      });
      handleClose(); // Tutup dialog setelah sukses mengunggah
    } catch (error) {
      console.error("Error:", error);
      swal(
        "Gagal mengunggah file",
        "Terjadi kesalahan saat mengunggah file pendidikan.",
        "error"
      );
    }
  };

  return (
    <>
      <Typography
        onClick={handleOpen}
        className='text-primaryBtn my-2 cursor-pointer'
      >
        Upload File Pendidikan
      </Typography>
      <Dialog
        size='sm'
        open={open}
        handler={handleOpen}
        className='bg-transparent shadow-none overflow-auto'
      >
        <Card className='mx-auto'>
          <CardBody className='px-8 py-5'>
            <Typography variant='h4' color='blue-gray' className='pb-4'>
              Pendidikan
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col items-center my-4'>
                {selectedFile && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt='Selected File'
                    className='w-40 h-auto mb-2'
                  />
                )}
                <label
                  htmlFor='file-upload'
                  className='cursor-pointer flex items-center'
                >
                  <span className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center'>
                    <FaUpload className='mr-2' />
                    Upload File
                  </span>
                </label>
                <input
                  id='file-upload'
                  type='file'
                  className='hidden'
                  onChange={handleFileChange}
                />
              </div>
              <div className='grid gap-4'>
                <div className='grid grid-cols-1'>
                  <Input
                    name='jenis'
                    variant='outlined'
                    label='Tingkat Pendidikan'
                    placeholder='Tingkat Pendidikan'
                  />
                </div>
                <Textarea name='keterangan' label='Deskripsi Diri' />
              </div>
              <div className='flex justify-between my-4'>
                <Button variant='text' color='red' onClick={handleClose}>
                  <span>Cancel</span>
                </Button>
                <Button variant='gradient' color='green' type='submit'>
                  <span>Confirm</span>
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
};

export default FormPendidikan;
