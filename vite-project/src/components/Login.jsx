import { useRef, useState,useEffect} from 'react';
import { Header } from './Header';
import { useNavigate } from "react-router-dom"
import { formValidate } from '../utils/formValidate';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { isUserLoggedInState } from '../store/selectors/isUserLogged';
import { useRecoilValue } from 'recoil';
import { BACKGROUND } from '../utils/constants';


const Login = () => {
  const isUserLogged= useRecoilValue(isUserLoggedInState);
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLogged) {
      navigate('/browse');
    }
  }, [isUserLogged, navigate]);

  if (isUserLogged) {
    return null; // Return null to avoid rendering the component
  }
  return (
   
    <div className='absolute top-0 left-0 w-full h-full '>
      <Header />
      <div className='absolute top-0 left-0 w-full h-full '>
        <img
          src={BACKGROUND}
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
  const email = useRef(null);
  const password = useRef(null);
  const [emailErrormsg,setEmailErrorMsg]=useState(null);
  const [passwordErrormsg,setpasswordErrormsg]=useState(null);

  
  const handSignInButton = async (e) => {
    e.preventDefault();
    // validate 
    const msg = formValidate(email.current.value, password.current.value);
    
    // Perform sign-in logic here
    if (msg!= null && msg.includes("email")) {
      setpasswordErrormsg(null);
      setEmailErrorMsg(msg);
    } else if (msg!= null && msg.includes("password")) {
      setEmailErrorMsg(null);
      setpasswordErrormsg(msg);
    } else {
      setEmailErrorMsg(null);
      setpasswordErrormsg(null);
    }
    if (msg) return;
    
    try {
      //Login user
      const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
      const user = userCredential.user;
      alert("Successfully Logged In  User!"); 
      console.log(user);
      navigate('/browse'); // Move navigation here
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setpasswordErrormsg(errorMessage);
      console.log(errorCode + ": " + errorMessage);
    }
  };



  const handleSignupNavigation = (event) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    navigate('/signup');
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

      <form>
        <div className='mb-4'>
          <input
            ref={email}
            type='email'
            placeholder='Email Address'
            className='w-full bg-transparent text-white p-2 border-b border-gray-500 focus:outline-none'
          />
        </div>
        <p className=' text-red-500 text-sm mb-2' >{emailErrormsg}</p>
        <div className='mb-6'>
          <input
          ref={password}
            type='password'
            placeholder='Password'
            className='w-full bg-transparent text-white p-2 border-b border-gray-500 focus:outline-none'
          />
        </div>
        <p className=' text-red-500 text-sm mb-2' >{passwordErrormsg}</p>
        <SignInButton handSignInButton={handSignInButton}/>
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
const SignInButton = ({ handSignInButton }) => {
  return (
    <button
      onClick={handSignInButton}
      className='w-full bg-red-600 border rounded-md text-white py-2 hover:bg-red-700 transition duration-300 mb-4'>
      Sign In
    </button>
  );
};
export default Login;