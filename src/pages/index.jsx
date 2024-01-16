import React from "react";
import { Input, Button } from "@material-tailwind/react";
function App() {
  const handleSignUp = (event) => {
    event.preventDefault();
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignIn = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  return (
    <div className='section m-5 lg:m-0 flex justify-center items-center min-h-screen'>
      <div
        className='container h-128 l p-8 bg-white rounded shadow-md'
        id='container'
      >
        <div className='form-container sign-up-container'>
          <form action='#'>
            <h1 className='text-2xl mb-4'>Create Account</h1>
            <div className='mb-2'>
              <div className='mb-3'>
                <label htmlFor='ktp' className='text-sm'>
                  Nomor Induk Kependudukan (No. KTP)
                </label>
              </div>

              <Input
                variant='outlined'
                label='Masukan Nama lengkap'
                placeholder='Masukan Nama lengkap'
              />
            </div>
            <div className='mb-2'>
              <div className='mb-3'>
                <label htmlFor='namalengkap' className='text-sm'>
                  Nama Lengkap
                </label>
              </div>

              <Input
                variant='outlined'
                label='Masukan Nama lengkap'
                placeholder='Masukan Nama lengkap'
              />
            </div>
            <div className='mb-2'>
              <div className='mb-3'>
                <label htmlFor='namaibu' className='text-sm'>
                  Nama Ibu Kandung
                </label>
              </div>

              <Input
                variant='outlined'
                label='Masukan Nama Ibu Kandung'
                placeholder='Masukan Nama Ibu Kandung'
              />
            </div>

            <div className='flex justify-between items-center my-4'>
              <Button
                className='hidden btn-signup bg-primaryBtn hover:bg-blue-500 text-center m-auto rounded-3xl py-3 px-7 lg:py-3 lg:px-11 uppercase'
                onClick={handleSignIn}
              >
                Sign In
              </Button>
              <Button className=' btn-signup mx-2 bg-blue-500 hover:bg-primaryBtn text-center m-auto rounded-3xl py-3 px-7 lg:py-3 lg:px-11 uppercase  '>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
        <div className='form-container sign-in-container flex flex-col'>
          <form action='#'>
            <h1 className='text-2xl mb-4'>Sign in</h1>
            <div className='mb-2'>
              <div className='mb-3'>
                <label htmlFor='email' className='text-sm'>
                  Email atau No Telfon
                </label>
              </div>

              <Input
                variant='outlined'
                label='Masukan Nama lengkap'
                placeholder='Masukan Nama lengkap'
              />
            </div>
            <div className='mb-2'>
              <div className='mb-3'>
                <label htmlFor='passwod' className='text-sm'>
                  Password
                </label>
              </div>

              <Input
                variant='outlined'
                label='Masukan Password'
                placeholder='Masukan Password'
              />
            </div>
            <a href='#' className='text-blue-500 text-sm mb-4 text-center'>
              Forgot your password?
            </a>
            <div className='flex justify-between items-center'>
              <Button className='bg-primaryBtn hover:bg-blue-500 text-center m-auto rounded-3xl py-3 px-7 lg:py-3 lg:px-11 uppercase'>
                Sign In
              </Button>
              <Button
                className='hidden btn-signup mx-2 bg-blue-500 hover:bg-primaryBtn text-center m-auto rounded-3xl py-3 px-7 lg:py-3 lg:px-11 uppercase  '
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Button
                className='ghost border-2 rounded-3xl py-3 px-11 uppercase '
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <Button
                className='ghost border-2 rounded-3xl py-3 px-11 uppercase'
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
