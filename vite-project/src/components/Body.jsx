import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import Signup from './Signup';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserActions } from "../store/atoms/userActions";



const Body = () => {
  const { addUser, removeUser } = useUserActions();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged (auth, async (user) =>  {
      if (user) {
        addUser(user);
      } else {
        removeUser();
      }
    });
  }, [addUser, removeUser]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <div>
      </div>
    </RouterProvider>
  );
};



export default Body;
