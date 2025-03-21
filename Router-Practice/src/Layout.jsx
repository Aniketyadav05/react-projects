import React from 'react'
import { Header,Footer } from './Components/Index'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>

    </>
  )
}

export default Layout