import React from 'react'
import { NavLink } from 'react-router-dom'

const Btn = () => {
  return (
    <NavLink to="/Work">
    <div className="cursor-pointer h-[260px] w-full bg-[#CAC1B6] flex items-center justify-center overflow-hidden border-2 border-[#2f2f2fc6] rounded-[50%] relative group">

  <img 
    className="h-[60px] absolute left-[-50%] transition-all ease-in-out duration-700 group-hover:left-[28%]" 
    src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg" 
    alt="arrow"
  />

  
  <h1 className="text-[100px] font-[Canopee] font-light w-full flex items-center justify-center leading-none transition-all ease-in-out duration-700 group-hover:translate-x-[100%]">
    ALL WORKS
  </h1>
</div>
</NavLink>


  )
}

export default Btn