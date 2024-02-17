import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Textarea,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import swal from "sweetalert";
import axios from "axios";
import auth from "@/utils/auth";
import { MainMenu } from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import Loading from "@/components/Loading/Loading";

const PostLowongan = () => {
  const [sektor, setSektor] = useState();
  const [pendidikan, setPendidikan] = useState();
  const [keterampilan, setKeterampilan] = useState();
  const token = auth.getToken();
  const [formValues, setFormValues] = useState({
    perusahaan_id: token && token.data ? token.data.id : null,
    lowongan: "",
    sektor_sub_id: 0,
    deskripsi_lowongan: "",
    tipe_pekerjaan_id: 0,
    lokasi_kerja: "",
    jenis_kelamin: "",
    gaji_dari: 0,
    gaji_sampai: 0,
    syarat_khusus: "",
    pendidikan_tingkat_id: 0,
    status_kawin: "",
    minimal_pengalaman: 0,
    keterampilan: [""],
  });

  console.log("formValues.id:", formValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://103.27.206.237:10102/api/lowongan/insert",
        formValues,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
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

  const fetchGetData = async () => {
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
  const fetchGetDataPendidikan = async () => {
    try {
      const response = await axios.get(
        "http://103.27.206.237:10102/api/master/pendidikanTingkat",
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      setPendidikan(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchGetDataKeterampilan = async () => {
    try {
      const response = await axios.get(
        "http://103.27.206.237:10102/api/master/keterampilan",
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      setKeterampilan(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchGetData();
    fetchGetDataPendidikan();
    fetchGetDataKeterampilan();
  }, []);

  if (!sektor || !keterampilan || !pendidikan) {
    return <Loading />;
  }

  return (
    <>
      <MainMenu />
      <div className='section py-10'>
        <div className='container'>
          <Card className='mx-auto max-w-[700px] border'>
            <CardBody className='px-8 py-5  '>
              <Typography variant='h4' color='blue-gray' className='pb-4'>
                Post Lowongan
              </Typography>
              <form onSubmit={handleSubmit}>
                <div className='grid gap-4'>
                  <div className='grid grid-cols-1'>
                    <Input
                      variant='outlined'
                      label='Lowongan'
                      placeholder='Lowongan'
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          lowongan: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='grid grid-cols-1'>
                    <Select
                      color='lightBlue'
                      value={sektor.id}
                      label='Sektor'
                      onChange={(selectedValue) => {
                        setFormValues({
                          ...formValues,
                          sektor_sub_id: selectedValue,
                        });
                      }}
                    >
                      {sektor.map((item) => (
                        <Option key={item.id} value={item.id}>
                          {item.sektor}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className='grid grid-cols-1'>
                      <Input
                        variant='outlined'
                        label='Tipe Pekerjaan'
                        placeholder='Tipe Pekerjaan'
                        type='number'
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            tipe_pekerjaan_id: parseInt(e.target.value, 10),
                          });
                        }}
                      />
                    </div>
                    <div className='lg:col-span-1'>
                      <Input
                        variant='outlined'
                        label='Lokasi Kerja'
                        placeholder='Lokasi Kerja'
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            lokasi_kerja: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className='lg:col-span-1'>
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
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div>
                      <Input
                        variant='outlined'
                        label='Gaji Minimal'
                        placeholder='Gaji Minimal'
                        type='number'
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            gaji_dari: parseInt(e.target.value, 10),
                          });
                        }}
                      />
                    </div>
                    <div>
                      <Input
                        variant='outlined'
                        label='Gaji Maksimal'
                        placeholder='Gaji Maksimal'
                        type='number'
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            gaji_sampai: parseInt(e.target.value, 10),
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-1'>
                    <Input
                      variant='outlined'
                      label='Syarat Khusus'
                      placeholder='Syarat Khusus'
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          syarat_khusus: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='grid grid-cols-1'>
                    <Select
                      color='lightBlue'
                      value={pendidikan.id}
                      label='Tingkat Pendidikan'
                      onChange={(selectedValue) => {
                        setFormValues({
                          ...formValues,
                          pendidikan_tingkat_id: selectedValue,
                        });
                      }}
                    >
                      {pendidikan.map((item) => (
                        <Option key={item.id} value={item.id}>
                          {item.pendidikan}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div className='grid grid-cols-1'>
                    <Select
                      label='Status Perkawinan'
                      value={formValues.status_kawin}
                      onChange={(selectedValue) => {
                        setFormValues({
                          ...formValues,
                          status_kawin: selectedValue,
                        });
                      }}
                    >
                      <Option value='Sudah Menikah'>Sudah Menikah</Option>
                      <Option value='Belum Menikah'>Belum Menikah</Option>
                      <Option value='Duda'>Duda</Option>
                      <Option value='Janda'>Janda</Option>
                      <Option value='Cerai Hidup'>Cerai Hidup</Option>
                    </Select>
                  </div>
                  <div className='grid grid-cols-1'>
                    <Input
                      variant='outlined'
                      label='Minimal Pengalaman'
                      placeholder='Minimal Pengalaman'
                      type='number'
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          minimal_pengalaman: parseInt(e.target.value, 10),
                        });
                      }}
                    />
                  </div>
                  <Select
                    color='lightBlue'
                    value={keterampilan.id}
                    label='Keterampilan'
                    onChange={(selectedValue) => {
                      setFormValues({
                        ...formValues,
                        keterampilan: selectedValue,
                      });
                    }}
                  >
                    {keterampilan.map((item) => (
                      <Option key={item.id} value={item.id}>
                        {item.keterampilan}
                      </Option>
                    ))}
                  </Select>
                  <div className='grid grid-cols-1'>
                    <Textarea
                      label='Deskripsi'
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          deskripsi_lowongan: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className='flex justify-between my-4'>
                  <Button variant='text' color='red'>
                    <span>Cancel</span>
                  </Button>
                  <Button variant='gradient' color='green' type='submit'>
                    <span>Simpan</span>
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostLowongan;
