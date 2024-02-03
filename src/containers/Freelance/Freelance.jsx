import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FaAngleRight } from "react-icons/fa6";
const Freelance = () => {
  const [dataSektor, setDataSektor] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://103.27.206.237:10102/api/guest/lowongan/sektor"
      );
      setDataSektor(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='section py-10 lg:py-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:auto-cols-max md:lg:grid-flow-col '>
          <div>
            <h2 className='text-3xl mb-4 lg:w-3/4'>
              Kamu Pekerja Lepas? <br />
              Temukan Proyek yang Cocok Disini
            </h2>
            <Typography className='m-0 lg:w-3/5'>
              Berikut merupakan keterampilan - keterampilan yang ada yang
              berkaitan dengan proyek - proyek yang ada.
            </Typography>
          </div>
          <div className='items-end flex mt-4 lg:mt-0'>
            <Button className='bg-primaryBtn'>Lihat Semua Proyek</Button>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 mt-12'>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>Sales & Marketing</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>
                Web, Mobile & Software Dev
              </Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>IT & Networking</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>Data Science & Analytics</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>Admin Support</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>Legal</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>Design & Creative</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>Accounting & Consulting</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
          <Button
            className='p-4 rounded-lg border bg-white text-black flex justify-between items-center md:flex 
    transition ease-in-out delay-160 hover:-translate-y-1 hover:scale-80 duration-300 capitalize'
          >
            <div className='text-left'>
              <Typography className='mb-2'>Translation</Typography>
              <span className='font-light text-gray-500'>0 proyek</span>
            </div>
            <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
