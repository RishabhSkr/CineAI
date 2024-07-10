import React from 'react';
import { useState } from 'react';
import { Header } from './Header';
import { useNavigate } from "react-router-dom"

export const Login = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full '>
      <Header />
      <div className='absolute top-0 left-0 w-full h-full '>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg'
          alt='background'
          className='w-full h-full object-cover '
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75'></div>
      </div>
      <LoginForm />

    </div>
  );
};

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignupNavigation = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    navigate('/signup');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-form-container
                      w-full max-w-md 
                      min-h-[640px]  
                      bg-opacity-80 
                      absolute 
                      top-1/2 left-1/2 
                      transform -translate-x-1/2 -translate-y-1/2
                    bg-black p-16 text-white 
                      rounded-md'>
      <div className='text-white mb-4 text-3xl font-bold'>
        Sign In
      </div>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <input
            type='email'
            value={email}
            placeholder='Email Address'
            onChange={handleEmailChange}
            className='w-full bg-transparent text-white p-2 border-b border-gray-500 focus:outline-none'
          />
        </div>
        <div className='mb-6'>
          <input
            type='password'
            value={password}
            placeholder='Password'
            onChange={handlePasswordChange}
            className='w-full bg-transparent text-white p-2 border-b border-gray-500 focus:outline-none'
          />
        </div>
        <button className='w-full bg-red-600 border rounded-md text-white py-2 hover:bg-red-700 transition duration-300 mb-4'>
          Sign In
        </button>
        <div className='flex items-center justify-between mb-4'>
          <span className='border-t border-gray-500 flex-grow mr-3'></span>
          <span className='text-center'>OR</span>
          <span className='border-t border-gray-500 flex-grow ml-3'></span>
        </div>

        <p className='text-center mb-4'>
          <a href='#' className='hover:underline hover:opacity-70'>Forgot password?</a>
        </p>
        <p className='text-center mb-4'>
          <span className='opacity-70'>New to Netflix?</span>
          <a onClick={handleSignupNavigation} className='text-white hover:underline ml-2 hover:cursor-pointer'>Sign up now.</a>
        </p>
        <span className='text-xs opacity-60 mb-2 text-center'>This page is protected by Google reCAPTCHA to ensure you&aposre not a bot.</span>
        <span><a href="#" className='text-xs text-blue-700 hover:underline'>Learn more.</a>
        </span>
      </form>
    </div>
  );
}
