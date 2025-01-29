import React from 'react'
import AppLayout from './Components/Layout/AppLayout'

import Home from "./Pages/Home"
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import About from './Pages/About'
import CountryDetails from './Components/Layout/CountryDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      
        {
          path : "/",
          element: <Home/>
        },
        {
          path : "about",
          element: <About/>
        },
        {
          path : "country",
          element: <Country/>
        },
        {
          path : "country/:id",
          element: <CountryDetails/>
        },
        {
          path : "contact",
          element: <Contact/>
        },
      
      
    ]
  }
  
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App