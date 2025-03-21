import React, { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import {motion, AnimatePresence} from 'framer-motion'
import { useLocoScroll } from '../Scroll';
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  const locoScroll = useLocoScroll();

  useEffect(() => {
    if (showMenu) {
      locoScroll?.current?.stop();
    } else {
      locoScroll?.current?.start();
    }
  }, [showMenu, locoScroll]);
  
  return (
    <div className='relative'>
    <div className='header h-[70px] w-[100%] flex  justify-between items-center '>
        <h5 className='text-xl font-extralight w-[30%]'>Rajasthan, IN</h5>
        <Link to="/" className='w-[30%]'>
        <h5 className='text-xl mFont  cursor-pointer'>The Paper Portfolio</h5>
        </Link>
        <i className="ri-menu-3-line text-xl w-[10%] text-right cursor-pointer" onClick={() => {
          setShowMenu(true)
        }}></i>
    </div>
    <AnimatePresence>
        {showMenu && (
          <motion.div
          initial={{ y: '100%', skewY: 20,
            transition:{ duration: 1.2, ease: [0.57, 0, 0.75, 2.5] }
           }}
          animate={{ y: 0, skewY: 0,transition:{ duration: 1.2, ease: [0.57, 0, 0.75, 2] } }}
          exit={{ x: '100%', skewX: 40,transition:{ duration: 1.2, ease: [0.57, 0, 0.75, 0] } }}
           // this cubic bezier curve feels smooth & wave-like
          className='fixed font-[Canopee] top-0 right-0 h-screen w-full text-[#BEB5AB] bg-black flex flex-col items-center justify-center z-50'
        >
        
            <Link to="/" className='absolute top-10 cursor-pointer'>
            <h5 className='text-xl mFont '>The Paper Portfolio</h5>
            </Link >
            <i
              className="ri-close-line absolute top-8 right-6 text-4xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            ></i>
            <NavLink
  to="/"
  className="text-[250px] group cursor-pointer"
>
  {({ isActive }) => (
    <span
      className={`block leading-none transition-all duration-300 group-hover:tracking-wide hover:brightness-50  ${isActive ? "line-through decoration-red-600" : ""}`}
      onClick={() => setShowMenu(false)}
    >
      Home
    </span>
  )}
</NavLink>


<NavLink
  to="/Work"
  className="text-[250px] group cursor-pointer"
>
  {({ isActive }) => (
    <span
      className={`block leading-none transition-all duration-300 group-hover:tracking-wide hover:brightness-50  ${isActive ? "line-through decoration-red-600" : ""}`}
      onClick={() => setShowMenu(false)}
    >
      WORK
    </span>
  )}
</NavLink>
<div className='space-x-5 mt-4 text-3xl'>
                <Link target='_blank'to='https://x.com/AniketYadav05_' className='hover:brightness-50'>X </Link>
                <Link target='_blank'to='https://www.linkedin.com/in/aniketyadav05/' className='hover:brightness-50'>LinkedIn</Link>
                <Link target='_blank'to='https://github.com/Aniketyadav05' className='hover:brightness-50'>Github</Link>
                
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Header