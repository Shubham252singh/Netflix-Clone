import {useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './Signin'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";


function Body() {
  const appRouter = createBrowserRouter([
      {
          path: "/",
          element: <Signin />
      },
      {
          path:"/browse",
          element:<Browse/>
      },
  ]);
    
  return (
    <RouterProvider router ={appRouter}></RouterProvider>
  )
}

export default Body