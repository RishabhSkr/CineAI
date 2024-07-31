import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import Signup from './Signup';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useUserActions } from "../Hooks/userActions.js";

const Body = () => {
  const { addUser,removeUser } = useUserActions();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged (auth, async (user) =>  {
      if (user) {
        addUser(user);
      } else {
        removeUser();
      }
    });
    
    // unsubscribe when my component unmount
    return ()=>unsubscribe();
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
