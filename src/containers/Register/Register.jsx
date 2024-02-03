import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React from "react";
import useRegister from "./Hooks/useRegister";

const Register = () => {
  const { loading, formValues, setFormValues, handleSubmit, isSubmit } =
    useRegister();
  console.log(formValues);

  return (
    <div className='section'>
      <div className='container flex items-center justify-center h-screen'>
        <div className='form bg-white p-5 rounded-xl shadow-lg w-[425px] mx-auto my-auto border'>
          <Card color='transparent' shadow={false} className=''>
            <Typography variant='h4' color='blue-gray ' className='text-center'>
              Register
            </Typography>
            <Typography color='gray' className='mt-1 font-normal text-center'>
              Selamat datang di SIJAIM
            </Typography>
            <form
              className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
              onSubmit={handleSubmit}
            >
              <div className='mb-1 flex flex-col gap-6'>
                <Typography variant='h6' color='blue-gray' className='-mb-3'>
                  Your Name
                </Typography>
                <Input
                  size='lg'
                  placeholder='name@mail.com'
                  className='!border-t-blue-gray-200 focus:!border-t-gray-900'
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setFormValues({ ...formValues, nama: e.target.value });
                  }}
                  value={formValues.nama ?? ""}
                />
                <Typography variant='h6' color='blue-gray' className='-mb-3'>
                  Your Username
                </Typography>
                <Input
                  size='lg'
                  placeholder='name@mail.com'
                  className='!border-t-blue-gray-200 focus:!border-t-gray-900'
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setFormValues({ ...formValues, username: e.target.value });
                  }}
                  value={formValues.username ?? ""}
                />
                <Typography variant='h6' color='blue-gray' className='-mb-3'>
                  Your E-mail
                </Typography>
                <Input
                  type='email'
                  size='lg'
                  placeholder='name@mail.com'
                  className='!border-t-blue-gray-200 focus:!border-t-gray-900'
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                  value={formValues.email ?? ""}
                />

                <div className='flex justify-between items-center'>
                  <div>
                    <Typography
                      variant='h6'
                      color='blue-gray'
                      className='-mb-3'
                    >
                      Password
                    </Typography>
                  </div>
                  <Typography
                    variant='h6'
                    className='-mb-3 text-primaryBtn font-normal'
                  >
                    Lupa Password?
                  </Typography>
                </div>

                <Input
                  type='password'
                  size='lg'
                  placeholder='********'
                  className='!border-t-blue-gray-200 focus:!border-t-gray-900'
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      password: e.target.value,
                    });
                  }}
                  value={formValues.password ?? ""}
                />
              </div>
              <Button className='mt-6 bg-primaryBtn' fullWidth type='submit'>
                Login
              </Button>
              <Typography color='gray' className='mt-4 text-center font-normal'>
                Belum memiliki akun?
                <a href='#' className='font-medium text-primaryBtn'>
                  Daftar Sekarang
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
