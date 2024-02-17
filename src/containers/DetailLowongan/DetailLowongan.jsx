import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MainMenu } from "@/components/Menu/Menu";
import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import auth from "@/utils/auth";
import Loading from "@/components/Loading/Loading";
import swal from "sweetalert";

const DetailLowongan = () => {
  const router = useRouter();
  const token = auth.getToken();
  const { lowonganId } = router.query;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const formatIdr = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const fetchGetData = async () => {
    try {
      const response = await axios.get(
        "http://103.27.206.237:10102/api/guest/lowongan/all/",
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const [formValues, setFormValues] = useState({
    lowongan_id: lowonganId,
    pelamar_id: token && token.data ? token.data.id : null,
    alasan_melamar: "ingin mencari pengalaman",
  });
  const ApplyData = async () => {
    try {
      const response = await axios.post(
        "http://103.27.206.237:10102/api/lowongan/apply",
        formValues,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      swal({
        title: "Anda berhasil Memasukan Lamaran",
        text: "Silahkan klik tombol berikut",
        icon: "success",
      });
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchGetData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const lowonganDetail = data.find((item) => item.id === parseInt(lowonganId));
  const dataLowongan = lowonganDetail.lowongan;
  const lowonganGroup = data.filter((item) => item.lowongan === dataLowongan);
  console.log(lowonganDetail);

  return (
    <>
      <MainMenu />
      <div className='section py-10'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-8'>
              <div className='border rounded-lg shadow-lg p-4'>
                <div className='image-lowongan'>
                  <img src='/panasonic.png' alt='' />
                </div>
                <div className='section-lowongan-1 border-b pb-5'>
                  <h2 className='uppercase'>
                    {lowonganDetail.perusahaan.nama}
                  </h2>
                  <div>
                    <span className='capitalize text-gray-600'>
                      {lowonganDetail.perusahaan.alamat}
                    </span>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div>
                      <span className='capitalize text-gray-600'>
                        4 jam yg lalu
                        <div>
                          <span>Berakhir pada 31 Des 2024</span>
                        </div>
                        <div>
                          <span>
                            Sudah {lowonganDetail.lamaran.length} Pelamar
                          </span>
                        </div>
                      </span>
                    </div>
                    <div className='flex justify-end items-end'>
                      <Button className='bg-primaryBtn' onClick={ApplyData}>
                        Apply Job
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='section-lowongan-2 border-b py-5'>
                  <h3 className='mb-4'>Deskripsi Pekerjaan</h3>
                  <div className='mb-4'>
                    <Typography className='text-sm'>
                      Tanggungjawab: {lowonganDetail.deskripsi_lowongan}
                    </Typography>
                  </div>
                  <div className='grid grid-cols-3 gap-4'>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Bidang Pekerjaan
                      </span>
                      <Typography className='text-sm'>
                        {lowonganDetail.lowongan}
                      </Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Jenis Pekerjaan
                      </span>
                      <Typography className='text-sm'>
                        {lowonganDetail.tipe_perkerjaan.tipe}
                      </Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>Tipe</span>
                      <Typography className='text-sm'>
                        {lowonganDetail.lokasi_kerja}
                      </Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Jenis Kelamin
                      </span>
                      <Typography className='text-sm'>
                        {lowonganDetail.jenis_kelamin}
                      </Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Rentang Gaji
                      </span>
                      <Typography className='text-sm'>
                        {lowonganDetail.gaji_dari &&
                        lowonganDetail.gaji_sampai ? (
                          <Typography className='text-sm'>
                            {formatIdr.format(lowonganDetail.gaji_dari)} -{" "}
                            {formatIdr.format(lowonganDetail.gaji_sampai)}
                          </Typography>
                        ) : (
                          <Typography className='text-sm'>
                            Gaji Dirahasiakan
                          </Typography>
                        )}
                      </Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>Lowongan</span>
                      <Typography className='text-sm'>10 Lowongan </Typography>
                    </div>
                  </div>
                </div>
                <div className='section-lowongan-3 border-b py-5'>
                  <h3 className='mb-4'>Persyaratan Khusus</h3>
                  <div className='mb-4'>
                    <ul className='list-disc list-inside'>
                      <li className='text-sm my-2'>
                        Pengalaman {lowonganDetail.minimal_pengalaman} tahun
                      </li>
                      <li className='text-sm  my-2'>
                        Pengalaman {lowonganDetail.syarat_khusus}
                      </li>
                      <li className='text-sm  my-2'>
                        {lowonganDetail.status_kawin}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='section-lowongan-2  py-5'>
                  <h3 className='mb-4'>Persyaratan Umum</h3>
                  <div className='grid grid-cols-3 gap-4'>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Pendidikan Minimal
                      </span>
                      <Typography className='text-sm'>SMK</Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Rentang Usia
                      </span>
                      <Typography className='text-sm'>18-30 Tahun</Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Status Perkawinan
                      </span>
                      <Typography className='text-sm'>
                        Sudah & Belum Menikah
                      </Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Minimal Pengalaman
                      </span>
                      <Typography className='text-sm'>3 Tahun</Typography>
                    </div>
                    <div>
                      <span className='uppercase text-gray-600'>
                        Kondisi Fisik
                      </span>
                      <Typography className='text-sm'>
                        Non Disabilitas
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-4'>
              <div className='max-w-full md:max-w-md'>
                <h3 className='text-gray-600 mb-4'>Tentang Perusahaan</h3>
                <Typography>{lowonganDetail.perusahaan.nama}</Typography>
                <Typography className='mb-4'>
                  Visi Menjadi perusahaan penyedia jasa pengiriman berbasis
                  teknologi yang senantiasa terus bertumbuh untuk menciptakan
                  nilai-nilai bersama, m...
                </Typography>
                <Typography className='text-gray-600 mb-4'>
                  Lowongan Serupa
                </Typography>
                <div className='grid grid-cols-4 gap-4'>
                  {lowonganGroup.slice(0, 4).map((lowongan, index) => (
                    <div key={index} className='col-span-4'>
                      <div className='flex gap-4'>
                        <div className='col-span-1'>
                          <img src='/panasonic.png' alt='logo perusahaan' />
                        </div>
                        <div className='col-span-3 border-b pb-5'>
                          <Typography>{lowongan.perusahaan.nama}</Typography>
                          <Typography>{lowongan.lowongan}</Typography>
                          <Typography className='capitalize'>
                            {lowongan.perusahaan.alamat}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLowongan;
