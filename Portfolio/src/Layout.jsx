import React from 'react'
import { Scroll,Header,Footer,Loader } from './Components/index'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Layout = () => {
  return (
    <Scroll>
      <Loader>
        <div className="min-h-screen flex flex-col bg-[#C4BCB3]">
          <Header />
          <main className="flex-grow w-full">
            <Outlet />
          </main>
          <Footer />
        </div>
      </Loader>
    </Scroll>
  )
}

export default Layout