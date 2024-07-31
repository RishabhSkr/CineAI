// Signup Form
import { useRef, useState, useEffect } from 'react';
import { Header } from './Header';
import { useNavigate } from "react-router-dom";
import { formValidate } from '../utils/formValidate';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { isUserLoggedInState } from '../store/selectors/isUserLogged';
import { useRecoilValue } from 'recoil';
import { useUserActions } from '../Hooks/userActions'
import { BACKGROUND, USERPIC } from './constants';

export const Signup = () => {
  const isUserLogged = useRecoilValue(isUserLoggedInState);
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
    <div className='absolute top-0 left-0 w-full h-full'>
      <Header />
      <div className='absolute top-0 left-0 w-full h-full'>
        <img
          src={BACKGROUND}
          alt='background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75'></div>
      </div>
      <SignupForm />
    </div>
  );
}

function SignupForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(""); 
  const email = useRef(null);
  const password = useRef(null);
  const [emailErrormsg, setEmailErrorMsg] = useState(null);
  const [passwordErrormsg, setPasswordErrorMsg] = useState(null);
  const { addUser } = useUserActions(); // Use the custom hook

  const handleButtonClick = async (e) => {
    e.preventDefault();

    // Validate
    const msg = formValidate(email.current.value, password.current.value);
    if (msg) {
      if (msg.includes("email")) {
        setPasswordErrorMsg(null);
        setEmailErrorMsg(msg);
      } else if (msg.includes("password")) {
        setEmailErrorMsg(null);
        setPasswordErrorMsg(msg);
      }
      return;
    }

    // Create user
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
      const user = userCredential.user;
      if (user) {
        await updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL:USERPIC
        });

        addUser(user); // Set the user state using the custom hook
        alert("Successfully Created User!");
        navigate('/browse');
      } else {
        console.log("User not found!");
      } 
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setPasswordErrorMsg(errorMessage);
      console.log(`${errorCode}: ${errorMessage}`);
    }
  };

  const handleLoginNavigation = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='signup-form-container w-full max-w-md min-h-[640px] bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-16 text-white rounded-md'>
      <div className='text-white mb-4 text-3xl font-bold'>
        Sign up
      </div>
      <form>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Enter your name'
            className='w-full bg-transparent text-white p-2 border-b border-gray-500 focus:outline-none'
            value={userName} // Set value to userName state
            onChange={(e) => setUserName(e.target.value)} // Update userName state on change
            required
          />
        </div>
        <div className='mb-4'>
          <input
            ref={email}
            type='email'
            placeholder='Email Address'
            className='w-full bg-transparent text-white p-2 border-b border-gray-500 focus:outline-none'
            required
          />
        </div>
        <p className='text-red-500 text-sm mb-2'>
          {emailErrormsg}
        </p>
        <div className='mb-6'>
          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='w-full bg-transparent text-white p-2 border-b border-gray-500 focus:outline-none'
            required
          />
        </div>
        <p className='text-red-500 text-sm mb-2'>
          {passwordErrormsg}
        </p>
        <button onClick={handleButtonClick} className='w-full bg-red-600 border rounded-md text-white py-2 hover:bg-red-700 transition duration-300 mb-4'>
          Sign up
        </button>

        <div className='flex items-center justify-between mb-4'>
          <span className='border-t border-gray-500 flex-grow mr-3'></span>
          <span className='text-center'>OR</span>
          <span className='border-t border-gray-500 flex-grow ml-3'></span>
        </div>
        <p className='text-center mb-4'>
          <span className='opacity-70'>Already a member?</span>
          <a onClick={handleLoginNavigation} className='text-white hover:underline ml-2 hover:cursor-pointer'>Login.</a>
        </p>
        <span className='text-xs opacity-60 mb-2 text-center'>This page is protected by Google reCAPTCHA to ensure you&aposre not a bot.</span>
        <span><a href="#" className='text-xs text-blue-700 hover:underline'>Learn more.</a></span>
      </form>
    </div>
  );
}

export default Signup;
