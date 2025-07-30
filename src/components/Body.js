import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './Signin'
import Browse from './Browse'


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