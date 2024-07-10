import { BrowserRouter as Router, Routes, Route, createBrowserRouter,RouterProvider } from "react-router-dom";
import React from 'react'
import { Login } from './Login'
import { Browse } from './Browse'
import { Signup } from "./Signup";
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        }, 
        {
            path:"/browse",
            element: <Browse/>
        },
        {
          path:"/Signup",
          element: <Signup/>
      }
    ]);
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body