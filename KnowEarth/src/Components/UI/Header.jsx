import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-40 bg-[#202020] w-[100%] shadow-[0_10px_10px_-10px_rgba(33,35,38,0.5)] '>
      <div className="h-40 max-w-[980px] m-auto">
      <div className="grid grid-cols-[0.5fr_1fr] items-center p-[0_3.2rem] h-40">
        <div >
          <NavLink to="/">
          <h1 className='text-4xl font-extrabold'>KnowEarth</h1>
          </NavLink>
        </div>
        <nav>
          <ul className='flex justify-end gap-[3.2rem] text-[#fff]'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/country">Country</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
          </ul>
        </nav>
      </div>
      </div>
    </header>
  )
}

export default Header