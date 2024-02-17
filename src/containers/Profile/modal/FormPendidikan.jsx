import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import swal from "sweetalert";
import axios from "axios";

const FormPendidikan = ({ userId, token }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => {
    setOpen(false);
  };

  const [formValues, setFormValues] = useState({
    pelamar_id: userId,
    institusi: "",
    program_studi: "",
    pendidikan_tingkat_id: "",
    tahun_mulai: "",
    tahun_selesai: "",
    lokasi_jenis: "",
    lokasi: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://103.27.206.237:10102/api/guest/pelamar/registrasi/pendidikan",
        formValues,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      swal({
        title: "Anda berhasil Login",
        text: "Silahkan klik tombol berikut",
        icon: "success",
      });
    } catch (error) {
      swal(
        "Anda gagal login",
        "Harap periksa kembali email dan password anda",
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
        Pendidikan
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
              <div className='grid gap-4'>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Institusi'
                    placeholder='Institusi'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        institusi: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Program Studi'
                    placeholder='Program Studi'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        program_studi: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Tingkat Pendidikan'
                    placeholder='Tingkat Pendidikan'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        pendidikan_tingkat_id: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                  <div className='lg:col-span-1'>
                    <Input
                      variant='outlined'
                      label='Tahun Mulai'
                      placeholder='Tahun Mulai'
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          tahun_mulai: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='lg:col-span-1'>
                    <Input
                      variant='outlined'
                      label='Tahun Selesai'
                      placeholder='Tahun Selesai'
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          tahun_selesai: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Jenis Lokasi'
                    placeholder='Jenis Lokasi'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        lokasi_jenis: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Lokasi'
                    placeholder='Lokasi'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        lokasi: e.target.value,
                      });
                    }}
                  />
                </div>
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
