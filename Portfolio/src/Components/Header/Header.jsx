import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='header h-[70px] w-[100%] flex  justify-between items-center '>
        <h5 className='text-xl font-extralight w-[30%]'>Rajasthan, IN</h5>
        <h5 className='text-xl mFont w-[30%]'>The Paper Portfolio</h5>
        <i className="ri-menu-3-line text-xl w-[10%] text-right"></i>
    </div>
  )
}

export default Header