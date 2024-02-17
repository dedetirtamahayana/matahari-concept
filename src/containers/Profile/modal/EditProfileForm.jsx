import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import {
  Avatar,
  Input,
  Select,
  Option,
  Checkbox,
  Textarea,
  Button,
} from "@material-tailwind/react";
import ReactDatePicker from "react-datepicker";

const EditProfileForm = ({ userId, token, handleClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formValues, setFormValues] = useState({
    id: userId,
    nik: "",
    nama: "",
    jenis_kelamin: "",
    alamat: "",
    no_tlp: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    status_perkawinan: "",
    alamat_provinsi: "",
    alamat_kota: "",
    alamat_kecamatan: "",
    alamat_kelurahan: "",
    alamat_kode_pos: "",
    is_pencari_kerja: "0",
    is_pencari_pelatian: "0",
    email: "",
    is_disabilitas: "0",
    deskripsi_diri: "",
  });

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(date);
    setFormValues({
      ...formValues,
      tanggal_lahir: formattedDate,
    });
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://103.27.206.237:10102/api/guest/pelamar/registrasi/biodata",
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
    <div className='flex justify-center items-center'>
      <form
        className='max-w-screen-lg mb-2 w-80 sm:w-[440px]'
        onSubmit={handleSubmit}
      >
        <div className='grid gap-4 mx-auto'>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='NIK'
              placeholder='NIK'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  nik: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='Nama '
              placeholder='Nama '
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  nama: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Select
              label='Jenis Kelamin'
              value={formValues.jenis_kelamin}
              onChange={(selectedValue) => {
                setFormValues({
                  ...formValues,
                  jenis_kelamin: selectedValue,
                });
              }}
            >
              <Option value='Laki-Laki'>Laki-Laki</Option>
              <Option value='Perempuan'>Perempuan</Option>
            </Select>
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='No Telfon '
              placeholder='No Telfon '
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  no_tlp: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='Provinsi'
              placeholder='Provinsi'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  alamat_provinsi: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='Kota'
              placeholder='Kota'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  alamat_kota: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='Kecamatan'
              placeholder='Kecamatan'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  alamat_kecamatan: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='Kelurahan'
              placeholder='Kelurahan'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  alamat_kelurahan: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='Kode Pos'
              placeholder='Kode Pos'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  alamat_kode_pos: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Input
              variant='outlined'
              label='Alamat'
              placeholder='Alamat'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  alamat: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div>
              <Input
                variant='outlined'
                label='Tempat'
                placeholder='Tempat'
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    tempat_lahir: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <ReactDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dateFormat='yyyy/MM/dd'
                dropdownMode='select'
                placeholderText='Tanggal Lahir'
                className='border border-blue-gray-200 rounded-md focus:border-2 py-[8px] px-4 max-w-[216px] max-h-[40px]'
              />
            </div>
          </div>
          <div className='grid grid-cols-1'>
            <Select
              label='Status Perkawinan'
              value={formValues.status_perkawinan}
              onChange={(selectedValue) => {
                setFormValues({
                  ...formValues,
                  status_perkawinan: selectedValue,
                });
              }}
            >
              <Option value='Sudah Kawin'>Sudah Kawin</Option>
              <Option value='Belum Kawin'>Belum Kawin</Option>
              <Option value='Duda'>Duda</Option>
              <Option value='Janda'>Janda</Option>
              <Option value='Cerai Hidup'>Cerai Hidup</Option>
            </Select>
          </div>
          <div className='grid grid-cols-1'>
            <Input
              type='email'
              variant='outlined'
              label='Email'
              placeholder='Email'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Textarea
              label='Message'
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  deskripsi_diri: e.target.value,
                });
              }}
            />
          </div>
          <div className='flex gap-4'>
            <Checkbox
              color='blue'
              label='Pencari Kerja'
              value={1}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  is_pencari_kerja: e.target.value,
                });
              }}
            />
            <Checkbox
              color='blue'
              label='Pencari Pelatihan'
              value={1}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  is_pencari_pelatian: e.target.value,
                });
              }}
            />
          </div>
          <div className='grid grid-cols-1'>
            <Checkbox
              color='blue'
              label='Apakah anda disabilitas?'
              value={1}
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  is_disabilitas: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <Button variant='text' color='red' onClick={handleClose}>
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' type='submit'>
            <span>Confirm</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
