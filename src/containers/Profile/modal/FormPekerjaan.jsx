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
import ReactDatePicker from "react-datepicker";

const FormPekerjaan = ({ userId, token }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => {
    setOpen(false);
  };
  const [selectedMulai, setSelectedMulai] = useState(null);
  const [selectedSelesai, setSelectedSelesai] = useState(null);
  const [formValues, setFormValues] = useState({
    pelamar_id: userId,
    pekerjaan: "",
    perusahaan: "",
    id_tipe_pekerjaan: "",
    lokasi_tipe: "",
    lokasi: "",
    tgl_mulai: "",
    tgl_selesai: "",
    is_pekerjaan_sekarang: "",
    deskripsi: "",
  });
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleDateMulai = (date) => {
    const formattedDate = formatDate(date);
    setSelectedMulai(date);
    setFormValues({
      ...formValues,
      tgl_mulai: formattedDate,
    });
  };
  const handleDateSelesai = (date) => {
    const formattedDate = formatDate(date);
    setSelectedSelesai(date);
    setFormValues({
      ...formValues,
      tgl_selesai: formattedDate,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://103.27.206.237:10102/api/guest/pelamar/registrasi/pekerjaan",
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
        Pekerjaan
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
              Pekerjaan
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className='grid gap-4'>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Pekerjaan'
                    placeholder='Pekerjaan'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        pekerjaan: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Perusahaan'
                    placeholder='Perusahaan'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        perusahaan: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Tipe Pekerjaan'
                    placeholder='Tipe Pekerjaan'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        id_tipe_pekerjaan: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className='lg:col-span-1'>
                  <Input
                    variant='outlined'
                    label='Tipe Lokasi'
                    placeholder='Tipe Lokasi'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        lokasi_tipe: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='lg:col-span-1'>
                  <Input
                    variant='outlined'
                    label='Lokasi'
                    placeholder='Lokasi'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        tahun_selesai: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                  <div>
                    <div>
                      <ReactDatePicker
                        selected={selectedMulai}
                        onChange={handleDateMulai}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dateFormat='yyyy/MM/dd'
                        dropdownMode='select'
                        placeholderText='Tanggal Mulai'
                        className='border border-blue-gray-200 rounded-md focus:border-2 py-[8px] px-4 max-w-[216px] max-h-[40px]'
                      />
                    </div>
                  </div>
                  <div>
                    <ReactDatePicker
                      selected={selectedSelesai}
                      onChange={handleDateSelesai}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dateFormat='yyyy/MM/dd'
                      dropdownMode='select'
                      placeholderText='Tanggal Selesai'
                      className='border border-blue-gray-200 rounded-md focus:border-2 py-[8px] px-4 max-w-[216px] max-h-[40px]'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1'>
                  <Input
                    variant='outlined'
                    label='Pekerjaan Sekarang'
                    placeholder='Pekerjaan Sekarang'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        is_pekerjaan_sekarang: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='grid grid-cols-1'>
                  <Textarea
                    label='Deskripsi'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        deskripsi: e.target.value,
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

export default FormPekerjaan;
